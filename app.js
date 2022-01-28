
var btn=document.getElementById("btnBarkod");
var sonucLabel=document.getElementById("lblSonuc");

btn.addEventListener("click", ()=>{

   let destek=barkod_destegi_varmi();

   if(destek===false)
   {
     alert("destek yok");
     return;
   }

   else
   {
    alert("destek var");
    return;
   }


    barcodeDetector.detect(imageEl)
    .then(barcodes => {
      barcodes.forEach(barcode => sonucLabel.innerHTML=barcode.rawData);
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
       // var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
        return true;
      }
}