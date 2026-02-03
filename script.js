function appendValue(value){
    document.getElementById('result').value += value;
}
function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    try{
        let exp = document.getElementById('result').value;
        document.getElementById('result').value = eval(exp);
    } catch {
        document.getElementById('result').value = 'Error';
    }
}