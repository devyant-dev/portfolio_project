import React, { useContext } from 'react';
import style from '@/styles/Popup.module.scss';
import { MyData } from './Context';

const ItemPopUp = ({obj, idx}) => {

  const {data, setData} = useContext(MyData);

  console.log(data)

  return (
    <div className={style.pop_container}>
      <div className={style.pop_wrapper}>
        <div className={style.pop_title_area}>
          <p className={style.pop_title}>
            {data[0].title}
          </p>
        </div>

        <div className={style.pop_info_area}>
          <div className={style.pop_info_img}>
            <img src={data[0].src} alt="" />
          </div>

          <div className={style.pop_info_txt_box}>
            <div className={style.pop_info_main}>
              <p className={style.info_title}>
              {data[0].title}
              </p>

              <p className={style.info_content}>
                {data[0].description}
              </p>
            </div>

            <div className={style.pop_info_sub}>
              dddd
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default ItemPopUp;