import React from 'react';
import style from '@/styles/Profile.module.scss';
import Contact from '@/component/Contact';
import Education from '@/component/Education';
import Skills from '@/component/Skills';
import WorkEx from '@/component/WorkEx';




const profile = () => {


  return (
    <div className='page_container'>
      <section className={style.profile_wrapper}>
        <div className={style.profile_img}>
          <img src="./img/profile_01.png" alt="profile image" />
        </div>

        <div className={style.profile_txt}>
          안녕하세요 프론트엔드 개발자가 되기 위해 노력하고 있는 이동욱 입니다. <br />
          조금 느릴지라도 꾸준히 앞으로 가기 위해 노력합니다.
        </div>
      </section>

      <section className={style.resume_wrapper}>
        <div className={style.resume_part01}>
          <Contact />
          <Education />
        </div>


        <div className={style.resume_part02}>
          <Skills />
          <WorkEx />
        </div>

        
      </section>

    </div>
  );
};

export default profile;