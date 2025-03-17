let select =document.getElementById("select1");
let downmanag =document.getElementById("manager-app");

console.log(select.value)

 function khalid(){
    if(select.value=="download-manager"){
       
        downmanag.style.display= "block";
    }
    else if(select.value==""){
        downmanag.style.display= "none";
    }
}
