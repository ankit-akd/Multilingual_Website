import React from "react";
import { useTranslation } from "react-i18next";

function About() {
    const {t} = useTranslation();
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
           <div className="image">
            <img width={220} height={330} src="https://images.unsplash.com/photo-1600256698796-ecef3f5b1b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRvdXJpc218ZW58MHx8MHx8&auto=format" alt=""></img>
            </div> 
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