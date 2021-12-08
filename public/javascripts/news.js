const logout=document.getElementById('logout');

function aa() {
    var sure=confirm('Are you sure you want to log out?');
    console.log(sure);
    if(sure==false){
        location.href='/news';
    } else if(sure==true){
        location.href='/';
    }
}

logout.addEventListener('click',aa);

