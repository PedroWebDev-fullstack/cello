export default function Ofertas() {
    const produtosDestaque = [
        {
          produto: "Compact Pocket Size Power Bank",
          valor: Number(79.90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          desconto: Number(119.90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          cores: ["#4F5152", "#D69DD4", "#98FC95", "#F7B1B9", "#E8E6F1"],
          linkImagem: "/destaques/powerbank.webp",
          dimensoes: "w-40 h-30"
        },
        {
          produto: "KeyPop Combo Of Keyboard Mouse",
          valor: Number(279.90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          desconto: Number(300).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          cores: ["#4F5152", "#98FC95", "#E8E6F1"],
          linkImagem: "/destaques/teclado.png",
          dimensoes: "w-42 h-30"
        },
        {
          produto: "Open Ear Wireless Earbuds",
          valor: Number(87).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          desconto: Number(149).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          cores: ["#4F5152", "#000"],
          linkImagem: "/destaques/fone.webp",
          dimensoes: "w-25 h-25"
        },
        {
          produto: "Wireless Digital Media Projector",
          valor: Number(2599,90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          desconto: Number(3299.90).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          cores: ["#4F5152", "#E8E6F1"],
          linkImagem: "/destaques/nootebook.avif",
          dimensoes: "w-45 h-30"
        },
    ];

    return (
      <section className="
        w-full
        px-15 py-25 
        ">
        <div className="flex flex-col gap-6 bg-[#F8F8F8] p-10">
            <div className="w-full justify-between flex items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-[42px]">Deal of The Days</h1>
                    <p className="font-medium text-[#707070]">Deal of The Day: Unbelievable Savings Await!</p>
                </div>
                <div className="flex gap-4">
                    <button className="w-8 h-8 bg-[#758EAD] rounded-sm items-center justify-center flex cursor-pointer"><img src="../../public/icone/seta-esquerda.png" alt="Próximo" width="12px"/></button>
                    <button className="w-8 h-8 bg-[#012A69] rounded-sm items-center justify-center flex cursor-pointer"><img src="../../public/icone/seta-branca.png" alt="Próximo" width="12px"/></button>
                </div>
            </div>

            <div className="flex flex-wrap gap-8">
                {produtosDestaque.map((item) => (
                    <a href="#" className="flex gap-6 bg-white px-6 rounded-lg cursor-pointer w-full lg:w-100">
                        <div className="h-54 flex items-center"><img src={item.linkImagem} alt="" className={item.dimensoes}/></div>
                        <div className="flex flex-col self-start h-full justify-center">
                            <p>Aria Tech</p>
                            <h2 className="font-semibold text-[18px] mb-2">{item.produto}</h2>
                            <p className="font-semibold text-[18px]">{item.valor} <br /><s className="text-red-500 text-[16px]">{item.desconto}</s></p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </section>
    );
}