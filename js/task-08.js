const formElement = document.querySelector('form.login-form');
    
    
    formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
     elements: { email, password }
    } = event.currentTarget;
    
        
    if (email.value === '' && password.value === '') {
        return alert('Заполните поля');     
    } if (email.value === '') {
       return alert('Заполните поле почты')
    }if (password.value === '') {
       return alert('Заполните поле пароля')
    }
    
    const userData = {
        email: email.value,
        password: password.value,
    }

    console.log(userData)

    formElement.reset();
});
