
var btn=document.getElementById("btnBarkod");
var lblSonuc1=document.getElementById("lblSonuc1");
var lblSonuc2=document.getElementById("lblSonuc2");

const video=document.querySelector("video");
const canvas=document.querySelector("canvas");


let random=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
window.history.replaceState(null, null, `?arg=${random}`);

lblSonuc1.innerHTML=1000;

btn.addEventListener("click", ()=>{

  const constraint={video: {width:300, height:300, facingMode: 'environment'}}
  navigator.mediaDevices.getUserMedia(constraint)
  .then(function(stream) {
   
    video.srcObject =stream;
    video.play();

    const ctx=canvas.getContext('2d');
    canvas.width=300;
    canvas.height=300;

    var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar','ean_8', 'ean_13','qr_code','upc_a','code_128']});


   i=0;
    setInterval(() => {
      ctx.drawImage(video,0,0,300,300);

      i++;
      barcodeDetector.detect(canvas)
      .then(([data]) => {
        lblSonuc1.innerHTML=i;

        if(data){
          lblSonuc2.innerHTML=data.rawValue;
          navigator.vibrate(200); 

          i=0;
        } 


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

