import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import './Home.css';




const Home = () => {
  const navigate = useNavigate();

  const goToEmergency = () => {
    navigate('/tzahi/EmergencyRolls'); 
  };
  return (
    <div className="homepage-container">
      <h1 className='home-title'>  ברוכים הבאים והבאות 
לעזר סד"פ לצח"י
 </h1>
 <p className="info1">
 יש לבחור מצב חירום ולאחר מכן תפקיד 
על מנת לראות משימות של בעל תפקיד ודגשים
 </p>
 <button className='home-button' onClick={goToEmergency}>לבחירת מצב חירום ותפקיד</button>

 <img
 src={`${process.env.PUBLIC_URL}/assets/media/greyArrow.png`}
 className="arrow"
 id="arrow1"
 />
 <p className='greeting'>עזר זה מרכז סדרי פעולות לעבודת הצח"י בשעת חירום  ומתאפשר בזכות שיתוף פעולה
</p>
<img
 src={`${process.env.PUBLIC_URL}/assets/media/tzahiText.png`}
 className='tzahi-text'
/>
<div className='white-div'></div>
<img
src={`${process.env.PUBLIC_URL}/assets/media/securityLogo.svg`}
className='socity-logo'

 />
<img
src={`${process.env.PUBLIC_URL}/assets/media/pakarorange.svg`}
className='pakar-logo'

 />
<img
src={`${process.env.PUBLIC_URL}/assets/media/pakarGrey.svg`}
className='pakar-grey'
 />
<img
src={`${process.env.PUBLIC_URL}/assets/media/comunityLogo.svg`}
className='comunity-logo'
 />
<img
src={`${process.env.PUBLIC_URL}/assets/media/collegeLogo.png`}
className='collage-logo'
 />
 <p className='credits'>התוכן מתבסס על תיק צוות חירום וחוסן יישובי (צח"י) שהתפרסם על-ידי השירות לעבודה קהילתית במשרד העבודה הרווחה והשירותים החברתיים (2018) כתיבה ועריכה: משה ברנדר ואבי סנדר</p>
   <div className='tzahi-div'>
    <div><p className='bold-text'>חדשים או חדשות בצח"י? </p><p className='regular-text'>זקוקים </p> 
    
    <p className='regular-text2'>לרענון? הכנסו</p>
    <p className='underLine-text'> לשיעור הדיגיטלי לצח"י 
    </p>
    <p className='regular-text3'>    ללמידה על המשימות והתפקידים
    </p>
    </div>
    <button 
  className="tzahi-button"
  onClick={() => window.location.href = 'https://sites.google.com/view/inri-tzahi/home'}
>
  לשיעור הדיגיטלי
</button>
   </div>
   <p className='feedback'>יש הערות? תוספות? שינויים? 
נשמח לשמוע איך אפשר להשתפר, דברו איתנו בקישור הבא
</p>
<div className="footer"></div>
    </div>
  );
};

export default Home;