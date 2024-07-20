
import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext.jsx';
import "./index.css"
const Home = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    English: {
      heading: "WORLD’S LARGEST APP FOR HINDU DEVOTEES",
      line1: "Pray daily with Sri Mandir.",
      line2: "One App for all your devotional needs."
    },
    Hindi: {
      heading: "हिंदू भक्तों के लिए सबसे बड़ी ऐप",
      line1: "हर दिन श्री मंदिर के साथ प्रार्थना करें।",
      line2: "आपकी सभी धार्मिक जरूरतों के लिए एक ऐप।"
    }
  };

  return (
    <div className="home-container">
      <div className="text-section">
        <h1>{text[language].heading}</h1>
        <p>{text[language].line1}</p>
        <p>{text[language].line2}</p>
      </div>
      <div className="image-section">
        <img src="./images/homepage_ima1.png" alt="Home" />
        
      </div>
    </div>
  );
};

export default Home;
