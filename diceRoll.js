function roll(){
 const diceNumber = document.getElementById("diceNum").value;
 let diceResult = document.getElementById("diceResult");
 let imgResult = document.getElementById("imgResult");
 const values=[];
 const img=[];
 for(let i = 0 ; i<diceNumber ; i++){
  let random = Math.floor((Math.random()*6)+1)
  values.push(random);
  img.push(`<img src="/images/${random}.png.png" style="width:100px;height=100px;">`);
 }
 diceResult.innerText=`dice : ${values.join(" , ")}`
 imgResult.innerHTML = img.join("   ")
}