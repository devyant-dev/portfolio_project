import React from 'react';
import style from '@/styles/Profile.module.scss';


const Education = () => {
  return (
    <div className={style.education}>
      <p className={ `${style.resume_title} ${style.resume_title_common}` }>
        Education
      </p>
      <div className={style.resume_content_common}>
        <div className={style.edu_con_wrap}>
          <p className={style.edu_con_title}>대우직업능력개발원</p>
          <p className={style.edu_con_sub_title}>웹디자인 과정 수료</p>
          <p className={style.edu_con_period}>2019.12 ~ 2020.05</p>
        </div>

        <div className={style.edu_con_wrap}>
          <p className={style.edu_con_title}>고려사이버대학교</p>
          <p className={style.edu_con_sub_title}>재학중 (현재 3학년 1학기)</p>
          <p className={style.edu_con_period}>2020.09 ~ present</p>
        </div>

        <div className={style.edu_con_wrap}>
          <p className={style.edu_con_title}>그린컴퓨터 아카데미</p>
          <p className={style.edu_con_sub_title}>프론트엔드 과정 수료</p>
          <p className={style.edu_con_period}>2022.11 ~ 2023.04</p>
        </div>
      </div>

    </div>
  );
};

export default Education;