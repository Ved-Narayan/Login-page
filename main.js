
const myForm = document.querySelector('#potti');
const usernameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#pass');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    if (usernameInput.value === '' || passwordInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter your details';
        setTimeout(() => msg.innerHTML = '', 3000); // Clear message after 3 seconds
    } else {
        msg.classList.remove('error');
        msg.innerHTML = '';
        alert("Succesfully Logged in ")
        console.log("Successful");
    }
}

// const myForm=document.querySelector('#potti');
// const UsernameInput=document.querySelector('#name');
// const passwordInput=document.querySelector('#pass');
// const msg=document.querySelector('.msg');

// myForm.addEventListener('submit',onSubmit);

// function onSubmit(event){
//     event.preventDefault();
// }

// if(UsernameInput.value===''||passwordInput.value===''){
//     msg.classList.add('error');
//     msg.innerHTML='please enter ur details';
// }
// else{
//     console.log("Successful");  
// }

