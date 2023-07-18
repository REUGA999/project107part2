function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-Q28OUTSa/model.json', modelReady());
}
function modelReady() {
    classifier.classifier(gotresult);
}