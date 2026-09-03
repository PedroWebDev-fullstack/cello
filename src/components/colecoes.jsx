export default function Colecoes() {
    const produtosDestaque = [
        {
          produto: "Earbuds",
          quantidade: 4,
          linkImagem: "/colecoes/fone.webp",
          dimensoes: "w-25 h-33"
        },
        {
          produto: "Hard Devices",
          quantidade: 8,
          linkImagem: "/colecoes/hard-devices.png",
          dimensoes: "w-28 h-32"
        },
        {
          produto: "Keyboard",
          quantidade: 2,
          linkImagem: "/colecoes/keyboard.webp",
          dimensoes: "w-45 h-45"
        },
        {
          produto: "Mobile",
          quantidade: 6,
          linkImagem: "/colecoes/mobile.png",
          dimensoes: "w-30 h-40"
        },
        {
          produto: "Printer",
          quantidade: 3,
          linkImagem: "/colecoes/printer.webp",
          dimensoes: "w-40 h-40"
        },
        {
          produto: "Headphones",
          quantidade: 4,
          linkImagem: "/colecoes/headphone.jpeg",
          dimensoes: "w-40 h-40"
        },
        {
          produto: "Tablet",
          quantidade: 5,
          linkImagem: "/colecoes/tablet.webp",
          dimensoes: "w-30 h-38"
        },
        {
          produto: "Laptop",
          quantidade: 5,
          linkImagem: "/colecoes/laptop.png",
          dimensoes: "w-35 h-25"
        }
    ];

    return (
      <section>
        <article className="
        w-full
        px-10 py-25 
        bg-[#F8F8F8]
        ">
            <div className="flex flex-col gap-6 items-center md:items-start">
                <h1 className="font-semibold text-[52px]">Collection</h1>


                <p className="font-medium text-[#707070]">Top 10 Most Sold This Week. Next Day Delivery</p>

                <div className="flex-wrap gap-2 md:flex">
                    {produtosDestaque.map((item, index) => (
                        <div className="flex gap-20 items-center bg-white px-10 py-5 rounded-md cursor-pointer mb-4 justify-around md:justify-start" key={index}>
                            <div className="flex flex-col gap-3">
                                <h2 className="font-normal text-3xl md:text-2xl">{item.produto}</h2>
                                <span>{item.quantidade} items</span>
                            </div>
                            <img src={item.linkImagem} alt="" className={item.dimensoes}/>
                        </div>
                    ))}
                </div>
            </div>
        </article>

        <div className="hidden xl:block p-5 bg-linear-to-r from-[#156BDE] from-0% via-[#09469D] via-26% to-[#002969] to-100%">
                <marquee behavior="scroll" direction="left" scrollamount="15" scrolldelay="" className="                
                text-white text-[18px] text-nowrap
                ">  
                      <p className="inline-block mr-46"> Jackpot Deals | Tap to get Flat 50% Off? </p>
                      <p className="inline-block mr-46"> Jackpot Deals | Tap to get Flat 50% Off? </p>
                      <p className="inline-block mr-46"> Jackpot Deals | Tap to get Flat 50% Off? </p>
                      <p className="inline-block mr-46"> Jackpot Deals | Tap to get Flat 50% Off? </p>
                      <p className="inline-block mr-46"> Jackpot Deals | Tap to get Flat 50% Off? </p>
                      <p className="inline-block mr-46"> Jackpot Deals | Tap to get Flat 50% Off? </p>
                      <p className="inline-block mr-46"> Jackpot Deals | Tap to get Flat 50% Off? </p>
                      <p className="inline-block mr-46"> Jackpot Deals | Tap to get Flat 50% Off? </p>
                </marquee>
            </div>
      </section>
    );
}