// 矩形波を合成する
window.AudioContext = window.webkitAudioContext || window.AudioContext;
const audioCtx = new AudioContext();
let number = 20; // 20個の周波数について計算する
let osc = new Array( number ); // 20個分のオシレータノード
let amp = new Array( number ); // 20個分のゲインノード

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    for( let i=1; i< number; i++ ) {
        osc[i] = audioCtx.createOscillator(); // オシレータノードの初期化
        amp[i] = audioCtx.createGain(); // ゲインノードの初期化
        osc[i].frequency.value = (440 * i); // 周波数
        amp[i].gain.value = 1.0/i; // 振幅

        // オシレータノード20個　→　ゲインノード20個　→　出力先
        osc[i].connect( amp[i] );
        amp[i].connect( audioCtx.destination );
    }

    // 偶数成分をカット：クラリネットのような音色
/*     for( var i=2; i< number; i+=2 ) {
        amp[i].gain.value = 0;
    } */

    // 奇数成分をカット：ピアノのような音色
/*     for( var i=3; i< number; i+=2 ) {
        amp[i].gain.value = 0;
    } */

/*     // 高周波数成分をカット：フルートのような音色
    for( var i=6; i< number; i++ ) {
        amp[i].gain.value = 0;
    } */

    for( let i=1; i< number; i++ ) {
        osc[i].start();
    }

    setTimeout( function(){
        for( let i=1; i< number; i++ ) {
            osc[i].stop();
        }
    }, 2000 );
});