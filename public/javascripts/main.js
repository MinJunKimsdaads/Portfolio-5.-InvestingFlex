const logout=document.getElementById('logout');
// import test from './test1';
// console.log(test);

function aa() {
    var sure=confirm('Are you sure you want to log out?');
    console.log(sure);
    if(sure==false){
        location.href='/main';
    } else if(sure==true){
        location.href='/';
    }
}

logout.addEventListener('click',aa);


