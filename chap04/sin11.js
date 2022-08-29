window.AudioContext = window.webkitAudioContext || window.AudioContext;
const audioCtx = new AudioContext();
const arr = audioCtx.createBuffer(2, audioCtx.sampleRate, audioCtx.sampleRate); // チャンネル数, サンプル数, サンプリング周波数

let chanL = arr.getChannelData( 0 );
let chanR = arr.getChannelData( 1 );

let f = 440.0;
for( let x = 0; x<audioCtx.sampleRate; x++ ) {
    let y = Math.sin( x * f * 2.0 * Math.PI / audioCtx.sampleRate );
    chanL[x] = y;
    chanR[x] = y;
}

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    const source = audioCtx.createBufferSource();
    source.buffer = arr;
    source.connect( audioCtx.destination );

    source.start();
    console.log("start");
});