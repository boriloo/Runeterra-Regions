let entrar = false
let criar = true


logo.style.marginTop = '-50vh'
closeWindow.style.marginTop = '-50vh'
nickText.style.marginTop = '-50vh'
nickInput.style.marginTop = '-50vh'
emailText.style.marginTop = '-50vh'
emailInput.style.marginTop = '-50vh'
passwordText.style.marginTop = '-50vh'
passwordInput.style.marginTop = '-50vh'
submit.style.marginTop = '-50vh'
loginMode.style.martinTop = '-50vh'

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//

function accountMouseEnter() {
    account.style.opacity = '0.9'
    account.style.transform = 'scale(1.1)'
    navbar.style.backgroundColor = 'rgba(20, 21, 32, 0.6)'
    navbar.style.height = '7.5vh'
    loginContainer.style.fontSize = '1vw'
    loginContainer.style.marginLeft = '88vw'
}

loginContainer.addEventListener('mouseenter', accountMouseEnter)
account.addEventListener('mouseenter', accountMouseEnter)

function accountMouseLeave() {
    account.style.opacity = ''
    account.style.transform = ''
    navbar.style.backgroundColor = ''
    navbar.style.height = ''
    loginContainer.style.fontSize = ''
    loginContainer.style.marginLeft = ''
}

loginContainer.addEventListener('mouseleave', accountMouseLeave)
account.addEventListener('mouseleave', accountMouseLeave)

function accountClick() {
    if (criar && !clickCD){
    entrar = true
    criar = false
    clickCD = true
    loginWindow.style.zIndex = '11';
    setTimeout(() => {
        loginWindow.style.height = '39vw';
    }, 100)
    logo.style.marginTop = ''
    closeWindow.style.marginTop = ''
    createText.style.opacity = ''
    nickText.style.opacity = ''
    nickInput.style.opacity = ''
    nickText.style.marginTop = '-50vh'
    nickInput.style.marginTop = '-50vh'
    emailText.style.marginTop = ''
    emailInput.style.marginTop = ''
    passwordText.style.marginTop = ''
    passwordInput.style.marginTop = ''
    submit.style.marginTop = ''
    loginMode.style.marginTop = ''
    background.style.transition = '2s';
    background.style.filter = 'blur(0.4vw)';
    mainGradient.style.opacity = '0.7';
    initialText.style.filter = 'blur(0.4vw)'
    initialText.style.fontSize = '7vw'
    circle.style.filter = 'blur(0.4vw)'
    velocidade = 0.1
    runeterraText.removeEventListener('mouseenter', runeterraMouseEnter)
    runeterraText.removeEventListener('mouseleave', runeterraMouseLeave)
    loginMode.style.opacity = ''
    submit.style.opacity = ''
    setTimeout(() => {
        closeWindow.style.opacity = '1'
        logo.style.opacity = '1'
    }, 500)
    setTimeout(() => {
        emailText.style.opacity = '1'
        loginMode.style.marginLeft = ''
        logo.style.opacity = '1'
        submit.value = 'ENTRAR'
        submit.style.opacity = '1'
        loginMode.innerHTML = 'Criar uma conta'
        loginMode.style.width = ''
        loginMode.addEventListener('click', modeClick)
    }, 600)
    setTimeout(() => {
        emailInput.style.opacity = '1'
    }, 700)
    setTimeout(() => {
        passwordText.style.opacity = '1'
    }, 800)
    setTimeout(() => {
        passwordInput.style.opacity = '1'
        loginMode.style.opacity = '1'
    }, 900)
    setTimeout(() => {
        submit.style.opacity = '1'
    }, 950)
    setTimeout(() => {
        loginMode.style.opacity = '1'
        clickCD = false
    }, 1000)
}
}

loginContainer.addEventListener('click', accountClick)
account.addEventListener('click', accountClick)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------//


function closeClick() {
    setTimeout(() => {
        loginWindow.style.height = '';
    }, 10)
    criar = true
    entrar = false
    createText.style.opacity = ''
    closeWindow.style.opacity = ''
    emailText.style.opacity = ''
    emailInput.style.opacity = ''
    passwordText.style.opacity = ''
    passwordInput.style.opacity = ''
    submit.style.opacity = ''
    logo.style.opacity = ''
    loginMode.style.opacity = ''
    setTimeout(() => {
        logo.style.marginTop = '-50vh'
        closeWindow.style.marginTop = '-50vh'
        emailText.style.marginTop = '-50vh'
        emailInput.style.marginTop = '-50vh'
        passwordText.style.marginTop = '-50vh'
        passwordInput.style.marginTop = '-50vh'
        submit.style.marginTop = '-50vh'
        loginMode.style.marginTop = '-50vh'
    }, 450)

    background.style.transition = '';
    background.style.filter = '';
    mainGradient.style.opacity = '';
    initialText.style.filter = ''
    initialText.style.fontSize = ''
    circle.style.filter = ''
    runeterraText.addEventListener('mouseenter', runeterraMouseEnter)
    runeterraText.addEventListener('mouseleave', runeterraMouseLeave)
    velocidade = 0.3
}

closeWindow.addEventListener('click', closeClick)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------//


function modeClick() {
    if (entrar && !clickCD) {
        clickCD = true
        criar = true
        entrar = false
        logo.style.opacity = '0'
        nickText.style.opacity = '1'
        nickInput.style.opacity = '1'
        nickText.style.marginTop = '11.8vw'
        nickInput.style.marginTop = '14vw'
        emailText.style.marginTop = '17.9vw'
        emailInput.style.marginTop = '20vw'
        passwordText.style.marginTop = '23.9vw'
        passwordInput.style.marginTop = '26vw'
        submit.style.opacity = ''
        submit.style.marginTop = '31.5vw'
        submit.style.transition = '0.4s'
        loginMode.style.opacity = ''
        loginMode.style.marginLeft = '19vw'
        setTimeout(() => {
            submit.value = 'CRIAR'
            submit.style.opacity = '1'
            loginMode.innerHTML = 'Entrar em uma conta'
            loginMode.style.width = '11vw'
            createText.style.opacity = '1'
            setTimeout(() => {
                loginMode.style.opacity = '1'
            }, 300)
        }, 600)
        setTimeout(() => {
            clickCD = false
        }, 1000)

    } else if (criar && !clickCD) {
        clickCD = true
        criar = false
        entrar = true
        createText.style.opacity = ''
        nickText.style.opacity = ''
        nickInput.style.opacity = ''
        nickText.style.marginTop = '-50vh'
        nickInput.style.marginTop = '-50vh'
        emailText.style.marginTop = ''
        emailInput.style.marginTop = ''
        passwordText.style.marginTop = ''
        passwordInput.style.marginTop = ''
        submit.style.opacity = ''
        submit.style.marginTop = '31.5vw'
        submit.style.transition = '0.4s'
        loginMode.style.opacity = ''
        setTimeout(() => {
            loginMode.style.marginLeft = ''
            logo.style.opacity = '1'
            submit.value = 'ENTRAR'
            submit.style.opacity = '1'
            loginMode.innerHTML = 'Criar uma conta'
            loginMode.style.width = ''
            setTimeout(() => {
                loginMode.style.opacity = '1'
            }, 300)
        }, 600)
        setTimeout(() => {
            clickCD = false
        }, 1000)
    }
}

