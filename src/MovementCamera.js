import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AFRAME = window.AFRAME;

AFRAME.registerComponent('cam', {

    init: function () {


        //posicion de camera
        var cameraPos = document.querySelector('#camera');

        //creacion de timeline
        var tl = gsap.timeline({repeat:0});
        //Movimiento de camara
       tl.to(cameraPos.object3D.position,{x:44.009 , y:27.733, z:-55.819,duration:3, ease: "power2.inOut"},0)

     //gsap 
gsap.registerPlugin(ScrollTrigger);
//set camera position


const timeline = gsap.timeline(cameraPos.object3D.position,{ 
  scrollTrigger: {
    trigger: "#App",

   start: 'top top',
    end: '+=500%',
    pin: true,
    scrub: true 
  }
})

     }
    });





