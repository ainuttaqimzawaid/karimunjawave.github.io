import React from "react";
import { useTranslation } from "react-i18next";
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
    const { t,
        // i18n 
    } = useTranslation();

    const Testimoni = [
        {
            text: t('content.testimonialContent1'),
        },
        {
            text: t('content.testimonialContent2'),
        },
        {
            text: t('content.testimonialContent3'),
        },
        {
            text: t('content.testimonialContent4'),
        }
    ]
    return (
        <div className="bg-black bg-opacity-50 text-white flex flex-col justify-center items-center w-screen px-4 pb-16 mt-16">
            <h1 className="md:text-6xl text-center font-Montserrat pt-16">{t('content.testimonialTitle')}</h1>
            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            <div className="w-screen md:grid lg:max-w-7xl grid-cols-3 mt-5 px-16 gap-40">
                <h1 className="font-Montserrat font-bold col-span-1 mb-5">
                    {t('content.testimonialSubtitle')}
                </h1>
                <div className="col-span-2 font-Poppins">
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        scrollbar={true}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                    >
                        {
                            Testimoni.map((e, i) => (
                                <SwiperSlide key={i} >
                                    <h3 className="font-Poppins">
                                        "{e.text}"
                                    </h3>
                                </SwiperSlide>
                            ))
                        }
                        <div className='swiper-button-next swiper-button-next-custom'></div>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default Testimonials;