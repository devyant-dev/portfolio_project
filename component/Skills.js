import style from '@/styles/Profile.module.scss';

import React from 'react';

const Skills = () => {
  return (
    <div className={style.skills}>
      <p className={ `${style.resume_title} ${style.resume_title_common}` }>
        Skills
      </p>

      <div className={style.resume_content_common}>
        <div className={`${style.skill_common_cont} ${style.frontend}`}>
          <p className={style.resume_sub_title}>Front-end</p>

          <div className={style.skill_icon_wrap}>
            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>C</span>
              </div>
              <p className={style.skill_txt}>CSS3</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>S</span>
              </div>
              <p className={style.skill_txt}>SASS</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>JS</span>
              </div>
              <p className={style.skill_txt}>JavaScript</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>R</span>
              </div>
              <p className={style.skill_txt}>React.js</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>N</span>
              </div>
              <p className={style.skill_txt}>Next.js</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>V</span>
              </div>
              <p className={style.skill_txt}>Vue.js</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>N</span>
              </div>
              <p className={style.skill_txt}>Node.js</p>
            </div>
            
          </div>
          
        </div>


        <div className={`${style.skill_common_cont} ${style.deploy}`}>
          <p className={style.resume_sub_title}>Deploy</p>

          <div className={style.skill_icon_wrap} >
            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>G</span>
              </div>
              <p className={style.skill_txt}>GitHub</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>C</span>
              </div>
              <p className={style.skill_txt}>Cloudtype</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>V</span>
              </div>
              <p className={style.skill_txt}>Vercel</p>
            </div>
          </div> 
        </div>

        <div className={`${style.skill_common_cont} ${style.tool}`}>
          <p className={style.resume_sub_title}>Tool</p>

          <div className={style.skill_icon_wrap} >
            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>F</span>
              </div>
              <p className={style.skill_txt}>Figma</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>Ps</span>
              </div>
              <p className={style.skill_txt}>Photoshop</p>
            </div>

          </div> 
        </div>

      </div>

    </div>
  );
};

export default Skills;