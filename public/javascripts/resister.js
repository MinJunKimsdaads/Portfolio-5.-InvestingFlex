
const id=document.getElementById('id');
const name=document.getElementById('name');
const password=document.getElementById('password');
const repeatpassword=document.getElementById('repeatpassword');
const submit=document.getElementById('submit');

submit.addEventListener('click',resister);
// console.log(id)

function resister(){
    const req={
        id: id.value,
        name: name.value,
        password: password.value,
        repeatpassword: repeatpassword.value,
    };

    fetch('/resister',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    })
      .then((res)=>res.json())
      .then((res)=>{
          if(res.success){
              location.href='/';
          } else {
              alert(res.msg);
          }
      })
      .catch((err)=>{
          alert('회원가입 중 에러 발생');
      })
}

