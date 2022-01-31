
var btn=document.getElementById("btnBarkod");
var sonucLabel=document.getElementById("lblSonuc");
const imageEl = document.querySelector("img");
const video=document.querySelector("video");
const canvas=document.querySelector("canvas");


btn.addEventListener("click", ()=>{

  const constraint={video: {width:200, height:200, facingMode: 'environment'}}
  navigator.mediaDevices.getUserMedia(constraint)
  .then(function(stream) {
   
    video.srcObject =stream;
    video.play();

    const ctx=canvas.getContext('2d');

    canvas.width=video.videoWidth;
    canvas.height=video.videoHeight;

    setInterval(() => {
      ctx.drawImage(video,0,0,video.videoWidth,video.videoHeight);
    }, 100);

  })
  .catch(function(err) {
    alert(err.message);
    
  });

   
   
})

