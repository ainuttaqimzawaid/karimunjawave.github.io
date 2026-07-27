import { Image } from "react-bootstrap"
import Image1 from '../../assets/images/IMG-20240730-WA0005.jpg'
import Image2 from '../../assets/images/Screenshot_86.jpg'
import Image3 from '../../assets/images/IMG-20240717-WA0002.jpg'
import Image4 from '../../assets/images/IMG-20240717-WA0006.jpg'
import Image5 from '../../assets/images/IMG-20240717-WA0008.jpg'
import Image6 from '../../assets/images/IMG-20240717-WA0012.jpg'
import Image7 from '../../assets/images/IMG-20240730-WA0001.jpg'
import Image8 from '../../assets/images/IMG-20240717-WA0015.jpg'
import Image9 from '../../assets/images/images.jpeg'
import Image10 from '../../assets/images/IMG-20240717-WA0010.jpg'
import Image11 from '../../assets/images/image4.jpg'
import { useTranslation } from "react-i18next"

const Galery = () => {
    const { t,
        // i18n 
    } = useTranslation();

    const Images1 = [
        Image1,
        Image2,
        Image3,
        Image4,
    ]
    const Images2 = [
        Image5,
        Image6,
        Image7,
        Image8,
    ]
    const Images3 = [
        Image9,
        Image10,
        Image11
    ]
    return (
        <div className="bg-white text-Navy flex flex-col justify-center items-center w-screen py-12">
            <h2 className="md:text-4xl text-center font-Montserrat">{t('content.galeryTitle')}</h2>
            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            <div className="w-screen flex flex-wrap justify-around gap-y-2 md:gap-y-3 px-2 lg:px-12 pt-11" data-aos="fade-up">
                {
                    Images1.map((e, i) => (
                        <div key={i}>
                            <Image src={e} className='h-[27vw]' />
                        </div>
                    ))
                }
                {
                    Images2.map((e, i) => (
                        <div key={i}>
                            <Image src={e} className='h-[30vw]' />
                        </div>
                    ))
                }
                {
                    Images3.map((e, i) => (
                        <div key={i}>
                            <Image src={e} className='h-[27vw]' />
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Galery;