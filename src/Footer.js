import logo from './img/logo.png';

export default function Footer() {
    return (
        <div className="relative w-full pt-[100px] bg-white text-white z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full bg-black text-white px-4 sm:px-[80px] py-[80px]">
                <div className="flex flex-col gap-[80px] sm:gap-[30px]">
                    <img className="w-[40%] sm:w-[50%] mx-auto sm:mx-0 bg-white" src={logo} alt="Iruwin Seafood and Grills" />

                    <div className="flex flex-col gap-[30px]">
                        <p className="font-bold text-[20px]">Navigate</p>
                        <div className="flex flex-col space-y-2">
                            <a href="#Home" className="hover:text-gray-400">Home</a>
                            <a href="#BestSellers" className="hover:text-gray-400">Best Sellers</a>
                            <a href="#About" className="hover:text-gray-400">About</a>
                        </div>
                    </div>

                    <div className="text-[12px]">
                        <p>All rights reserved</p>
                        <p>All sources of the images used are provided by clicking on the image.</p>
                    </div>
                </div>

                {/* Empty div for second column; you can add additional content later */}
                <div className="hidden sm:block">
                    {/* Additional footer content can go here */}
                </div>
            </div>
        </div>
    );
}
