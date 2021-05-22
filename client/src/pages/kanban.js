import React from 'react'
import InputLine from '../components/topNav/topNav'
import * as PIXI from 'pixi.js'
import axios from 'axios';  
let textTest ;





const app = new PIXI.Application({
  width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

let text = new PIXI.Text('simple',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
const basicText = new PIXI.Text('Basic text in pixi');
basicText.x = 50;
basicText.y = 100;

app.stage.addChild(basicText,text);

// if(result.data[0].header){
//    text2 = new PIXI.Text(result.data[0].header,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
//    app.stage.addChild(text2);
// } 
async function getNotes() {
  const result = await axios('/bd');
  console.log(result.data[0].header)
  textTest = result
  let text2 = new PIXI.Text(result.data[0].header,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
  app.stage.addChild(text2);
} getNotes()


export const  Kanban = () =>{
  return (
    <>
    <InputLine/>
    <p>this is canvas</p>
    </>
  )
}

