import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Kuliner from '../../../assets/images/Screenshot_86.jpg'
import { pelni } from "./data/pelni";
import Facility from "./Facility";

const Paket2D2N = () => {
    const { t,
        // i18n 
    } = useTranslation();

    return (
        <div className="bg-white py-44 flex flex-col items-center">
            <div className="w-screen h-[600px] -mt-44"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Kuliner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 30%',
                }}
            ></div>
            <h1 className="-mt-96 text-white text-5xl text-center">{t('content.packageTitle2D2N')}</h1>
            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            <h3 className="text-center px-10 md:px-28 py-12 text-white">{t('content.packageSubtitle2D2N')}</h3>
            <div className="p-1 md:p-5 bg-white rounded-lg w-screen">
                <h2>{t('content.packageContentTitle2D2N')}</h2>
                <h5>({t('content.packageContentSubtitle2D2N')})</h5>
                <div className="flex justify-between gap-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>{t('content.packageHeaderContentTypeRoom')}</th>
                                <th>{t('content.packageHeaderContentFacility')}</th>
                                <th>{t('content.packageHeaderContentPrice')}</th>
                                <th>{t('content.packageHeaderContentBooking')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pelni.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        {item.hotel}

                                        {item.location && (
                                            <>
                                                <br />
                                                <small>
                                                    ({t(`content.${item.location}`)})
                                                </small>
                                            </>
                                        )}
                                    </td>

                                    <td>
                                        {item.description.map((desc, index) => (
                                            <span key={index}>
                                                {index > 0 && ", "}
                                                {desc.startsWith("packageContent")
                                                    ? t(`content.${desc}`)
                                                    : desc}
                                            </span>
                                        ))}
                                    </td>

                                    <td>{item.price}</td>

                                    <td>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=6281353312334"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="no-underline font-medium"
                                        >
                                            {t("content.packageContentBooking")}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <Facility />
            </div>
        </div>
    )
}

export default Paket2D2N;