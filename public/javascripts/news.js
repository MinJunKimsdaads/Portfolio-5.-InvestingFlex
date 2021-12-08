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


// $(function(){
//     $.ajax({
//         type:'GET',
//         url:'https://bittrex.com/api/v1.1/public/getmarketsummaries',
//         dataType:'json',
//         success:function(data){
//             console.log(data);
//         },
//         complete:function(data){
//             console.log('complete');
//         },
//         error:function(data){
//             console.log('error');
//         }
//     });
//     $.ajax({
//         url: "https://api.upbit.com/v1/market/all",
//         dataType: "json"
//       }).done(function(markets){ alert(JSON.stringify(markets)); });
// });