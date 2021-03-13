const TakePhotoBtn = document.getElementById("TakePhotoBtn");
const FilePickerInput = document.getElementById("FilePickerInput");

TakePhotoBtn.addEventListener("click", PopFilePicker);

function PopFilePicker() {
    FilePickerInput.click();
}