
var btn=document.getElementById("btnBarkod");
var sonucLabel=document.getElementById("lblSonuc");
const imageEl = document.querySelector("img");


btn.addEventListener("click", ()=>{

  const constraint={video: {width:100, height:200}}
  navigator.mediaDevices.getUserMedia(constraint)
  .then(function(stream) {
   
  })
  .catch(function(err) {
    
  });

   
   
})

