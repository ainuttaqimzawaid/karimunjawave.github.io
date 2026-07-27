import { Button, Card } from "react-bootstrap";
import Snorkeling from '../../assets/images/IMG-20240730-WA0021.jpg'
import Kuliner from '../../assets/images/Screenshot_86.jpg'
import Diving from '../../assets/images/Buzo.jpg'
import Kemah from '../../assets/images/images (12).jpeg'
import wavebg from '../../assets/images/WaveImage.png'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Paket = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const PaketOption = [
        {
            title: t('content.packageCardTitle1'),
            text: t('content.packageCardContent1'),
            image: Snorkeling,
            Navigasi: '/Paket/2D1N'
        },
        {
            title: t('content.packageCardTitle2'),
            text: t('content.packageCardContent2'),
            image: Kuliner,
            Navigasi: '/Paket/2D2N'
        },
        {
            title: t('content.packageCardTitle3'),
            text: t('content.packageCardContent3'),
            image: Diving,
            Navigasi: '/Paket/3D2N'
        },
        {
            title: t('content.packageCardTitle4'),
            text: t('content.packageCardContent4'),
            image: Kemah,
            Navigasi: '/Paket/4D3N'
        }
    ];



    // Fungsi untuk menavigasi ke halaman baru dengan bahasa saat ini
    const navigateToPage = (path) => {
        const currentLang = i18n.language; // Mendapatkan bahasa saat ini
        navigate(`/${currentLang}${path}`); // Menambahkan bahasa ke path URL
    };
    return (
        <div className="flex flex-col justify-center items-center w-screen -mb-16 text-Navy">
            <div className="flex flex-col justify-center items-center w-screen bg-gradient-to-t from-[#DCF4F4] to-white">
                <div className='text-Navy flex flex-col justify-center items-center w-screen pt-12'>
                    <h1 className="md:text-4xl text-center font-Montserrat">{t('content.packageTitle')}</h1>
                    <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
                    <p className="text-center text-base md:text-lg lg:w-1/2 px-4 font-Poppins">
                        {t('content.packageSubtitle')}
                    </p>
                </div>
                <div className="w-screen flex flex-wrap justify-around gap-y-5 lg:px-16 py-11" data-aos="fade-up">
                    {
                        PaketOption.map((e, i) => (
                            <div key={i} className="w-full sm:w-auto flex justify-center">
                                <Card className="w-72 shadow-lg !border-none">
                                    <Card.Img variant="top" src={e.image} className="h-40" />
                                    <Card.Body>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>
                                            {e.text}
                                        </Card.Text>
                                        <Button onClick={() => { navigateToPage(e.Navigasi) }} style={{ backgroundColor: 'white', color: 'blue', borderRadius: '3px', padding: '9px 22px', marginBottom: '10px' }}>{t('content.packageCardButton')}</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            <img src={wavebg} alt="" className="w-screen h-10 md:h-32 bg-black bg-opacity-50" />
        </div>
    )
}

export default Paket;