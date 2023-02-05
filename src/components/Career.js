import React from 'react';
import { useTranslation } from 'react-i18next';

function Career() {
    const { t }  = useTranslation();
    return(
        <div className="career">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
         
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">{t("Career")}</h1>
            <p>
              {t('career_desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Career;