/// <reference path="babylon.2.1.d.ts" />


var BjsApp = BjsApp || {};

BjsApp.init = function(){
  // get the canvas
  var canvas = document.getElementById("renderCanvas");

  // utworz silnik obiektu BabylonJs
  var engine = new BABYLON.Engine(canvas, true);

  // utworz scene
  var scene = new BABYLON.Scene(engine);

  // stworzenie kamery
  var camera = new BABYLON. FreeCamera('FreeCamera', new BABYLON.Vector3(0, 1, -15), scene);
      camera.attachControl(canvas);

  // stworzenie światła
  var light = new BABYLON.HemisphericLight("Light1", new BABYLON.Vector3(0, 1, 0), scene);

  var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 2, scene);

  // nowa figury
  var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
  sphere.position.y = 1;

  var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 16, 4, scene);
  sphere2.position = new BABYLON.Vector3(3, 3, 3);

  var box = BABYLON.Mesh.CreateBox('box', 1, scene);
      box.position = new BABYLON.Vector3(4, 2, -5);
      box.scaling.y = 3;
      box.rotation.x = 45;
  
  var cylinder = BABYLON.Mesh.CreateCylinder('cylinder', 4 , 1, 1, 16, scene)    
 
  engine.runRenderLoop(function(){
    scene.render();
  });
};
