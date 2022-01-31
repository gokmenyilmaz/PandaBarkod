
var btn=document.getElementById("btnBarkod");
var lblSonuc=document.getElementById("lblSonuc");

const video=document.querySelector("video");
const canvas=document.querySelector("canvas");




btn.addEventListener("click", ()=>{

  const constraint={video: {width:400, height:400, facingMode: 'environment'}}
  navigator.mediaDevices.getUserMedia(constraint)
  .then(function(stream) {
   
    video.srcObject =stream;
    video.play();

    const ctx=canvas.getContext('2d');
    canvas.width=400;
    canvas.height=400;

  

    setInterval(() => {
      ctx.drawImage(video,0,0,400,400);

      var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});

      barcodeDetector.detect(canvas)
      .then(data => {
        lblSonuc.innerHTML=data;
      })
      .catch(err => {
        alert("hata:",err.message);
      })

    }, 100);

  })
  .catch(function(err) {
    alert("stream alma hatası:" + err.message);
    
  });

   
   
})

