import React from 'react';
import { useTranslation } from 'react-i18next';

function Career() {
    const { t }  = useTranslation();
    return(
        <div className="career">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <div className="image">
            <img width={220} height={330} src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZWVyc3xlbnwwfHwwfHw%3D&auto=format" alt=""></img>
          </div>
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