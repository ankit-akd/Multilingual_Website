import React from "react";
import { NavLink  } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "./Language";



function Navigation(onLanguageChange) {
    const { t } = useTranslation();
    return (
        <nav>
        <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Tourism
          </NavLink>
       
        <div className="navbar-end">
            <div className="navbar-item">
            
            <Language onChange={onLanguageChange}/>
            </div>    
        </div>
        
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  {t("Home")}
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {t("About")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  {t("Contact")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/career">
                    {t("Career")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </nav>
    );
}

export default Navigation;