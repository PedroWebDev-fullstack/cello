export default function Banner() {
    return (
        <div className="
        w-full h-[calc(90vh-10rem)] p-20 flex items-center
        bg-[url('/banner/banner1.png')] bg-cover bg-center bg-no-repeat
        ">

            <div className="flex flex-col gap-10 text-white">
                <h1 className="font-semibold text-[52px] leading-normal w-[80%]">Stay Ahead With Latest Gadges</h1>
                <p className="text-[18px]">Discover the newest gadgets and innovative gizmos that keep you ahead</p>
                <div className="flex gap-4">

                    <button className="
                    flex items-center gap-2 group
                    py-3.5 pl-8 pr-6 
                    bg-white  
                    text-black font-semibold
                    rounded-sm 
                    cursor-pointer 
                    hover:bg-transparent hover:invert transition-all duration-350
                    ">
                        <span>Buy Now </span>
                        <img src="/icone/seta-preta.png" alt="" className="w-3 h-3 group-hover:translate-x-1 transition-all"/>
                    </button>

                    <button className="
                    flex items-center gap-2 group
                    py-3.5 pl-8 pr-6 
                    bg-transparent 
                    font-semibold 
                    rounded-sm 
                    cursor-pointer 
                    ">
                        <span>See More</span>
                        <img src="/icone/seta-branca.png" alt="" className="w-3 h-3 group-hover:translate-x-1 transition-all"/>
                    </button>
                </div>
            </div>

        </div>
    );
}