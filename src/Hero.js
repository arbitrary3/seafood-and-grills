import main from './img/main.jpg'

export default function Hero({ searchText }) {

    return(
        <div id="Home" className="relative flex flex-col justify-center items-center w-full h-[570px] pt-[120px] overflow-hidden">
            <img className="fixed w-full brightness-[70%] z-10" style={{"top": "-110px"}} src={main} alt="" />
            <p className="text-white text-center text-[120px] font-bold z-10">HUNGRY?</p>
            <button className="text-white bg-blue-500 rounded-md w-[200px] text-[23px] m-auto p-2 z-10">Order Now</button>
        </div>
    )
}