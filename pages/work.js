import React, { useContext, useState } from 'react';
import style from '@/styles/Work.module.scss';
import ProjectItem from '@/component/ProjectItem';
import { MyData } from '@/component/Context';

const Work = () => {


  // <Link className={`${styles.linkStyle} ${router.route == '/MyPage/[id]' ? styles.activeLink : ''}`}
  //         href={`/MyPage/${userLogin.UserID}`}></Link>
  const {data} = useContext(MyData);

  return (
    <div className='page_container'>
      <div className={style.work_container}>
        <span className={`${style.outline} ${style.line01}`}></span>
        <span className={`${style.outline} ${style.line02}`}></span>
        <span className={`${style.outline} ${style.line03}`}></span>
        
        { 
          data.map( (obj, idx) => (
            <ProjectItem key={idx} idx={idx} obj={obj}/>
            )
          )
        }
          
        {/* { data.workdata.length%2 == 0 ? '' : <div className={style.empty_wrapper}></div> }  */}

      </div>
    </div>
  );
};

export default Work;