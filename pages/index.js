import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TypeIt from "typeit-react";


export default function Home() {

  const [time, setTime] = useState(3);
  const [state,setState] = useState('')
  const router = useRouter();

  const countEvent = ()=> {

    if(time != 0 ){
      setState(time);
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)}
    else{
      setState(<button onClick={() => router.push('/profile')} className="home_btn">Profile</button>)
    };

  };
  useEffect(() => {
    if(time != 3) countEvent();
  }, [time]);

  useEffect(() => {
    setTimeout(countEvent, 11000);
  }, []);


  return (
    <div className="typed_area">
      <div className="typed_box">
        <TypeIt getBeforeInit={(instance) => {
          instance.type("Hello, I'm Lee DongWook<br /> who wants to be<br /> a  publisher")
          .pause(500).delete(9).pause(500).type("front-end developer.");
          return instance;
          }} />
        { state }
      </div>
    </div>
  )
}