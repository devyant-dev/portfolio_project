import React, { useContext, useEffect } from 'react';
import style from '@/styles/Popup.module.scss';
import { MyData } from './Context';
import Link from 'next/link';

const ItemPopUp = () => {

  const {data, setData} = useContext(MyData);
  const [obj] = data.filter(oj=>oj.status==true);

  const closeBtn = () => {
    setData(
      [...data].map(obj => {
        obj.status = false;
        return obj;
      })
    )
    // document.documentElement.style = `overflow: auto`;
  }



  //console.log(obj)

  return (
    <div className={`${style.pop_container} ${obj?.status == true ? style.act_pop : ""}`}>
      <div className={style.pop_wrapper}>
        <div className={style.pop_title_area}>
          <p className={style.pop_title}>
            {obj?.title}
          </p>

          <div onClick={() => closeBtn()} className={`${style.close_btn}`}>
            X
          </div>
        </div>

        <div className={style.pop_info_area}>
          <div className={style.pop_info_img}>
            <img src={obj?.src} alt="" />
          </div>

          <div className={style.pop_info_txt_box}>
            <div className={style.pop_info_main}>
              <p className={style.info_title}>
              {obj?.title}
              </p>

              <p className={style.info_content}>
                {obj?.description}
              </p>
            </div>

            <div className={style.pop_info_sub}>
              <p className={style.info_team}>
                {obj?.info}
              </p>
              
              <p>
                {obj?.count}
              </p>
              
              <p className={style.info_cate}>
                {obj?.cate}
              </p>

              <p className={style.info_btn}>
                <Link target="_blank" href={obj?.link || ''}>Visit Site</Link>
              </p>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default ItemPopUp;