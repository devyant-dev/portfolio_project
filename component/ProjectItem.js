import React, { useRef, useContext, useEffect } from 'react';
import style from '@/styles/Work.module.scss';
import { MyData } from './Context';
import Link from 'next/link';

const ProjectItem = ({obj, idx}) => {

  const {data, setData} = useContext(MyData);
  
  const clickDiv = () => {
    setData(
      [...data].map(obj => {
        if(obj.number == idx){
          obj.status = true;

        }else{
          obj.status = false;
        }
        return obj;
      })
    )
  }



  return (
    <div key={idx} onClick={() => clickDiv()} className={`${style.work_wrapper} ${obj.status == true ? style.box_act : ""}`}>
      <div className={style.work_info_wrap}>
        <p className={style.info_num}>
          0{obj.number + 1}
        </p>
        <p className={style.info_title}>
          {obj.title}
        </p>
        <p className={style.info_project}>
          {obj.info}
        </p>

        <p className={style.info_cate}>
          {obj.count} <br />
          {obj.cate}
        </p>

 
        { obj.status == true ? (
        <div>
          <p className={style.info_description}>
            {obj.description}
          </p>
          <p className={style.info_btn}>
            <Link href={obj.link} target='_blank'>Visit Site</Link>
          </p>
        </div> ): ''
        }
      </div>

      <div className={style.work_sub_wrap}>
        <div className={style.sub_cate_wrap}>
          <span className={style.sub_cate}>
          {obj.type}
          </span>
        </div>

        <div className={style.sub_icon_wrap}>
          <div className={style.plus_row}></div>
          <div className={style.plus_column}></div>
        </div>

      </div>

      {
        obj.status == true ? (
        <div className={style.work_img_wrap}>
          <img src={obj.src} alt={obj.title} />
        </div> ) : ''
      }

    </div>
  );
};

export default ProjectItem;