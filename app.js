barkodCalistir();

var btn=document.getElementById("btnBarkod");
var sonucLabel=document.getElementById("lblSonuc");

btn.addEventListener("click", ()=>{
    barcodeDetector.detect(imageEl)
    .then(barcodes => {
      barcodes.forEach(barcode => sonucLabel.innerHTML=barcode.rawData);
    })
    .catch(err => {
      console.log(err);
    })
})


function barkodCalistir()
{

    if (!('BarcodeDetector' in window)) {
     //   alert("barkod desteklenmiyor")
        console.log('Barcode Detector is not supported by this browser.');
      } else {
        console.log('Destekleniyor');
      
        // create new detector
        var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
      }
}