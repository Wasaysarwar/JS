function c(a){
    document.getElementById("inp").value += a;
}
function cal(){
    var d = document.getElementById("inp");
    d.value = eval(d.value)
}
function clr(){
    document.getElementById('inp').value = "";
}
function clrall(){
    var f = document.getElementById("inp").value;
    f = f.slice(0,-1)
    document.getElementById("inp").value = f;

}

