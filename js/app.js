/// <reference path="babylon.2.1.d.ts" />


var BjsApp = BjsApp || {};

BjsApp.init = function(){
  // get the canvas
  var canvas = document.getElementById("renderCanvas");

  // utworz silnik obiektu BabylonJs
  var engine = new BABYLON.Engine(canvas, true);

  // utworz scene
  var scene = new BABYLON.Scene(engine);

  // zmien kolor tła
}
