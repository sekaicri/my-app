import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AFRAME = window.AFRAME;

gsap.registerPlugin(ScrollTrigger)
let _this = this
let progress = 0;
let triggerConfig = {
  trigger: '#scenewrapper',
  start: 'top center',
  end: 'bottom center',
  pin: false,
  markers: true,
  onToggle: self => console.log("toggled, isActive:", self.isActive),
  onUpdate: self => {
    progress = self.progress
    console.log(progress);
    // console.log("progress:", _this.name, self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  }
}

ScrollTrigger.create(triggerConfig);

AFRAME.registerComponent('cam', {

  init: function () {
    console.log("regstri");
    //posicion de camera
    var cameraPos = document.querySelector('#camera');

    //creacion de timeline
    var tl = gsap.timeline({ repeat: 0 });
    //Movimiento de camara
    tl.to(cameraPos.object3D.position, { x: 44.009, y: 27.733, z: -55.819, duration: 3, ease: "power2.inOut" }, 0);
  },
  //gsap
});