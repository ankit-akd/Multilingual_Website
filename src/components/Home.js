import React from 'react';
import { useTranslation  } from 'react-i18next';

function Home() {
    const {t} =  useTranslation();
    return(
        <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
           
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">{t("Home")}</h1>
            <p>
              {t('home_desc')}
            </p>
          </div>
          <section className="book-form" id="book-form">
            <form action="">
                <div className="inputBox" class="col-md-12">
                    <span>Place: </span>
                    <input type="text" name="place" placeholder="Destination" className="forminputs" />
                </div>
                <div className="inputBox" class="col-md-12">
                    <span>Date: </span>
                    <input type="date" placeholder="Date"></input>
                </div>
                <div className="inputBox" class="col-md-12">
                    <span>Persons: </span>
                    <input type="number" placeholder="number"></input>
                </div>
                </form>
          </section>
        </div>
      </div>
    </div>
    );
}

export default Home;