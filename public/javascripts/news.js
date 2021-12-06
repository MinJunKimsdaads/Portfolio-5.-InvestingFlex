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

$(function(){
    $.ajax({
        url: 'test.php',
        dataType:'json',
        success:function(data){
            console.log(data.items[0].title);
            $('#section4').append(data.items[0].title);
            
        }
    });
});
