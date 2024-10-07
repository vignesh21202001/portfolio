var display = document.getElementById('dis');
var buttons = document.querySelectorAll('#a,#p');
var equal = document.getElementById('eq');
var li = [];
var t;
var evaluate = ''
var result;
var op = document.getElementById('out');
var ba = document.getElementById('bs');

// const regex = '/^[0-9]+[+-*/](\d+)$'








buttons.forEach(btns => {
    btns.addEventListener('click', () => {
        t = btns.value;
        display.value += t;
        li.push(t);
        // alert(li)
    });
});

ba.addEventListener('click', () => {
    var g = '';
    g = display.value;
    var ng = g.substring(0, g.length - 1);
    display.value = ng;



})

// function va() {
//     const reg = '/^[0-9]+([+-*/][0-9]+)$';
//     var s = '1+2';
//     var ans = reg.test(s);
//     document.write(ans);
// }
// va()

function clean() {
    if (display.value != null) {

        display.value = null;
        li = [];
        t = null;
        op.value = null;
        // alert(li);
        // alert(t);
    }

}

equal.addEventListener('click', () => {

    evaluate = li.join('');
    // alert(evaluate);

    try {
        const r = eval(evaluate);
        op.value = ('=  ' + r);
    }
    catch (error) {
        op.value = 'SYNTAX ERROR'
    }
    // alert(result);
})

document.addEventListener('keydown', (e) => {
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
    if (nums.includes(e.key)) {
        display.value += e.key;
    }
    else if (e.key === 'Backspace') {
        var re = '';
        re = display.value;
        var ns = re.substring(0, re.length - 1);
        display.value = ns;
        // op.value = null;


    }
    else if (e.key === 'Enter') {
        var st = '';
        st = display.value;
        try {
            resu = eval(st);
            op.value = resu;
        }
        catch (error) {
            op.value = 'SYNTAX ERROR'

        }
    }
    else if (e.key == 'c') {
        display.value = null;
        op.value = null;
    }







})
function answer() {
    display.value = op.value;
}