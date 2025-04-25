import foodsList from './Menu.json';

const images = {};

const context = require.context('./img/foods', false, /\.(png|jpe?g|svg|webp)$/)

context.keys().forEach((key) => {
    const imageName = key.replace('./', '');
    images[imageName] = context(key);
})

export default function TopProducts({ logInId, cartAmount, addToCart }) {

    const convertToCurrency = amount => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'PHP',
        });
        return formatter.format(amount);
    }

    const generateList = array => {
        return array.map((food, index) => {

            const buttonTag = `${logInId === 0 ? "bg-gray-400" : "bg-black"} text-white p-[5px] rounded-md`;

            return (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 h-auto sm:h-[310px] overflow-hidden border-solid border-[1px] border-gray-400 max-w-[580px] rounded-lg w-full">
                    {/* Image Section */}
                    <div className="w-full sm:w-auto">
                        <a href={food.link} rel="noreferrer" target="_blank">
                            <img className="h-full w-full sm:w-auto object-cover" src={images[food.image]} alt={food.name} />
                        </a>
                    </div>

                    {/* Product Details Section */}
                    <div className="flex flex-col justify-center h-full gap-[15px] p-[20px] sm:pl-[20px]">
                        <h1 className="text-[23px] sm:text-[26px] font-semibold">{food.name}</h1>
                        <p className="text-[20px] sm:text-[22px]">{convertToCurrency(food.price)}</p>
                        <div className="flex flex-row justify-between sm:px-[30px]">
                            <button className={buttonTag} onClick={() => addToCart(index, -1)}>-</button>
                            <span className={`${logInId === 0 ? "text-gray-300" : "text-black"}`}>{cartAmount[index]}</span>
                            <button className={buttonTag} onClick={() => addToCart(index, 1)}>+</button>
                        </div>
                        <button className={buttonTag} disabled={logInId === 0}>Add to Cart</button>
                        {logInId === 0 ? <p className="text-red-600 text-[12px]">You need an account before you can order.</p> : null}
                    </div>
                </div>
            )
        })
    }

    const arrangeBy = (object, key) => {
        //arrangeBy(object to be arranged, the key the arrangement is based on)
        if (!(key in object[1])) {
            return object;
        }
        
        return object.sort((a, b) => a[key] - b[key]).reverse();
    }

    return (
        <div id="BestSellers" className="relative width-full px-[20px] sm:px-[80px] pt-[100px] bg-white z-20">
            <h1 className="text-[32px] sm:text-[40px] font-bold text-[#0c2f3d]">Best Sellers</h1>
            <div className="flex flex-wrap gap-[20px] mt-[30px] justify-center sm:justify-start">
                {generateList(arrangeBy(foodsList, "timesOrdered").slice(0, 4))}
            </div>
        </div>
    )
}
