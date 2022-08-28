window.AudioContext = window.webkitAudioContext || window.AudioContext;
let audioCtx = new AudioContext();

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    let oscNode = audioCtx.createOscillator();
    oscNode.connect( audioCtx.destination );
    oscNode.type = "square";
    // oscNode.type = "triangle"; // 三角波
    // oscNode.type = "sawtooth"; // ノコギリ波

    oscNode.start();
    setTimeout( () => { oscNode.stop() }, 1000 );
});