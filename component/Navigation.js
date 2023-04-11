import React from 'react';
import { useRouter } from 'next/router';
import style from '@/styles/Navi.module.scss';


const Navigation = () => {
  const router = useRouter();

  return (

    <div className={style.menu_container}>

      
      <div className={style.menu_wrapper}>

        <div className={style.menu_area}>
          <nav className={style.menu_box}>
          
            <button className={`${style.menu_btn} ${style.btn01}`} onClick={() => router.push('/')}>
              <span className={style.btn_num}>01</span>
              <span className={style.btn_title}>home</span>
            </button>

            <button className={`${style.menu_btn} ${style.btn02}`} onClick={() => router.push('/profile')}>
              <span className={style.btn_num}>02</span>
              <span className={style.btn_title}>profile</span>
            </button>

            <button className={`${style.menu_btn} ${style.btn03}`} onClick={() => router.push('/work')}>
              <span className={style.btn_num}>03</span>
              <span className={style.btn_title}>work</span>
            </button>

          </nav>
        </div>

        <div className={style.contact_area}>
          <b className={style.contact_main_title}>Contact</b>

          <div className={style.contact_box}>
            <p className={style.contact_title}>email</p>
            <p className={style.contact_cont}>devvyves@gmail.com</p>
          </div>

          <div className={style.contact_box}>
            <p className={style.contact_title}>mobile</p>
            <p className={style.contact_cont}>010-2154-1107</p>
          </div>

          <div className={style.contact_box}>
            <p className={style.contact_title}>GitHub</p>
            <p className={style.contact_cont}>https://github.com/devyant-dev</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;