let audio = document.querySelector("audio");
let a = document.querySelector("html");
function play(){
    audio.play();
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var analyser = audioCtx.createAnalyser();

    source = audioCtx.createMediaStreamSource(audio);
    source.connect(analyser);
    analyser.connect(distortion);

    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

}

function fun(){
    let s = document.querySelector("img");
    if(s.getAttribute("src") == "images/info_img.jpg"){
        s.src = "images/cover.jpg";
    }else{
        s.src = "images/info_img.jpg";
    }

}

function zoom(event) {
    event.preventDefault();
    // Restrict scale
    if(event.deltaY==-125){
        n.style.width = "200px";
    }else{
        n.style.width = "600px";
    }
    a = x.pageXOffset
}
  let n = document.querySelector(".navi");
  const el = document.querySelector("html");
  el.onwheel = zoom;
a.addEventListener("mouseover",play);


function draw(){
    drawVisual = requestAnimationFrame(draw);
var can = document.querySelector("#canvas");
canvasCtx = can.getContext("2d");
var WIDTH = 10;
var HEIGHT = 10;
canvasCtx.fillstyle = "rgb(200, 200, 200)";
canvasCtx.fillRect(0, 0, 50, 50);
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0, 0, 0)";

canvasCtx.beginPath();

var sliceWidth = (WIDTH * 1.0) / bufferLength;
var x = 0;

for (var i = 0; i < bufferLength; i++) {
    var v = dataArray[i] / 128.0;
    var y = (v * HEIGHT) / 2;
    
    if (i === 0) {
        canvasCtx.moveTo(x, y);
    }else {
        canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();

};
}



draw();
