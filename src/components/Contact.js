import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t }= useTranslation();
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
           <div className="image">
            <img width={220} height={330} src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FsbCUyMGNlbnRyZXxlbnwwfHwwfHw%3D&auto=format" alt=""></img>
           </div>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">{t('Contact')}</h1>
            <p>
              {t('contact_desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;