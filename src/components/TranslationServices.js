import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TranslationServices = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section id="translation-services" className="content-section">
        <div className="container">
          <h1 className="page-title">{t('title')}</h1>
          <p className="intro-paragraph">{t('intro')}</p>

          <div className="info-block">
            <h2 className="section-title">{t('whyChooseUs')}</h2>
            <ul className="benefits-list">
              <li><span className="list-icon"><i className="fas fa-check-circle"></i></span> <strong>{t('benefits.expertTranslators')}:</strong> {t('benefits.expertTranslatorsDescription')}</li>
              <li><span className="list-icon"><i className="fas fa-check-circle"></i></span> <strong>{t('benefits.culturalSensitivity')}:</strong> {t('benefits.culturalSensitivityDescription')}</li>
              <li><span className="list-icon"><i className="fas fa-check-circle"></i></span> <strong>{t('benefits.uncompromisingQuality')}:</strong> {t('benefits.uncompromisingQualityDescription')}</li>
              <li><span className="list-icon"><i className="fas fa-check-circle"></i></span> <strong>{t('benefits.confidentiality')}:</strong> {t('benefits.confidentialityDescription')}</li>
              <li><span className="list-icon"><i className="fas fa-check-circle"></i></span> <strong>{t('benefits.timelyDelivery')}:</strong> {t('benefits.timelyDeliveryDescription')}</li>
            </ul>
          </div>

          <div className="info-block">
            <h2 className="section-title">{t('translationExpertise')}</h2>
            <ul className="services-list">
              <li>
                <h3>{t('documentTranslation')}</h3>
                <p>{t('documentTranslationDescription')}</p>
              </li>
              <li>
                <h3>{t('websiteLocalization')}</h3>
                <p>{t('websiteLocalizationDescription')}</p>
              </li>
              <li>
                <h3>{t('multimediaTranslation')}</h3>
                <p>{t('multimediaTranslationDescription')}</p>
              </li>
              <li>
                <h3>{t('softwareLocalization')}</h3>
                <p>{t('softwareLocalizationDescription')}</p>
              </li>
            </ul>
          </div>

          <div className="info-block">
            <h2 className="section-title">{t('industriesWeServe')}</h2>
            <ul className="industries-list">
              <li><strong>{t('legal')}:</strong> {t('legalDescription')}</li>
              <li><strong>{t('medical')}:</strong> {t('medicalDescription')}</li>
              <li><strong>{t('technical')}:</strong> {t('technicalDescription')}</li>
              <li><strong>{t('business')}:</strong> {t('businessDescription')}</li>
              <li><strong>{t('itAndSoftware')}:</strong> {t('itAndSoftwareDescription')}</li>
              <li><strong>{t('eCommerce')}:</strong> {t('eCommerceDescription')}</li>
            </ul>
          </div>

          <div className="info-block">
            <h2 className="section-title">{t('getStarted')}</h2>
            <ol className="process-list">
              <li><strong>{t('process.requestQuote')}:</strong> {t('process.requestQuoteDescription')}</li>
              <li><strong>{t('process.consultation')}:</strong> {t('process.consultationDescription')}</li>
              <li><strong>{t('process.projectInitiation')}:</strong> {t('process.projectInitiationDescription')}</li>
              <li><strong>{t('process.qualityAssurance')}:</strong> {t('process.qualityAssuranceDescription')}</li>
              <li><strong>{t('process.delivery')}:</strong> {t('process.deliveryDescription')}</li>
            </ol>

            <a href="apply.html" className="button button-primary">{t('requestQuoteButton')}</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TranslationServices;