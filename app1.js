
var btn=document.getElementById("btnBarkod");
var sonucLabel=document.getElementById("lblSonuc");
const imageEl = document.querySelector("img");
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

    try {
      var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
      alert("barkod nesne oluştu");
    } catch (error) {
      alert(error.message);
    }
  

    setInterval(() => {
      ctx.drawImage(video,0,0,400,400);

      barcodeDetector.detect(canvas)
      .then(data => {
        if(data) alert("gelen data:" + data.toString());
      })
      .catch(err => {
        alert("hata:",err.message);
      })

    }, 100);

  })
  .catch(function(err) {
    alert(err.message);
    
  });

   
   
})

