import React from "react";
import "./Home.css";
// import { Route, Link, Switch } from "react-router-dom";
// import Header from "./resort-items/Header";
// import TweenlineLite from  'tween';
import $ from "jquery";
// import TweenMax from ""
export default function Home() {

  function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    
    document.getElementById("menu-bg").classList.toggle("change-bg");
}



  /* 
* Hi and Welcome to Codepen!
*
* My name is Ignacio and I am looking for a Dribble invitation.
* Please contact me via twitter if you have 1, 
* I would like to have 1 hehe :)
* 
*
* Finally I can reproduce in CSS what I managed to design in Photoshop. 
* Still not all browsers allow for the creatives to reproduce everything.
* We still have browser compatibility problems.
*
* I will keep publishing examples to help push the web foward.
* PLEASE Like, Heart or Share if you like, and don't forget to follow. 
* Thanks.
*
* Now let's animate it :)
*/

// $(document).ready(function(){
// 	var tl = new TimelineLite()
// 	,inter = 30
//   ,speed = 1
//   ,$text = $('.text');
//   function animInfinite(){
//     $('.text').each(function(index,val) {
//       index = index + 1;
//       TweenMax.fromTo(
//         $(this), speed, {autoAlpha:0},{autoAlpha:0+(0.01*index),delay:0.1*index});
//      });
//     TweenMax.to(
//       $('.text:nth-child(30)'), speed,{autoAlpha:1.5,delay:3.5}
//     );
//   }
//   $('.typer input').keyup(function() {
//     //Stop Everything First
//     TweenMax.killAll(false, true, false);
//     TweenMax.set($text, {autoAlpha:0});
//     $text.text(this.value);
//      animInfinite();
//   });
//   animInfinite();
// });

$(function(){  
  for (var i = 0; i < 50; i++) {
    var names = ['x1','x2','y1','y2'],
        name = names[Math.floor(Math.random() * names.length)];
    $('.circles').append('<div class="circle-container c'+i+'"><div class="circle i'+ i +'"></div></div>');
    $('.c'+i).css({
      'animation': 'z 5s .'+ i +'s linear infinite'
    });
    $('.i'+i).css({
      'animation': name + ' 7.5s .'+ i +'s linear infinite'
    });
  }
});
  {/* <div classNameName="pattern">

       <div classNameName="Home">
        <div classNameName="div"></div>

        <div classNameName="head-btn">
          <div classNameName="twist">
            <h1 classNameName="resort">Frank Resort</h1>
                <button classNameName="box"> */}
                {/* <Link to = "/header"> */}
                 
                  {/* WELCOME */}
                  {/* </Link> */}
{/* 
                  <div classNameName="glass"></div>
                  <div classNameName="glass"></div>
                </button> */}
                {/* <div classNameName="shadow"></div> */}
              {/* </div> */}
            {/* </div> */}

      {/* </div> */}


       {/* </div> */}

   
       {/* <div classNameName="face face2"></div> */}


       {/* </div> */}
          {/* <Switch> */}
        {/* <Route exact path="/header" component={Header} /> */}
        {/* </Switch> */}
  return (

    <div className="body">
    <div className="div"></div>

   
  <div id="menu-bar">
    <div id="menu" onClick={onClickMenu}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
    </div>
    <ul className="nav" id="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>
<div className="menu-bg" id="menu-bg"></div>
<div class="magic-circle">
  <div class="circles">

  </div>
  <h1>Saahirs Resort</h1>

</div>
 
      
    </div>
  
 

  // </div>

);
}
