import * as THREE from 'three';
import {OrbitControls} from "jsm/controls/OrbitControls.js"
const w=window.innerWidth;
const h=window.innerHeight;
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);
const fov=75;
const aspect=w/h;
const near=0.3;
const far=10;
const camera=new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z=2;
const scene= new THREE.Scene();
const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true;
controls.dampingFactor=0.03;
const geo=new THREE.IcosahedronGeometry(1.0,5);
const mat=new THREE.MeshStandardMaterial({
    color:0xffffff,
    flatShading:true
});
const mesh=new THREE.Mesh(geo,mat);

scene.add(mesh);

const wireMat=new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe:true,
})
const wireMesh=new THREE.Mesh(geo,wireMat);
wireMesh.scale.setScalar(1.001)
mesh.add(wireMesh);

const light=new THREE.HemisphereLight(0x0099ff,0xaa5500);
const amblight=new THREE.AmbientLight( 0x404040 );
scene.add(light);

scene.add(amblight)
function animation(t=0){
   
    requestAnimationFrame(animation);
   
    renderer.render(scene,camera);
    controls.update();

}

animation();