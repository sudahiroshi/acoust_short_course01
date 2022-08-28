window.AudioContext = window.webkitAudioContext || window.AudioContext;
let audioCtx = new AudioContext();
let oscNode;
let gainNode = audioCtx.createGain();

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    oscNode = audioCtx.createOscillator();

oscNode.connect( gainNode );
gainNode.connect( audioCtx.destination );
    oscNode.start();
});

document.querySelector( '#btn2' ).addEventListener( 'click', () => {
    oscNode.stop();
});

document.querySelector( '#gain1' ).addEventListener( 'input', ( event ) => {
    console.log(event.target.value);
    gainNode.gain.value = event.target.value / 100.0;
});
