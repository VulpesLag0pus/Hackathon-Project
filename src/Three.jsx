import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {useEffect, useRef} from 'react'

function MyThree(path) {
  const refContainer = useRef(null);
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // enable damping
  const loader = new GLTFLoader();
  renderer.setClearColor(new THREE.Color(0xdee9d3))
  let bot;
    loader.load(
        {path},
        function (gltf) {
            let coffee = gltf.scene;
            scene.add(coffee);
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

  useEffect(() => {

    let light = new THREE.AmbientLight(0xffffff, 1)
    let lightleft = new THREE.DirectionalLight(0xffffff, 1)
    lightleft.position.set(5,5,0)
    let lightright = new THREE.DirectionalLight(0xffffff, 1)
    lightright.position.set(-5,-5,0)
    scene.add(light, lightleft, lightright)
    renderer.setSize((window,innerWidth * 0.1), (window.innerHeight * 0.1));
    refContainer.current.appendChild(renderer.domElement)

    camera.position.z = 5;
    let animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div ref={refContainer}></div>
  );
}

export default MyThree