export default function Footer() {

    return (
      <section className="
        w-full
        p-15 
        flex flex-wrap gap-20 flex-col items-start sm:flex-row sm:items-center
        bg-[#F8F8F8]
        ">
            <article className="w-full sm:w-fit flex justify-center">
                <div className="flex flex-col gap-4 items-center sm:items-start">
                    <a href="#"><img src="/logo.png" alt="logo cello" className="w-40"/></a>
                    <p className="w-80">CELLO delivers quality products you can trust, at prices you'll love. Your satisfaction is our priority.</p>
                    <div className="flex gap-6 mb-4">
                        <a href="#"><img src="/redes-sociais/facebook.png" alt="Facebook" className="w-7"/></a>
                        <a href="#"><img src="/redes-sociais/instagram.png" alt="Instagram"  className="w-7"/></a>
                        <a href="#"><img src="/redes-sociais/pinterest.png" alt="Pinterest"  className="w-7"/></a>
                        <a href="#"><img src="/redes-sociais/tiktok.png" alt="TikTok"  className="w-7"/></a>
                        <a href="#"><img src="/redes-sociais/youtube.png" alt="Youtube"  className="w-7"/></a>
                    </div>
                    <p className="uppercase text-[#084296]"><b>@ 2025 Cello. All Rights Reserved</b></p>
                </div>
            </article>

            <article className="w-full sm:w-[15vw] flex justify-center text-center sm:text-start">
                <div>
                    <h2 className="uppercase text-[#084296] font-semibold text-[20px] mb-2">Shop</h2>
                    <ul className="flex flex-col gap-2 font-semibold text-[rgba(0,0,0,0.5)]">
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Featured Collections</a></li>
                        <li><a href="#">Deal of The Days</a></li>
                        <li><a href="#">Adds</a></li>
                        <li><a href="#">Join Club</a></li>
                    </ul>
                </div>
            </article>

            <article className="w-full sm:w-[15vw] flex justify-center text-center sm:text-start">
                <div>
                    <h2 className="uppercase text-[#084296] font-semibold text-[20px] mb-2">Custumer Service</h2>
                    <ul className="flex flex-col gap-2 font-semibold text-[rgba(0,0,0,0.5)]">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Return & Refund Policy</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Site Guide</a></li>
                    </ul>
                </div>
            </article>

            <article className="w-full sm:w-[15vw] flex justify-center text-center sm:text-start">
                <div>
                    <h2 className="uppercase text-[#084296] font-semibold text-[20px] mb-2">About Us</h2>
                    <ul className="flex flex-col gap-2 font-semibold text-[rgba(0,0,0,0.5)]">
                        <li><a href="#">About Cello</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
            </article>

            <article className="w-full sm:w-[15vw] flex justify-center text-center sm:text-start">
                <div>
                    <h2 className="uppercase text-[#084296] font-semibold text-[20px] mb-8">We Accept</h2>
                    <ul className="flex flex-wrap gap-4">
                        <div className="flex items-center justify-center rounded-sm border border-[rgba(0,0,0,0.2)] bg-white py-1 px-2 w-14"><img src="/pagamentos/visa.png" alt="visa" className="w-10"/></div>
                        <div className="flex items-center justify-center rounded-sm border border-[rgba(0,0,0,0.2)] bg-white py-1 px-2 w-14"><img src="/pagamentos/mastercard.png" alt="mastercard" className="w-10"/></div>
                        <div className="flex items-center justify-center rounded-sm border border-[rgba(0,0,0,0.2)] bg-white py-1 px-2 w-14"><img src="/pagamentos/paypal.png" alt="paypal" className="w-5"/></div>
                        <div className="flex items-center justify-center rounded-sm border border-[rgba(0,0,0,0.2)] bg-white py-1 px-2 w-14"><img src="/pagamentos/apple-pay.png" alt="apple pay" className="w-10"/></div>
                    </ul>
                </div>
            </article>
      </section>
    );
}