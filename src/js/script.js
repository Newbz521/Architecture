// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
// import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js";
// import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/OBJLoader.js";
import * as THREE from 'three'

import * as dat from "dat.gui";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(12000, w / h, 0.01, 1000000);
camera.position.set(-841.1214360407214, 954.750567416804, 1457.2791386517558);
// Vector3 {x: -841.1214360407214, y: 954.750567416804, z: 1457.2791386517558}
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.shadowMap.enabled = true;
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(w, h);
renderer.setClearColor('pink');

document.body.appendChild(renderer.domElement);

const gui = new dat.GUI();

function animate(time) {
  // console.log(camera.position)
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
renderer.setPixelRatio(window.devicePixelRatio)
