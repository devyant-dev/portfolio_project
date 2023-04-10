import React, { Children } from 'react';
import { createContext } from "react";
import jsonData from '../data/work.json';
import { useState } from 'react';


export const MyData = createContext();

const Context = ({children}) => {
  const [data, setData] = useState(jsonData.workdata);

  return (
    <MyData.Provider value={{data, setData}}>
      {children}
    </MyData.Provider>
  );
};

export default Context;