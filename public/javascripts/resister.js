
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
    console.log(req);

    // fetch();
}

