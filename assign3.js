//************for creating Element******* */
function create() {
     btn=document.createElement('button')
    btn.innerText='hit me';
    console.log(btn);
    

}
//**********For display element******* */
function showEle(){
  btn.style.color='red';
  btn.style.background='black';
  document.body.appendChild(btn);
}
//*****For deleteing element*************** */
function deleteEle() {
    btn.remove();  
}