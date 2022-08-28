window.AudioContext = window.webkitAudioContext || window.AudioContext;
let audioCtx = new AudioContext();
let oscNode = audioCtx.createOscillator();
oscNode.connect( audioCtx.destination );

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    oscNode.start();
});

document.querySelector( '#btn2' ).addEventListener( 'click', () => {
    oscNode.stop();
});