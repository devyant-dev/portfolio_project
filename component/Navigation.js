import React, { useState } from 'react';
import { useRouter } from 'next/router';
import style from '@/styles/Navi.module.scss';


const Navigation = () => {
  const router = useRouter();
  const [act, setAct] = useState(false);

  const clickMenu = () => {
    setAct(!act)
  }

  const closeMenu = () => {
    setAct(false)
  }


  return (

    <div>
      <div className={style.nav_container}>
        <div className={style.nav_wrapper}>
          <h1 className={style.logo}>
            <img src="/img/profile_01.png" alt="" />
          </h1>

          <p>
            뭐라도적자
          </p>

          <div onClick={() => clickMenu()} className={`${style.nav_btn}`}>
            <div className={`${style.nav_line} ${style.n_line01}`}></div>
            <div className={`${style.nav_line} ${style.n_line02}`}></div>
            <div className={`${style.nav_line} ${style.n_line03}`}></div>
          </div>
        </div>
      </div>

      <div className={`${style.menu_container}  ${act == true ? style.act_nav : ""}`}>

        <div className={style.menu_wrapper}>

          <div className={style.menu_area}>

            <div onClick={() => closeMenu()} className={`${style.close_btn} ${act == false ? {display: "none"} : {display: "block"}}`}>
              X
            </div>

            <nav className={style.menu_box}>
            
              <button className={`${style.menu_btn} ${style.btn01}`} onClick={() => router.push('/').then( () => closeMenu() ) }>
                <span className={style.btn_num}>01</span>
                <span className={style.btn_title}>home</span>
              </button>

              <button className={`${style.menu_btn} ${style.btn02}`} onClick={() => router.push('/profile').then( () => closeMenu() )}>
                <span className={style.btn_num}>02</span>
                <span className={style.btn_title}>profile</span>
              </button>

              <button className={`${style.menu_btn} ${style.btn03}`} onClick={() => router.push('/work').then( () => closeMenu() )}>
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
    </div>
  );
};

export default Navigation;