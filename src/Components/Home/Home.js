import React from 'react'

import { Button } from 'primereact/button';
import Navbar from '../Navbar/Navbar';


const Home = () => {
  return (
    <>
     <div className="flex flex-wrap align-items-center justify-content-center mt-5">
           <h1>
           NewsXpressToday         
           </h1>
         <div className="card flex justify-content-center " style={{marginLeft:"1010px"}}>
              <Button className="h-5" label="Create User" />
               <Button className="ml-4" label="LogIn" />
         </div>
          <Navbar />
         
         </div>
         <div>
            <img src="/public/Images/News paper1.jpg" alt='Home page pic'/>
          </div>
    </>
)}

export default Home
