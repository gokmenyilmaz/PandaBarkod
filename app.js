
var btn=document.getElementById("btnBarkod");
var sonucLabel=document.getElementById("lblSonuc");
const imageEl = document.querySelector("img");
const video=document.querySelector("video");


btn.addEventListener("click", ()=>{

  const constraint={video: {width:200, height:200}}
  navigator.mediaDevices.getUserMedia(constraint)
  .then(function(stream) {
   
    video.srcObject =stream;

    video.onloadedmetadata = function(e) {
      video.play();
    };
   
   
  })
  .catch(function(err) {
    alert(err);
    
  });

   
   
})

