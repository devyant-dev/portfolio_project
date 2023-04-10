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
          이곳은 간단한 자기 소개를 적는 공간입니다. 당장 생각 나는게 없어서 이정도만 적습니다. 어렵습니다. 도와주세요. 추가로 쓸게 뭐가 있을까요......... 드럽게 어렵다..!!!!!아나런이러닝러ㅏㄴㅇ러ㅏ니포폴 어렵다
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