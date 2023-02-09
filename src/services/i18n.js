import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"; 
import Data from '../data';


const resources = Data;
const language = ['en','hn'];

i18next
.use(initReactI18next)
.use(HttpApi)
.init({
    resources,
    lng:"en",
    fallbackLng:"en",
    //supportedLngs: ["en","hn"],
    interpolation:{
        escapeValue:false,
        whiteList : language,
    },
    backend:{
        loadPath:'locales/{{lng}}/translation.json',
    },
   
    debug: process.env.NODE_ENV==="development", //can be omitted
    
});
export default i18next;