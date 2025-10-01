import './style.css'
import {resources} from "./resource.js";

const canvas = document.querySelector("#game-canvas");

const ctx = canvas.getContext("2d");
 
const draw = () => {
  const fence = resources.images.fences;

  if(fence.isLoaded){
    ctx.drawImage(fence.image, 0,0)
  }
}


setInterval(() => {
  draw()
}, 300)