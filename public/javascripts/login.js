
const id=document.getElementById('id');
const password=document.getElementById('password');
const submit=document.getElementById('submit');

submit.addEventListener('click',login);
// console.log(id)

function login(){
    const req={
        id: id.value,
        password: password.value,
    }; 
    fetch('/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    })
      .then((res)=>res.json())
      .then((res)=>{
          if(res.success){
              location.href='/main';
          } else {
              alert(res.msg);
          }
      });
}
 