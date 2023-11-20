// AppContext.js

import { createContext, useContext, useState } from 'react';
const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = (props) => {
  const [user, setUser] = useState(null);
   
 const fetchApi = async (url, method, body)=>{
    try {
        const response = await fetch(`https://mern-stack-practice-api.vercel.app/api${url}`, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        
        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const data = await response.json()
        return data
      } catch (error) {
          return (error)
      }
 }

  

  return (
    <AppContext.Provider value={{ user, fetchApi }}>
      {props.children}
    </AppContext.Provider>
  );
};
