import main from './img/main.jpg'

export default function Hero({ searchText }) {
    return (
        <div id="Home" className="relative flex flex-col justify-center items-center w-full h-[570px] pt-[120px] overflow-hidden">
            {/* Background Image */}
            <img className="fixed w-full h-[100vh] object-cover object-top z-10" style={{ top: "-110px" }} src={main} alt="Background" />

            {/* Heading */}
            <p className="text-white text-center text-[11vw] font-bold z-10">
                HUNGRY?
            </p>

            {/* Button */}
            <button className="hover:scale-110 text-white bg-blue-500 rounded-md w-[200px] text-[23px] m-auto p-2 z-10 
                md:w-[180px] md:text-[20px] sm:w-[150px] sm:text-[18px] xs:w-[130px] xs:text-[16px]">
                Order Now
            </button>
        </div>
    )
}