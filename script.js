let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("download");

function generateQR() {
    if (qrText.value.length > 0) {
        const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        qrImage.src = qrCodeUrl;
        imgBox.classList.add("show-img");
        downloadBtn.style.display = "block";

        downloadBtn.setAttribute("href", qrCodeUrl);
        downloadBtn.setAttribute("download", "QRCode.png");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
