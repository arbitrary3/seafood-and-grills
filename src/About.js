import phone from './img/phone.jpg'; //Kerde Severin https://www.pexels.com/photo/selective-focus-photography-of-person-using-iphone-x-1542252/
import dinner from './img/dinner.jpg' //Auguste de Richelieu https://www.pexels.com/photo/family-having-dinner-and-celebrating-4262173/

export default function About({ searchText }) {

    return(
        <div id="About" className="flex flex-col gap-[130px] relative w-full bg-white z-20 px-[20px] sm:px-[85px] pt-[80px] sm:pt-[150px] pb-[20px]">

            {/* Main Title Section */}
            <div>
                <h1 className="text-[28px] sm:text-[40px] font-bold text-[#0c2f3d] text-center sm:text-left">
                    We strive to give you the authentic restaurant experience without ever leaving your home. No delivery fees needed.
                </h1>
            </div>

            {/* First Image and Text Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-0">
                <div>
                    <a href="https://www.pexels.com/photo/selective-focus-photography-of-person-using-iphone-x-1542252/" rel="noreferrer" target="_blank">
                        <img className="rounded-xs w-full h-auto" src={phone} alt="by Kerde Severin" />
                    </a>
                </div>

                <div className="flex flex-col gap-[30px] pl-0 sm:pl-[80px] m-auto">
                    <h1 className="text-[28px] sm:text-[40px] font-bold text-[#0c2f3d] text-center sm:text-left">
                        High Quality foods at the tip of your thumb!
                    </h1>
                    <p className="text-[16px] sm:text-[19px] text-center sm:text-left">Delicious meals, delivered to your doorstep.</p>
                </div>
            </div>

            {/* Second Image and Text Section with Swapping Grid on Smaller Screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-0">
                <div className="order-2 sm:order-1 flex flex-col gap-[30px] m-auto">
                    <h1 className="text-[28px] sm:text-[40px] font-bold text-[#0c2f3d] text-center sm:text-left">
                        Experience fine dining at the convenience of your own home!
                    </h1>
                    <p className="text-[16px] sm:text-[19px] text-center sm:text-left">
                        Take a gander at the various high-quality foods in our menu.
                    </p>
                    <button className="text-white bg-blue-500 rounded-md w-[200px] text-[18px] sm:text-[23px] p-2 z-10 m-auto sm:m-0">
                        Browse Now!
                    </button>
                </div>

                <div className="order-1 sm:order-2">
                    <a href="https://www.pexels.com/photo/family-having-dinner-and-celebrating-4262173/" rel="noreferrer" target="_blank">
                        <img className="rounded-xs w-full h-auto" src={dinner} alt="by Auguste de Richelieu" />
                    </a>
                </div>
            </div>
        </div>
    )
}
