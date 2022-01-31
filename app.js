
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


    var barcodeDetector = new window.BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});

    const ctx=canvas.getContext('2d');
    canvas.width=200;
    canvas.height=200;

    setInterval(() => {
      ctx.drawImage(video,0,0,200,200);

      barcodeDetector.detect(canvas)
      .then(data => {
        if(data) alert(data);
      })
      .catch(err => {
        alert.log(err.message);
      })

    }, 100);

  })
  .catch(function(err) {
    alert(err.message);
    
  });

   
   
})

