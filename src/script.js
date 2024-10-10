const wrapper = document.getElementsByClassName("wrapper")[0]; 
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementsByClassName("result")[0]; 
const inputField = document.getElementById("inputBox");
const resultImage = document.getElementById("resultImage");

const generateQRCode = () => {
    let qrValue = inputField.value;  
    if (!qrValue) return;
    generateBtn.innerText = "Generating...";
    resultImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    resultImage.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerHTML = '<i class="uil uil-qrcode-scan text-[#fff]"></i> Generate QR code';
    });
    
};

generateBtn.addEventListener("click", generateQRCode);

inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        generateQRCode();
    }
});


inputField.addEventListener("keyup", () => {
    if(!inputField.value){
        wrapper.classList.remove("active");
        wrapper.style.transition = 'ease 0.2s';
    };
});