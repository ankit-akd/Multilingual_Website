import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"; 



// const resources= {
//     en:{
//         translation:{
//             Home: "Home",
//             About: "About",
//             Contact: "Contact",
//             Career: "Career",
//             home_desc: "Welcome to our website. Use our services and enhance your moments of happiness.",
//             about_desc: "We provide you with the world best services and facilities",
//             contact_desc: "Feel free to contact us in case of any issues or queries 123@abc.com",
//             career_desc: "Come join us and be a part of our team."
//         },
//     },
//     hn:{
//         translation:{
            
//                 Home: "घर",
//                 About: "बारे में",
//                 Contact: "संपर्क",
//                 Career: "आजीविका",
//                 home_desc: "हमारी वैबसाइट पर आपका स्वागत है। हमारी सेवाओं का उपयोग करें और अपनी खुशी के पलों को बढ़ाएं।",
//                 about_desc: "हम आपको दुनिया की बेहतरीन सेवाएं और सुविधाएं मुहैया कराते हैं।",
//                 contact_desc: "किसी भी समस्या या प्रश्न के मामले में 123@abc.com पर बेझिझक हमसे संपर्क करें।",
//                 career_desc: "आइए हमारे साथ जुड़िए और हमारी टीम का हिस्सा बनिए।"
              
//             },
//         },
//     };
const language = ['en','hn'];

i18next
.use(initReactI18next)
.use(HttpApi)
.init({
    //resources,
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