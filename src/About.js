import phone from './img/phone.jpg'; //Kerde Severin https://www.pexels.com/photo/selective-focus-photography-of-person-using-iphone-x-1542252/
import dinner from './img/dinner.jpg' //Auguste de Richelieu https://www.pexels.com/photo/family-having-dinner-and-celebrating-4262173/

export default function About({ searchText }) {

    return(
        <div id="About" className="flex flex-col gap-[130px] relative width-full bg-white z-20 px-[85px] pt-[150px] pb-[20px]">

            <div>
                <h1 className="text-[40px]/[50px] font-bold text-[#0c2f3d]">We strive to give you the authentic restaurant experience without ever leaving your home. No deliver fees needed.</h1>
            </div>

            <div className="grid grid-cols-2">
                <div className="">
                    <a href="https://www.pexels.com/photo/selective-focus-photography-of-person-using-iphone-x-1542252/" rel="noreferrer" target="_blank"><img className="rounded-xs" src={phone} alt="by Kerde Severin" /></a>
                </div>

                <div className="flex flex-col gap-[30px] pl-[80px] m-auto">
                    <h1 className="text-[40px]/[50px] font-bold text-[#0c2f3d]">High Quality foods at the tip of your thumb!</h1>
                    <p className="text-[19px]">Info</p>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-[30px] m-auto">
                    <h1 className="text-[40px]/[50px] font-bold text-[#0c2f3d]">Experience fine dining at the convenience of your own home!</h1>
                    <p className="text-[19px]">Take a gander at the various high quality foods in our menu.</p>
                    <button className="text-white bg-blue-500 rounded-md w-[200px] text-[23px] p-2 z-10">Browse Now!</button>
                </div>

                <div className="">
                    <a href="https://www.pexels.com/photo/family-having-dinner-and-celebrating-4262173/" rel="noreferrer" target="_blank"><img className="rounded-xs" src={dinner} alt="by Auguste de Richelieu" /></a>
                </div>
            </div>
        </div>
    )
}