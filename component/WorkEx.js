import style from '@/styles/Profile.module.scss';
import React from 'react';

const WorkEx = () => {
  return (
    <div className={style.work_ex}>
      <p className={ `${style.resume_title} ${style.resume_title_common}` }>
      Work Experience
      </p>
      <div className={style.resume_content_common}>
        <p className={style.resume_sub_title}>메이드인리얼</p>
        <p className={style.resume_period}>
          2020.12 ~ 2022.05
        </p>

        <p className={style.resume_txt}>
          직장 생활로는 처음으로 다녀본 회사였습니다. 주로 병원 사이트를 만드는 회사였으며, 자사 솔루션을 사용하여 사이트를 만드는 회사였습니다. 자사 솔루션을 사용한다고 해도 기본적인 HTML5, CSS3 지식이 없으면 사용하기에 어려움이 있는 솔루션 이었습니다. 원래는 이 회사에서 솔루션을 잘 사용하게 되면 개발팀으로 넘어가려 했으나, 그러기엔 한계가 있다 느껴 퇴사를 하게 되었습니다.
          <br />
          <br />
          이 일을 하면서 사이트를 만들 때 화면에 대해 고려해야 할 점이나 반응형 작업에 관해 간접적으로 나마 배울 수 있었습니다.
        </p>

      </div>
    </div>
  )
};

export default WorkEx;