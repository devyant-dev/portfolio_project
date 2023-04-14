import React, { useContext } from 'react';
import style from '@/styles/Popup.module.scss';
import { MyData } from './Context';
import Link from 'next/link';

const ItemPopUp = ({obj, idx}) => {

  const {data, setData} = useContext(MyData);

  //console.log(obj)

  return (
    <div className={style.pop_container}>
      <div className={style.pop_wrapper}>
        <div className={style.pop_title_area}>
          <p className={style.pop_title}>
            {data[2].title}
          </p>
        </div>

        <div className={style.pop_info_area}>
          <div className={style.pop_info_img}>
            <img src={data[0].src} alt="" />
          </div>

          <div className={style.pop_info_txt_box}>
            <div className={style.pop_info_main}>
              <p className={style.info_title}>
              {data[4].title}
              </p>

              <p className={style.info_content}>
                {data[3].description}
              </p>
            </div>

            <div className={style.pop_info_sub}>
              <p className={style.info_team}>
                {data[3].info}
              </p>
              
              <p>
                {data[2].count}
              </p>
              
              <p>
                {data[2].cate}
              </p>

              <p className={style.info_btn}>
                <Link target="_blank" href={data[2].link}>Visit Site</Link>
              </p>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default ItemPopUp;