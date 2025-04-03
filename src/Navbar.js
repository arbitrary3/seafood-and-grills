import logo from './img/logo.png';

export default function Navbar({ isVisible, searchText, logInId }) {

    //FUNCTION TO GENERATE OPTIONS FROM ARRAY
    const generateOptions = array => {
        //array = [Name, link]

        const styleLink = id => ({

        })

        return array.map((element,index) => {
            const id = `option-${index};`

            return (
                <a 
                id={id}
                key={index}
                className=""
                href={element[1]} 
                style={styleLink(id)}>
                    {element[0]}
                </a>
            )
        })
    }

    //RENDER
    return (
        <div className={`fixed flex flex-row justify-between w-[100%] h-[70px] px-10 py-4 z-30 bg-white ${isVisible ? null : "animate-slideUp"}`}>
            <div className="flex flex-row gap-[15px]">
                <img className="w-[50px]" src={logo} alt="Iruwin Jay Seafood and Grills" />
            </div>

            <div className="flex flex-row gap-10">
                <div className="flex gap-[15px]">
                    <input type="text" className="border rounded px-8 py-1" placeholder="Search product..." aria-label="Search" />
                    <button className="bg-black text-white rounded px-3 py-1">Search</button>
                </div>

                {generateOptions([
                    ["Home",""],
                    ["Order", ""],
                    [<span class="material-symbols-outlined text-blue-500 text-[33px]">account_circle</span>,""]
                ])}
            </div>
        </div>
    )
}