var scene;
var camera;
var renderer;
var geometry;
var material;
var mesh;

$(document).ready(function(){
    init();
    animate();
});


function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1 , 10000);
    camera.position.z = 1000;

    geometry = new THREE.BoxGeometry(500, 500, 500);
    material = new THREE.MeshBasicMaterial({color:0xff0000});

    mesh = new THREE.Mesh (geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    //document.body.appendChild(renderer.domElement);
    $('#world').append(rederer);
}

function animate(){

    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}