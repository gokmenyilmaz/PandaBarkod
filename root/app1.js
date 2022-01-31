
var btn=document.getElementById("btnBarkod");
var lblSonuc=document.getElementById("lblSonuc");

const video=document.querySelector("video");
const canvas=document.querySelector("canvas");

lblSonuc.innerHTML=10;


btn.addEventListener("click", ()=>{

  const constraint={video: {width:300, height:300, facingMode: 'environment'}}
  navigator.mediaDevices.getUserMedia(constraint)
  .then(function(stream) {
   
    video.srcObject =stream;
    video.play();

    const ctx=canvas.getContext('2d');
    canvas.width=300;
    canvas.height=300;

    var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
  
   i=0;
    setInterval(() => {
      ctx.drawImage(video,0,0,300,300);

      i++;
      barcodeDetector.detect(canvas)
      .then(data => {
        lblSonuc.innerHTML=i;
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

