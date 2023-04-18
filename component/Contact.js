import React from 'react';
import style from '@/styles/Profile.module.scss';

const Contact = () => {


  const tel = [
    {val: 'Phpne', con: '010-2154-1107'},
    {val: 'E-mail', con: 'devvyves@gmail.com'},
    {val: 'GitHub', con: 'github.com/devyant-dev'}
    // {val: 'Velog', con: 'devvyves@gmail.com'}
  ];

  return (
    <div className={style.contact_me}>
      <p className={ `${style.resume_title} ${style.resume_title_common}` }>
        Contact Me
      </p>
      <div className={style.resume_content_common}>
        {
          tel.map( (obj, idx) => (
            <div key={idx} className={style.contact_content}>
              <span className={style.cont_type}>
              {obj.val}
              </span>
              <span className={style.cont_value}>
                {obj.con}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Contact;