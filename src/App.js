import './App.css';
import 'aframe';
import './MovementCamera.js';
import  'gsap';

function App() {


  return (


    <><div className="App">
      <a-scene vr-mode-ui="enabled: false">

        <a-assets>
          <a-asset-item id="Logo" src="/Sources/Models/Logo.obj"></a-asset-item>
        </a-assets>

        {/*    <!-- Camera -->*/}
        <a-entity cam id="camera" camera="active:true; near:5.0; far:25000;" position="142.117 82.888 -111.378" rotation="-30.075 120.103 0"></a-entity>

        {/*   <!-- <a-entity cam id="camera" camera="active:true; near:5.0; far:25000;"  position="64.869 42.476 -62.850" rotation="-28.075 124.103 0">-->*/}
        {/*    <!-- scene -->*/}
        <a-entity class="Nviroment" gltf-model="/Sources/Models/Scene.gltf" position="0 0 0" rotation="0 0 0"></a-entity>
        {/*    <!-- Logo -->*/}
        <a-entity class="Logo" obj-model="obj: #Logo; " material="emissive:#666; color:#fff" position="26.226 11.288 -29.544" rotation="76.991 125.373 10.059" scale="20.000 20.000 20.000"></a-entity>
        {/*    <!-- luces -->*/}
        <a-entity light="type: point; color: #c969ec; intensity: 0.800; distance: 100.010" position="28.903 4.781 -56.672"></a-entity>
        <a-entity light="type: point; color: #53c1bf; intensity: 0.800; distance: 100.010" position="6.126 34.278 -21.932"></a-entity>
        <a-entity light="type: point; color: #c969ec; intensity: 0.800; distance: 100.010" position="39.949 23.700 -7.648"></a-entity>

        <a-sky color="#000000"></a-sky>
      </a-scene>
    </div>
    

      
      </>

  

  );
}

export default App;
