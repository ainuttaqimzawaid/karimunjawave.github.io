import { FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";
import { FaMoneyBillWave, FaStar, FaWrench } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";
import wavebg from '../../assets/images/WaveImage.png'
import { useTranslation } from "react-i18next";


const Service = () => {
    const { t,
        // i18n 
    } = useTranslation();

    const Reason = [
        {
            Icon: <GiPalmTree />,
            subtitle: t('content.serviceCardTitle1'),
            title: t('content.serviceCardContent1'),
        },
        {
            Icon: <FaMapMarkedAlt />,
            subtitle: t('content.serviceCardTitle2'),
            title: t('content.serviceCardContent2'),
        },
        {
            Icon: <FaMoneyBillWave />,
            subtitle: t('content.serviceCardTitle3'),
            title: t('content.serviceCardContent3'),
        },
        {
            Icon: <FaShieldAlt />,
            subtitle: t('content.serviceCardTitle4'),
            title: t('content.serviceCardContent4'),
        },
        {
            Icon: <FaStar />,
            subtitle: t('content.serviceCardTitle5'),
            title: t('content.serviceCardContent5'),
        },
        {
            Icon: <FaWrench />,
            subtitle: t('content.serviceCardTitle6'),
            title: t('content.serviceCardContent6'),
        }
    ];
    return (
        <div className="w-screen flex flex-col justify-center items-center -mb-16 text-Navy">
            <div className="w-screen flex flex-col justify-center items-center px-4 bg-gradient-to-t from-[#DCF4F4] to-white  pt-16">
                <div className="flex flex-col justify-center items-center w-screen py-12 px-4">
                    <div className="flex flex-col justify-center items-center">
                        <div data-aos="fade-up">
                            <h1 className="text-center font-Montserrat">{t('navbar.service')}</h1>
                            <div className="flex w-full items-center justify-center">
                                <div className="bg-[#2db0f4] h-[3px] w-32 mt-1 mb-4"></div>
                            </div>
                        </div>
                        <h3 className="text-center">{t('content.serviceSubtitle')}</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 pb-2">
                    {
                        Reason.map((e, i) => (
                            <div key={i} className="flex flex-row px-6">
                                <div className="">
                                    <div className="w-10 h-10 text-sm text-[#2db0f4] border rounded-full flex items-center justify-center">
                                        {e.Icon}
                                    </div>
                                </div>
                                <div className=" col-span-4 ms-3 w-full">
                                    <h5 className="font-Montserrat">{e.subtitle}</h5>
                                    <p className="text-base text-gray-500 font-Poppins">
                                        {e.title}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <img src={wavebg} alt="" className="w-screen h-10 md:h-32 bg-white" />
        </div>
    )
}

export default Service;
