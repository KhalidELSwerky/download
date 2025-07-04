let select    =  document.getElementById("select1");
let downmanag =document.getElementById("manager-app");
let windows11 =document.getElementById("windows-version");
let windows12 =document.getElementById("windows-app");
let anaconda1 =document.getElementById("anaconda1");
let downmanage =document.getElementById("downmanage");
let whats =document.getElementById("whats");
let obs =document.getElementById("obs");
let dev =document.getElementById("dev");
let microsoft =document.getElementById("microsoft");
let xampp =document.getElementById("xampp");
let image =document.getElementById("image");
let app =document.getElementById("app");
let git =document.getElementById("git");
let androidstudio =document.getElementById("android-studio");
let mysql =document.getElementById("mysql");
let internetconsu =document.getElementById("consu-internet");

console.log(select.value)

 function khalid(){
    if(select.value=="download-manager"){
       image.src="image/reset.png";
       whats.style.display= "none";
       microsoft.style.display= "none";
       xampp.style.display= "none";
       obs.style.display= "none";
       dev.style.display= "none";
       downmanage.style.display= "none";
       anaconda1.style.display= "none";
        downmanag.style.display= "block";
        windows11.style.display= "none";
        windows12.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }
    else if(select.value==""){
        image.src="image/KHALID GAMAL.jpg";
        whats.style.display= "none";
        xampp.style.display= "none";
        microsoft.style.display= "none";
        obs.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows11.style.display= "none";
        downmanag.style.display= "none";
        windows12.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";

    }

    
    else if(select.value=="windows1"){
        image.src="image/windows.png";
        whats.style.display= "none";
        xampp.style.display= "none";
        obs.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows12.style.display= "none";
        windows11.style.display= "block";
        downmanag.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }
    else if(select.value=="microsoft"){
        image.src="image/microsoft.png";
        whats.style.display= "none";
        microsoft.style.display= "block";
        xampp.style.display= "none";
        obs.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows12.style.display= "none";
        windows11.style.display= "none";
        downmanag.style.display= "none";
        androidstudio.style.display= "none";
        git.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }
    else if(select.value=="xampp"){
        image.src="image/xampp.png";
        xampp.style.display= "block";
        obs.style.display= "none";
        whats.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows12.style.display= "none";
        windows11.style.display= "none";
        downmanag.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }
    else if(select.value=="OBS"){
        image.src="image/obs.png";
        obs.style.display= "block";
        xampp.style.display= "none";
        microsoft.style.display= "none";
        whats.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows12.style.display= "none";
        windows11.style.display= "none";
        downmanag.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }

    else if(select.value=="dev"){
        image.src="image/dev.png";
        xampp.style.display= "none";
        obs.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "block";
        whats.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows12.style.display= "none";
        windows11.style.display= "none";
        downmanag.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        git.style.display= "none";
        internetconsu.style.display= "none";
        mysql.style.display= "none";
    }
    else if(select.value=="whatsapp"){
        image.src="image/whats.png";
        xampp.style.display= "none";
        obs.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "none";
        whats.style.display= "block";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows12.style.display= "none";
        windows11.style.display= "none";
        downmanag.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }

    else if(select.value=="down-mange"){
        image.src="image/download.jpeg";
        whats.style.display= "none";
        microsoft.style.display= "none";
        xampp.style.display= "none";
        obs.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "block";
        anaconda1.style.display= "none";
        windows12.style.display= "none";
        windows11.style.display= "none";
        downmanag.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }
    
    else if(select.value=="windows2"){
        image.src="image/rufus.png";
        whats.style.display= "none";
        xampp.style.display= "none";
        microsoft.style.display= "none";
        obs.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows11.style.display= "none";
        windows12.style.display= "block";
        downmanag.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }
    

    else if(select.value=="anaconda"){
        image.src="image/anaconda.png";
        whats.style.display= "none";
        xampp.style.display= "none";
        obs.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "block";
        windows11.style.display= "none";
        windows12.style.display= "none";
        downmanag.style.display= "none";
        git.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }
    else if(select.value=="git"){
        image.src="image/git.png";
        git.style.display= "block";
        whats.style.display= "none";
        xampp.style.display= "none";
        obs.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows11.style.display= "none";
        windows12.style.display= "none";
        downmanag.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        internetconsu.style.display= "none";
    }
    else if(select.value=="android-studio"){
        image.src="image/android-studio.png";
        androidstudio.style.display= "block";
        mysql.style.display= "none";
        git.style.display= "none";
        whats.style.display= "none";
        xampp.style.display= "none";
        obs.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows11.style.display= "none";
        windows12.style.display= "none";
        downmanag.style.display= "none";
        internetconsu.style.display= "none";
        
    }
    else if(select.value=="mysql"){
        image.src="image/";
        mysql.style.display= "block";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        git.style.display= "none";
        whats.style.display= "none";
        xampp.style.display= "none";
        obs.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows11.style.display= "none";
        windows12.style.display= "none";
        downmanag.style.display= "none";
        internetconsu.style.display= "none";
    }
    
    else if(select.value=="consu-internet"){
        image.src="image/";
        internetconsu.style.display= "block";
        mysql.style.display= "none";
        androidstudio.style.display= "none";
        mysql.style.display= "none";
        git.style.display= "none";
        whats.style.display= "none";
        xampp.style.display= "none";
        obs.style.display= "none";
        microsoft.style.display= "none";
        dev.style.display= "none";
        downmanage.style.display= "none";
        anaconda1.style.display= "none";
        windows11.style.display= "none";
        windows12.style.display= "none";
        downmanag.style.display= "none";
    }
    


}
function filterOption(){
    let input = document.getElementById("search").value.toLowerCase();
    let select = document.getElementById("select1");
    let options = select.getElementsByTagName("option");

    for (let option of options) {
        let text = option.textContent.toLowerCase();
        option.style.display = text.includes(input) ? "" : "none";

    }


}
