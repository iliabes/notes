import  Container  from '@pixi/display'





const app = new PIXI.Application({
  width: window.innerWidth, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
})



let listNotes = notes.map((item)=>{
  return item.header
})


listNotes.forEach((element,index) => {
  let item = new PIXI.Text(element,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
  item.x = 10
  item.y = index * 30
  app.stage.addChild(item)
})




document.body.appendChild(app.view);


async function getNotes() {
  const result = await axios('/bd');
  console.log(result.data[0].header)
  let text2 = new PIXI.Text(result.data[0].header, { fontFamily: 'Arial', fontSize: 24, fill: 0xff1010, align: 'center' });
  app.stage.addChild(text2);
}





