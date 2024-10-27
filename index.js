function generateQRCode() {
  var url = document.getElementById("urlInput").value;
  if (url) {
    var qrCodeDiv = document.getElementById("qrCode");
    qrCodeDiv.innerHTML = ""; // Wyczyść poprzedni kod QR, jeśli istnieje

    var qrcode = new QRCode(qrCodeDiv, {
      text: url,
      width: 128,
      height: 128,
    });
  }
}
