import { useTranslation } from "react-i18next";


const Facility = () => {
    const { t,
        // i18n 
    } = useTranslation();

    return (
        <div>
            <h2 className="mt-10">{t('content.packageHeaderContentFacility')}</h2>
            <p>* {t('content.packageContentFasility1')}
                <br />
                * {t('content.packageContentFasility2')}
                <br />
                * {t('content.packageContentFasility32D1N')}
                <br />
                * {t('content.packageContentFasility4')}
                <br />
                * {t('content.packageContentFasility5')}
                <br />
                * {t('content.packageContentFasility6')}
                <br />
                * {t('content.packageContentFasility7')}
                <br />
                * {t('content.packageContentFasility8')}
                <br />
                * {t('content.packageContentFasility9')}
                <br />
                * {t('content.packageContentFasility10')}
                <br />
                * {t('content.packageContentFasility11')}
                <br />
                * {t('content.packageContentFasility12')}
                <br />
                * {t('content.packageContentFasility13')}
                <br />
                * {t('content.packageContentFasility14')}
                <br />
                * {t('content.packageContentFasility15')}
            </p>
            <h4>{t('content.packageContentTitleNonFasility')}</h4>
            <p>
                * {t('content.packageContentNonFasility1')}
                <br />
                * {t('content.packageContentNonFasility2')}
            </p>
        </div>
    )
}

export default Facility