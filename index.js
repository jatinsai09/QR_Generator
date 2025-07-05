let qrContainer = document.getElementById('qrContainer')
let qrText = document.getElementById('qrText')

let genBtn = document.getElementById('genBtn')
let downloadBtn = document.getElementById('downloadBtn')

let qrImage;

generateQR = (qrtext) => {
    qrContainer.innerHTML = '';

    return new QRCode(qrContainer, {
        text: qrtext,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
   });
    
}

genBtn.addEventListener('click', (e) => {
    let text = qrText.value;
    if(text.length > 0){
        qrcode = generateQR(text);
        qrContainer.classList.add('img-show')
        downloadBtn.classList.add('download-active');

    }
});

downloadBtn.addEventListener('click', downloadQR);

downloadQR = () => {
    qrImage = document.querySelector('#qrContainer img')

    let imgSrc = qrImage.getAttribute('src');
    downloadBtn.setAttribute('href', imgSrc);
}

