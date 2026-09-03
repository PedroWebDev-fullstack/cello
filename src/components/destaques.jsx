  export default function Destaques() {
      const produtosDestaque = [
          {
            produto: "Compact Pocket Size Power Bank",
            valor: Number(79.90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            desconto: Number(119.90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            cores: ["#4F5152", "#D69DD4", "#98FC95", "#F7B1B9", "#E8E6F1"],
            linkImagem: "/destaques/powerbank.webp",
            dimensoes: "w-55 h-55",
            status: ""
          },
          {
            produto: "KeyPop Combo Of Keyboard Mouse",
            valor: Number(279.90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            desconto: Number(300).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            cores: ["#4F5152", "#98FC95", "#E8E6F1"],
            linkImagem: "/destaques/teclado.png",
            dimensoes: "w-60 h-60",
            status: ""
          },
          {
            produto: "Open Ear Wireless Earbuds",
            valor: Number(87).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            desconto: Number(149).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            cores: ["#4F5152", "#000"],
            linkImagem: "/destaques/fone.webp",
            dimensoes: "w-45 h-45",
            status: "New"
          },
          {
            produto: "Portable Outdoor Wireless Speaker",
            valor: Number(329).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            desconto: Number(420).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            cores: ["#4F5152", "#252525", "#E8E6F1"],
            linkImagem: "/destaques/alexa.webp",
            dimensoes: "w-55 h-55",
            status: ""
          },
          {
            produto: "Wireless Digital Media Projector",
            valor: Number(299.90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            desconto: Number(359.99).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            cores: ["#4F5152", "#E8E6F1"],
            linkImagem: "/destaques/projetor.webp",
            dimensoes: "w-55 h-55",
            status: ""
          },
      ];

      return (
        <section className="
          w-full
          px-15 py-25 
          bg-[#F8F8F8]
          ">
          <div className="flex flex-col gap-6 items-center md:items-start">
              <h1 className="font-semibold text-[52px] text-center">Featured Collection</h1>


              <p className="font-medium text-[#707070]">Top 10 Most Sold This Week. Next Day Delivery</p>

              <div className="flex flex-wrap gap-8  justify-center md:items-start">
                  {produtosDestaque.map((item) => (
                      <a href="#" className="flex flex-col gap-4 items-center bg-white px-6 py-8 rounded-md cursor-pointer w-80">
                          <div className="w-full flex justify-between font-semibold">
                              <div className="flex gap-1">
                                  <div className="bg-[#D3352A] px-3 py-1 text-white rounded-sm text-[12px]">Save Rs. {item.valor}</div>
                                  {item.status ? <div className="bg-[#146bdb] px-3 py-1 text-white rounded-sm text-[12px] self-start">{item.status}</div> : ""}
                              </div>
                              <p className="underline underline-offset-3">Quick Look</p>
                          </div>
                          <div className="h-54 flex items-center"><img src={item.linkImagem} alt="" className={item.dimensoes}/></div>
                          <button className="bg-[#0A2C66] p-3 rounded-sm self-start cursor-pointer relative z-0"> <img src="../../public/carrinho.png" alt="adicionar no carrinho" className="invert" width="20px"/></button>
                          <div className="flex flex-col self-start">
                              <p>Aria Tech</p>
                              <h2 className="font-semibold text-[20px] mb-2">{item.produto}</h2>
                              <p className="font-semibold text-[20px]">{item.valor} <s className="text-red-500 text-[16px]">{item.desconto}</s></p>
                          </div>
                          <div className="flex gap-1 self-start">{item.cores.map((cores, index) => (
                              <div className={`w-3.5 h-3.5`} style={{background: cores}} key={index}></div>
                          ))}</div>
                      </a>
                  ))}
              </div>
          </div>
        </section>
      );
  }