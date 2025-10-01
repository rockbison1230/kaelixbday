class Resources{
    constructor(){
        this.toLoad = {
            water:"/sprites/water.png",
            hills: "/sprites/hills.png",
            dirt: "/sprites/wideDirt.png",
            grass: "/sprites/grass.png",
            walls: "/sprites/walls.png",
            roofs: "/sprites/roofs.png",
        fences: "/sprites/fences.png"     ,
        test: "/sprites/testimg.jpeg" 
      };


        this.images ={};

        Object.keys(this.toLoad).forEach(key => {
const img = new Image();
img.src = this.toLoad[key];
this.images[key] = {
    image:img,
    isLoaded:false
}
if(this.images[key].isLoaded  == false){
console.log("water's noy loaded");
}
    
img.onload=() => {
    this.images[key].isLoaded = true;
    console.log("water's loaded");
}
        })
    }
}

export const resources = new Resources();