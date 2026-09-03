export default function Anuncios() {
    return (
        <section className="
            w-full
            bg-[#F8F8F8]
            ">
            <article className="w-full px-20 py-25">
                <div className=" justify-center">
                    <div className="flex flex-wrap justify-evenly gap-4">
                        <a href="#"><img src="/anuncio/tablet-anuncio.jpeg" alt="link tablets" className="inline-block md:flex max-h-95 rounded-sm" /></a>
                        <a href="#"><img src="/anuncio/celular-anuncio.jpeg" alt="link celulares" className="inline-block md:flex max-h-95 rounded-sm" /></a>
                        <a href="#"><img src="/anuncio/fone-anuncio.jpeg" alt="link headphones" className="inline-block md:flex max-h-95 rounded-sm" /></a>
                    </div>
                </div>
            </article>
            <div className="w-full p-10 bg-[#084296] text-white flex flex-wrap gap-15 justify-around items-center">
                <div className="flex gap-10">
                    <img src="/public/email.png" alt="icone email" className="h-16"/>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">JOIN THE TECH INSIDER CLUB</h2>
                        <p>Subscribe for early access to new gadgets, expert reviews, and limited-time deals.</p>    
                    </div>
                </div>
                <div className="h-13 w-full sm:w-[80%] lg:w-[50%] flex bg-white rounded-lg">
                    <input type="email" placeholder="Enter your best email address" className="w-full outline-0 text-black indent-4 text-[17px]"/>
                    <button className="flex items-center px-10 gap-2 bg-[#232E5A] font-semibold rounded-sm cursor-pointer" type="submit"><span className="hidden md:block">SUBSCRIBE</span> <img src="/public/icone/seta-branca.png" alt="Prosseguir" className="h-3"/></button>
                </div>
            </div>
        </section>
    );
}