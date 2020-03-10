function f1() {
    document.getElementById('number').value += 1 ;

}function f2() {
    document.getElementById('number').value += 2 ;

}function f3() {
    document.getElementById('number').value += 3 ;

}function f4() {
    document.getElementById('number').value += 4 ;

}function f5() {
    document.getElementById('number').value += 5 ;

}function f6() {
    document.getElementById('number').value += 6 ;

}function f7() {
    document.getElementById('number').value += 7 ;

}function f8() {
    document.getElementById('number').value += 8 ;

}function f9() {
    document.getElementById('number').value += 9;
}
    function f0() {
        document.getElementById('number').value += 0 ;


    }
function cong() {
    document.getElementById('number').value += '+';
}
function tru() {
    document.getElementById('number').value += '-';
}
function nhan() {
    document.getElementById('number').value += '*';
}
function chia() {
    document.getElementById('number').value += '/';
}
function result() {
    let number=document.getElementById('number').value;
    // console.log(typeof number);
    // let a=parseFloat(number);
    document.getElementById('result').value = eval(number) ;

}
function reset() {
    document.getElementById('number').value = null;
    document.getElementById('result').value = null;

}

