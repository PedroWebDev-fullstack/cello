export default function Header() {
    return (
        <header className="sticky top-0 left-0 bg-white z-1000">
            <div className="hidden xl:block p-2 bg-[#00296B]">
                <ul className="
                flex justify-around
                text-white list-disc text-nowrap flex-wrap gap-3
                ">
                    <p><span className="mx-2">●</span> free Shopping Worldwide when Offer Above $500 </p>
                    <p><span className="mx-2">●</span> free Shopping Worldwide when Offer Above $500 </p>
                    <p><span className="mx-2">●</span> free Shopping Worldwide when Offer Above $500 </p>
                </ul>
            </div>
            <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] py-5 px-10 gap-5">
                <a href="">
                    <img src="/logo.png" alt="" className="w-30 lg:40"/>
                </a>

                <form className="flex-1 items-center gap-6 hidden md:flex">

                    <input type="text" placeholder="Search" className="
                    py-2.5 px-6 text-[14px] lg:px-6 lg:text-[18px]
                    w-[90%]
                    bg-[#EFEFEF]
                    rounded-sm 
                    "/>

                    <button className="
                    shrink-0 flex items-center gap-2 px-5 py-2 lg:py-3 rounded-sm cursor-pointer
                    bg-[#FCC605]
                    ">
                        <img src="/pesquisa.png" alt="" className="w-4.5"/> <span className="text-[16px]">Search</span>
                    </button>

                </form>

                <div className="hidden gap-5 sm:flex">

                    <button className="
                    flex gap-2 items-center cursor-pointer
                    ">
                        <p className="font-semibold">EN</p>
                        <img src="/seta.png" alt="" className="w-2.5 h-2.5"/>
                    </button>

                    <div className="flex gap-3 items-center font-semibold text-[14px] cursor-pointer">
                        <img src="/usuario.png" alt="" className="w-7 h-7"/>
                        <p className="hidden xl:flex">Hello, Sign in <br />Account </p>
                    </div>
                    
                    <div className="flex gap-3 items-center font-semibold text-[14px] cursor-pointer">
                        <img src="/carrinho.png" alt="" className="w-7 h-7"/>
                        <p className="hidden xl:flex">Cust <br />R$ 0,00</p>
                    </div>
                    
                </div>

                <button className="flex gap-5 sm:hidden">
                    <img src="/icone/menu.png" alt="" className="w-8 h-8"/>
                </button>
            </div>
            <div className="
            hidden
            w-full px-10 py-3
            justify-between
            bg-[#FAFAFA] 
            border-b border-[rgba(0,0,0,0.05)]
            lg:flex
            ">
                <div className="flex gap-8">
                    <button className="
                    flex gap-2 items-center cursor-pointer
                    ">
                        <p className="font-semibold">Shop All</p>
                        <img src="/icone/seta-baixo.png" alt="" className="w-3.5 h-3.5"/>
                    </button>
                    
                    <button className="
                    flex gap-2 items-center cursor-pointer
                    ">
                        <p className="font-semibold">Eletronics</p>
                        <img src="/icone/seta-baixo.png" alt="" className="w-3.5 h-3.5"/>
                    </button>
                    <button className="
                    flex gap-2 items-center cursor-pointer
                    ">
                        <p className="font-semibold">Offer</p>
                        <img src="/icone/seta-baixo.png" alt="" className="w-3.5 h-3.5"/>
                    </button>
                    <button className="
                    flex gap-2 items-center cursor-pointer
                    ">
                        <p className="font-semibold">Blogs</p>
                        <img src="/icone/seta-baixo.png" alt="" className="w-3.5 h-3.5"/>
                    </button>

                    <a className="cursor-pointer font-semibold">
                        <p>Contact</p>
                    </a>

                    <a className="cursor-pointer font-semibold">
                        <p>Theme Features</p>
                    </a>

                </div>
                <div className="flex gap-3">
                    <a href="">All Collections</a>
                    <span>|</span>
                    <a href="">FAQs</a>
                    <span>|</span>
                    <a href="">About Us</a>
                </div>
            </div>
        </header>
    );
}