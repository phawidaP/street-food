import React from 'react'
import BeverageCard from './BeverageCard';
const App = () => {
  const beverageList = [
    {
    image: "1112.jpg",
    name: "ขนมรูปปลาไทยากิ",
    
    },
    {
    image: "1113.jpg",
    name: "มันเผาญี่ปุ่น",
  
    },
    {
    image: "1114.jpg",
    name: "พิซซ่าญี่ปุ่นพันไม้",
  
    },
    {
    image: "1115.jpg",
    name: "ยากิโซบะ",
  
    },
    {
    image: "1116.jpg",
    name: "ทาโกะยากิ",

  }
   ]
 return (
  <>
  <h1>Street Food Japan</h1>
  <hr />
  {
  beverageList.map((b)=>(
  <BeverageCard key={b.name} {...b} />
  ))
  }
  </>
 )
}
export default App