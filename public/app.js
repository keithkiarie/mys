const TakePhotoBtn = document.getElementById("TakePhotoBtn");
const FilePickerInput = document.getElementById("FilePickerInput");
FilePickerInput.addEventListener("input", FilePicked);
const model = await tf.loadLayersModel("../models/model.json");

TakePhotoBtn.addEventListener("click", PopFilePicker);

function PopFilePicker() {
    FilePickerInput.click();
}

function FilePicked() {
    const Files = FilePickerInput.files;


    if (Files.length > 0) {
        let FileURL = window.URL.createObjectURL(Files[0]);
        RecognizeImg(FileURL);
    }
}

async function RecognizeImg(imgURL) {
    let img = `<img id="img" width="100" height="100" src=${imgURL}>`;
    document.getElementById("display").innerHTML = img;
    let image = document.getElementById("img");
    
    let tensorImg = tf.browser.fromPixels(image).resizeNearestNeighbor([150, 150]).toFloat().expandDims();
    prediction = await model.predict(tensorImg).data();
}