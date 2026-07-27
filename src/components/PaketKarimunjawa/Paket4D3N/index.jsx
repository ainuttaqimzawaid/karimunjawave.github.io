import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Camping from '../../../assets/images/camping.png'
import { siginjai } from "./data/siginjay";
import { express } from "./data/express";
import Facility from "./Facility";


const Paket4D3N = () => {
    const { t,
        // i18n 
    } = useTranslation();

    return (
        <div className="bg-white py-44 flex flex-col items-center">
            <div className="w-screen h-[600px] -mt-44"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Camping})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 0%',
                }}
            ></div>
            <h1 className="-mt-96 text-white text-5xl text-center">{t('content.packageTitle4D3N')}</h1>
            <div className="bg-[#2db0f4] h-[3px] w-32 my-3"></div>
            <h3 className="text-center px-10 md:px-28 py-12 text-white">{t('content.packageSubtitle4D3N')}</h3>
            <div className="shadow-lg p-1 md:p-5 bg-white rounded-lg w-screen">
                <h2>{t('content.packageContentTitleSiginjai')}</h2>
                <h5>({t('content.packageContentSubtitle2D1N')})</h5>
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
                            {
                                siginjai.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.hotel}
                                            {item.location && (
                                                <>
                                                    <br />
                                                    ({t(`content.${item.location}`)})
                                                </>
                                            )}
                                        </td>
                                        <td>
                                            {item.facilities.map((facility, index) => (
                                                <span key={index}>
                                                    {index > 0 && ", "}
                                                    {facility.startsWith("packageContent")
                                                        ? t(`content.${facility}`)
                                                        : facility}
                                                </span>
                                            ))}
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline font-medium'>{t('content.packageContentBooking')}</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
                <h2>{t('content.packageContentTitleExpress')}</h2>
                <h5>({t('content.packageContentSubtitle2D1N')})</h5>
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
                            {express.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        {item.hotel}

                                        {item.location && (
                                            <>
                                                <br />
                                                ({t(`content.${item.location}`)})
                                            </>
                                        )}
                                    </td>

                                    <td>
                                        {item.facilities.map((facility, index) => (
                                            <span key={index}>
                                                {index > 0 && ", "}
                                                {facility.startsWith("packageContent")
                                                    ? t(`content.${facility}`)
                                                    : facility}
                                            </span>
                                        ))}
                                    </td>

                                    <td>{item.price}</td>

                                    <td>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=6281353312334"
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

export default Paket4D3N;