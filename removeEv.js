function getAdd(){
    var ul=document.getElementById('demo');
    var x=document.getElementById('phone');
    var li=document.createElement('li');
    li.innerHTML=x.value;

    ul.appendChild(li);
}
x.addEventListener("click",getAdd);