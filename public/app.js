const TakePhotoBtn = document.getElementById("TakePhotoBtn");
const FilePickerInput = document.getElementById("FilePickerInput");
FilePickerInput.addEventListener("input", FilePicked);

TakePhotoBtn.addEventListener("click", PopFilePicker);

function PopFilePicker() {
    FilePickerInput.click();
}

function FilePicked() {
    const Files = FilePickerInput.files;


    if (Files.length > 0) {
        let FileURL = window.URL.createObjectURL(Files[0]);
        RecognizeText(FileURL, TextRecognized);
    }
}

const model = await tf.loadLayersModel("../models/model.json");