const id=document.getElementById('id');
const password=document.getElementById('password');
const submit=document.getElementById('submit');
const content='Investing Flex';
const typingeffect=document.getElementById('typingeffect');
var i = 0;

function effect(){
    let txt=content[i++];
    typingeffect.innerHTML+=txt;
    if(i>content.length){
        typingeffect.innerHTML=''
        i=0;
    }
}
setInterval(effect,200);
 


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
 