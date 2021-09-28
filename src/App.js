import './App.css';
import 'aframe';
import './MovementCamera.js';
import  'gsap';

function App() {


  return (


    <><div className="App">
     <div className="spacer" />
 
 <div id="scenewrapper">
   <a-scene embedded vr-mode-ui="enabled: false">
     <a-box position="0 0.5 -3" rotation="`0 ${360 * progress} 0`" color="#4CC3D9"></a-box>
     <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
     <a-sky color="#ECECEC"></a-sky>
   </a-scene>
 </div>

 <div className="spacer" />
    </div>
    

      
      </>

  

  );
}

export default App;
