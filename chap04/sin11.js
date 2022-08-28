window.AudioContext = window.webkitAudioContext || window.AudioContext;
const audioCtx = new AudioContext();
const arr = audioCtx.createBuffer(2, audioCtx.sampleRate, audioCtx.sampleRate); // チャンネル数, サンプル数, サンプリング周波数

let chanL = arr.getChannelData( 0 );
let chanR = arr.getChannelData( 1 );
let dataL = new Float32Array(audioCtx.sampleRate);
let dataR = new Float32Array(audioCtx.sampleRate);

let f = 440.0;
for( let x = 0; x<audioCtx.sampleRate; x++ ) {
    let y = Math.sin( x * f / audioCtx.sampleRate * 2.0 * Math.PI );
    dataL[x] = y;
    dataR[x] = y;
}
chanL.set(dataL);
chanR.set(dataR);
const source = audioCtx.createBufferSource();
source.bufer = arr;
source.loop = false;
source.loopStart = 0;
source.loopEnd = audioCtx.sampleRate;
source.playbackRate.value = 1.0;
source.connect( audioCtx.destination );

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    source.start(0);
    console.log("start");
});