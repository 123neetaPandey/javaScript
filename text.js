
function getAdd(){
    var ul=document.getElementById('demo');
    var x=document.getElementById('phone');
    var li=document.createElement('li');
    li.innerHTML=x.value;

    ul.appendChild(li);
}


function phoneRe(){
    var ph=document.getElementById('demo');
    ph.removeChild(ph.lastChild)
}
function first(){
    var fir=document.getElementById('demo');
    fir.removeChild(fir.firstChild)
}

function last(){
    var lst=document.getElementById('demo1');
    lst.removeChild(lst.lastChild)
}
function getAdd1(){
    var ul1=document.getElementById('demo1');
    var x1=document.getElementById('fruits');
    var li1=document.createElement('li');
    li1.innerHTML=x1.value;

    ul1.appendChild(li1);
}
function fruitRe(){
    var fru=document.getElementById('demo1');
    fru.removeChild(fru.lastChild)
}


function first(){
    var fir=document.getElementById('demo');
    fir.removeChild(fir.firstChild)
}

function last(){
    var lst=document.getElementById('demo1');
    lst.removeChild(lst.lastChild)
}

