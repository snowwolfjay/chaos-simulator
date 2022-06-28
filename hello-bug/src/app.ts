import {provide,inject} from "vue"
import { Application } from "pixi.js" 


export const createApp = () =>{
    const view = document.querySelector("#stage") as HTMLCanvasElement;
    view.width = document.body.clientWidth;
    view.height = document.body.clientHeight;

    const app = new Application({
    view,
    width:screen.availWidth,
    height:screen.availHeight
  })
  provide("app",app)
}

export const usePixi = ()=>{
    return inject("app") as  Application
}