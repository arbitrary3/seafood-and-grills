import foodsList from './Menu.json';

const images = {};

const context = require.context('./img/foods', false, /\.(png|jpe?g|svg|webp)$/)

context.keys().forEach((key) => {
    const imageName = key.replace('./','');
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
        return array.map((food,index) => {

            const buttonTag = `${logInId===0 ? "bg-gray-400" : "bg-black"} text-white p-[5px] rounded-md`;

            return (
                <div key={index} className="grid grid-cols-2 h-[310px] overflow-hidden border-solid border-[1px] border-gray-400 width-full rounded-lg">
                    <div className="">
                        <a href={food.link} rel="noreferrer" target="_blank" ><img className="h-full w-auto object-cover" src={images[food.image]} alt="" /></a>
                    </div>

                    <div className="flex flex-col justify-center h-full gap-[15px] p-[20px] pl-[20px] m-auto">
                        <h1 className="text-[23px]/[28px] font-semibold">{food.name}</h1>
                        <p className="text-[20px]">{convertToCurrency(food.price)}</p>
                        <div className="flex flex-row justify-between px-[30px]">
                            <button className={buttonTag} onClick={() => addToCart(index,-1)}>-</button>
                            <span className={`${logInId===0 ? "text-gray-300" : "text-black"}`}>{cartAmount[index]}</span>
                            <button className={buttonTag} onClick={() => addToCart(index,1)}>+</button>
                        </div>
                        <button className={buttonTag} disabled={logInId===0}>Add to Cart</button>
                        {logInId===0 ? <p className="text-red-600 text-[12px]">You need an account before you can order.</p> : null}
                    </div>
                </div>
            )
        })
    }

    const arrangeBy = (object,key) => {
        //arrangeBy(object to be arranged, the key the arrangement is based on)
        if (!(key in object[1])) {
            return object;
        }
        
        return object.sort((a,b) => a[key] - b[key]).reverse();
    }

    return ([
        <div id="BestSellers" className="relative width-full px-[80px] pt-[100px] bg-white z-20">
            <h1 className="text-[40px]/[50px] font-bold text-[#0c2f3d]">Best Sellers</h1>
            <div className="grid grid-cols-2 gap-[20px] mt-[30px]">
                {console.log(images)}
                {generateList(arrangeBy(foodsList,"timesOrdered").slice(0,4))}
            </div>
        </div>
    ])
}