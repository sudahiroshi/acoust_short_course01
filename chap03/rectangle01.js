// 矩形波を合成する
window.AudioContext = window.webkitAudioContext || window.AudioContext;
const audioCtx = new AudioContext();
let number = 20; // 20個の周波数について計算する
let osc = new Array( number ); // 20個分のオシレータノード
let amp = new Array( number ); // 20個分のゲインノード

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    for( let i=0; i< number; i++ ) {
        osc[i] = audioCtx.createOscillator(); // オシレータノードの初期化
        amp[i] = audioCtx.createGain(); // ゲインノードの初期化

        // オシレータノード20個　→　ゲインノード20個　→　出力先
        osc[i].connect( amp[i] );
        amp[i].connect( audioCtx.destination );
    }

    // 周波数と振幅を調整して矩形波にする
    for( let i=0; i< number; i++ ) {
        let j = i*2+1; // 周波数と振幅のためのパラメータ
        osc[i].frequency.value = 440 * j; // 周波数
        amp[i].gain.value = 1.0/j; // 振幅
    }

    for( let i=0; i< number; i++ ) {
        osc[i].start();
    }

    setTimeout( function(){
        for( let i=0; i< number; i++ ) {
            osc[i].stop();
        }
    }, 2000 );
});