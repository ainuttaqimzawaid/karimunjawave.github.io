import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-Navy w-screen text-white flex flex-col justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-12 lg:px-20 py-12">
                <div>
                    <div className="mb-7">
                        <div className="text-xl font-Montserrat">{t('content.footerSocMed')}</div>
                        <div className="bg-[#2db0f4] h-[3px] w-16 my-1"></div>
                    </div>
                    <div className="grid gap-2">
                        <div className="font-Poppins flex">
                            <FaInstagram />
                            <a href="https://www.instagram.com/karimunjawave" className="no-underline ps-2 -mt-1 text-white"> Instagram</a>
                        </div>
                        <div className="font-Poppins flex">
                            <FaYoutube />
                            <a href="https://karimunhappy.github.io/" className="no-underline ps-2 -mt-1 text-white"> Youtube</a>
                        </div>
                        <div className="font-Poppins flex">
                            <FaXTwitter />
                            <a href="https://karimunhappy.github.io/" className="no-underline ps-2 -mt-1 text-white"> X</a>
                        </div>
                        <div className="font-Poppins flex">
                            <FaFacebookF />
                            <a href="https://karimunhappy.github.io/" className="no-underline ps-2 -mt-1 text-white"> Facebook</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-7">
                        <div className="text-xl font-Montserrat">{t('content.footerContact')}</div>
                        <div className="bg-[#2db0f4] h-[3px] w-16 my-1"></div>
                    </div>
                    <div className="grid gap-2">
                        <div className="font-Poppins">info@Karimunjawaparadise.com</div>
                        <div className="font-Poppins">
                        </div>
                        <a href="https://karimunhappy.github.io/" className="no-underline text-white"> (+62) 81353312334</a>
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-3">
                    <div>
                        <div className="text-xl font-Montserrat">{t('content.footerLocation')}</div>
                        <div className="bg-[#2db0f4] h-[3px] w-16 my-1"></div>
                    </div>
                    <div className="font-Poppins">Office: Jl. Pemuda RT 05/02 Karimunjawa (Tri Siwi)</div>
                </div>
                <div className="lg:flex justify-center">
                    <iframe title="Example Website 1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.4179149781476!2d110.41459193990752!3d-5.839606578240452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e73cde5319dc2ed%3A0x11dea1689fc42ed0!2sSunset%20Beach!5e0!3m2!1sid!2sid!4v1716875908615!5m2!1sid!2sid" width="150" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="w-screen flex justify-center">
                <div className="bg-white w-5/6 h-[1px] flex justify-center"></div>
            </div>
            <div className="w-screen flex justify-center">
                <center className="py-7 px-1 font-Poppins">
                    © 2024 Karimunjawaparadise. All rights Reserved
                </center>
            </div>
        </div>
    )
}

export default Footer;