import logo from './img/logo.png';

export default function Footer() {

    return(
        <div className="relative width-full pt-[100px] bg-white text-white z-20">
            <div className="grid grid-cols-2 w-full bg-black text-white px-[80px] py-[80px] ">
                <div className="flex flex-col gap-[80px]">
                    <img className="w-[40%] bg-white" src={logo} alt="Iruwin Seafood and Grills" />
                    <div className="flex flex-col gap-[30px]">
                        <p className="font-bold text-[20px]">Navigate</p>
                        <div className="flex flex-col">
                            <a href="#Home">Home</a>
                            <a href="#BestSellers">Best Sellers</a>
                            <a href="#About">About</a>
                        </div>
                    </div>

                    <div className="text-[12px]">
                        <p>All rights reserved</p>
                        <p>All sources of the images used are provided by clicking on the image.</p>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}