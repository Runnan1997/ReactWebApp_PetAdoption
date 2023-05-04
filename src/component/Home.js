import React, {useState} from 'react'
import translate from '../i18n/translate';
import {I18nProvider, LOCALES} from '../i18n';


const Home = () => {
    const[locale, setLocale] = useState(LOCALES.ENGLISH);
    return(
        <I18nProvider locale={locale}>
        <div className="container">
            <br></br>
            <h4 className="left">{translate('about')}</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>{translate('cute')}</p>

            <h4 className="left">{translate('ap')}</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>{translate('step1')}</p>
            <p>{translate('step2')}</p>
            <p>{translate('step3')}</p>
            <p>{translate('step4')}</p>
            <br></br>
            <br></br>
            <div className="container">
              <button style={{width:"250px", height:"30px", marginRight:"200px"}} onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
              <button style={{width:"250px", height:"30px"}} onClick={() => setLocale(LOCALES.CHINESE)}>Chinese</button>
            </div>
            <br></br>
        </div>
        </I18nProvider>
    )
}

export default Home;