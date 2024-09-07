import React from 'react'
import NavBar from './Components/NavBar';
import AskLead from './Components/AskLead';
import homebanner from './homebanner.png';

function Home(){
  return (
    <div>
        <header><NavBar/></header>
        <body>
        <div className='HomeBanner' style={{display: "inlineBlock",textAlign: "center"}}>
            <img style={{padding:"10px", width:"50%",position:"relative"}} src={homebanner}></img>
            </div>
        </body>
        <footer></footer>
    </div>
  );
}
export default Home;