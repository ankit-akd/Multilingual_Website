import React from "react";
import { useTranslation } from "react-i18next";

function About() {
    const {t} = useTranslation();
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">{t("About")}</h1>
            <span>
             {t('about_desc')}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;