import React from 'react';
import style from '@/styles/Profile.module.scss';

const Contact = () => {


  const tel = [
    {val: 'Phpne', con: '010-1111-1111'},
    {val: 'E-mail', con: 'devvyves@gmail.com'},
    {val: 'GitHub', con: 'devvyves@gmail.com'},
    {val: 'Velog', con: 'devvyves@gmail.com'}
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


// 20.9 11
// 21.3 12
// 21.9 21
// 22.3 22
// 22.9 X
// 23.3 31