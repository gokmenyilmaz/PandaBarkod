
var btn=document.getElementById("btnBarkod");
var sonucLabel=document.getElementById("lblSonuc");
const imageEl = document.querySelector("img");


btn.addEventListener("click", ()=>{

   let destek=barkod_destegi_varmi();

   if(destek===false)
   {
     alert("destek yok");
     return;
   }

    var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
  
    barcodeDetector.detect(imageEl)
    .then(barcodes => {

      let pre = document.createElement("pre");
      pre.innerHTML = JSON.stringify(barcodes, null, 2);
      imageEl.after(pre);
    })
    .catch(err => {
      console.log(err);
    })
})


function barkod_destegi_varmi()
{

    if (!('BarcodeDetector' in window)) {
        return false;
      } else {
        return true;
      }
}