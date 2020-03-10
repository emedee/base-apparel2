let submitButton = document.querySelector('.btn');
let emailField = document.querySelector('#my-email');
let passField = document.querySelector('#my-password');
let errorIcon = document.querySelector('.error-icon');
let response = document.querySelector('.valid-email');


function ValidateEmail(user){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailField.value.match(mailformat) && passField.value !== ''){
        response.innerHTML = 'email added successfully!';
        response.style.color = 'rgb(150, 255, 140)'
        errorIcon.style.display = 'none';
        emailField.style.border = '1px solid hsl(0, 36%, 70%)';
        axios.post('https://base-apparel-12981.firebaseio.com/data.json', user)
            .then(function(res){
                console.log(res);
            }, function(error){
                console.log(error);
            }, emailField.value = '', passField.value = '');
    }else if(passField.value === ''){
        response.innerHTML = 'Please add a password'
        passField.style.border = '2px solid hsl(0, 93%, 68%)';
        response.style.color = 'hsl(0, 93%, 68%)';
    }else{
        emailField.style.border = '2px solid hsl(0, 93%, 68%)';
        errorIcon.style.display = 'block';
        response.innerHTML = 'Please provide a valid email';
        response.style.color = 'hsl(0, 93%, 68%)';
    }
   
}

submitButton.addEventListener('click', function(){
    var inputField = document.querySelector('#my-email').value;
    var passwordField = document.querySelector('#my-password').value;
    const user = {inputField, passwordField}
    ValidateEmail(user);
})