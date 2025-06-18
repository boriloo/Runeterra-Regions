window.onload = function () {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, 20);
}

const navbar = document.querySelector('.navbar');
const loginContainer = document.querySelector('.login-container');
const loginText = document.querySelector('.login-text');
const account = document.querySelector('.account');
const loginWindow = document.querySelector('.login-window');
const logo = document.querySelector('.logo');
const closeWindow = document.querySelector('.close-window');
const createText = document.querySelector('.create-text');
const nickText = document.querySelector('.nick-text');
const nickInput = document.querySelector('.nick-input');
const emailText = document.querySelector('.email-text');
const emailInput = document.querySelector('.email-input');
const passwordText = document.querySelector('.password-text');
const passwordInput = document.querySelector('.password-input');
const submit = document.querySelector('.submit');
const loginMode = document.querySelector('.login-mode');
const initialText = document.querySelector('.initial-text');
const runeterraText = document.querySelector('.runeterra-text');
const circle = document.querySelector('.circle');
const background = document.querySelector('.background');
const mainGradient = document.querySelector('.main-gradient');
const regionText = document.querySelector('.region-text');
const regionCap = document.querySelector('.region-cap');
const capContainer = document.querySelector('.cap-container');
const regionBackground = document.querySelector('.region-background');
const regionGradient = document.querySelector('.region-gradient');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let angulo = 0;
let velocidade = 0.3;
let clicked = false
let clickCD = false
let circleHover = false




function rotateCircle() {
    scrollar = window.scrollY
    angulo += velocidade;
    circle.style.transform = `rotate(${angulo}deg)`;

    if (clicked) {
        const rotateXValue = -23 - scrollar * 0.09;
        const rotateXValue2 = 2 + scrollar * 0.08;
        background.style.transform = `perspective(40vw) rotateX(${rotateXValue}deg) translateZ(-80px)`;
        initialText.style.transform = `perspective(40vw) rotateX(${rotateXValue2}deg) translateZ(-80px)`;
        initialText.style.marginTop = `${42 - scrollar * 0.01}vh`
    } else {
        initialText.style.transform = '';
        initialText.style.marginTop = '';
    }

    requestAnimationFrame(rotateCircle);

}

rotateCircle();

function updateBackgroundPosition(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    if (!clicked && !clickCD) {
        background.style.transform = `translate(-${x * 2}vi, -${y * 2}vi)`;
    }
}

document.body.addEventListener('mousemove', updateBackgroundPosition);


setTimeout(() => {
    initialText.style.animation = 'initial-text-Anim 1.4s forwards'
}, 1000);

setTimeout(() => {
    initialText.style.zIndex = '10'
}, 2300);

setTimeout(() => {
    circle.style.opacity = '1'
}, 2300);

function runeterraMouseEnter() {
    circleHover = true
    background.style.transition = '0.6s'
    initialText.style.marginTop = '41.5vh'
    runeterraText.style.fontSize = '12vw'
    mainGradient.style.opacity = '0.7'
    circle.style.width = '20vw'
    circle.style.height = '20vw'
    if (telacheia) {
        circle.style.marginTop = '32.5vh'
    } else {
        circle.style.marginTop = '31vh'
    }
    background.style.filter = 'blur(0.3vw)'
    circle.style.filter = 'blur(0.2vw)'
    velocidade = 14
}

runeterraText.addEventListener('mouseenter', runeterraMouseEnter)

function runeterraMouseLeave() {
    circleHover = false
    background.style.transition = '0s'
    initialText.style.marginTop = ''
    runeterraText.style.fontSize = ''
    runeterraText.style.transform = ''
    background.style.filter = ''
    mainGradient.style.opacity = ''
    circle.style.width = ''
    circle.style.height = ''
    if (telacheia) {
        circle.style.marginTop = '14vh'
    } else {
        circle.style.marginTop = ''
    }
    circle.style.filter = ''
    velocidade = 0.3
}

runeterraText.addEventListener('mouseleave', runeterraMouseLeave)

runeterraText.addEventListener('click', function () {
    if (!clicked && !clickCD && window.innerWidth > 768) {
        loginContainer.removeEventListener('click', accountClick)
        account.removeEventListener('click', accountClick)
        runeterraText.removeEventListener('mouseenter', runeterraMouseEnter)
        runeterraText.removeEventListener('mouseleave', runeterraMouseLeave)
        clicked = true
        clickCD = true
        document.body.style.height = '210vh'
        navbar.style.opacity = '0'
        runeterraText.style.marginTop = '-13vh'
        runeterraText.style.fontSize = '15vw'
        mainGradient.style.opacity = ''
        background.style.width = '75vw'
        background.style.height = '75vh'
        background.style.marginLeft = '13vw'
        background.style.marginTop = '15vh'
        background.style.filter = 'blur(0.4vw)'
        background.style.backgroundSize = '100% 100%'
        circle.style.opacity = '0'
        regionText.style.marginTop = '130vh'
        regionCap.style.marginTop = '145vh'
        leftArrow.style.marginTop = '165vh'
        rightArrow.style.marginTop = '165vh'
        regionBackground.style.marginTop = '110vh'
        regionGradient.style.marginTop = '110vh'
        background.style.transition = '0.6s'
        setTimeout(() => {
            document.body.style.overflowY = 'scroll'
            clickCD = false
            regionBackground.style.transition = '0.8s'
            runeterraText.style.transition = '0s';
            initialText.style.transition = '0s'
            background.style.transition = '0s'
        }, 600);
    }


    else if (clicked && !clickCD) {
        document.body.style.overflowY = 'hidden'
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        loginContainer.addEventListener('click', accountClick)
        account.addEventListener('click', accountClick)
        runeterraText.addEventListener('mouseenter', runeterraMouseEnter)
        runeterraText.addEventListener('mouseleave', runeterraMouseLeave)
        clicked = false
        clickCD = true
        document.body.style.height = ''
        runeterraText.style.marginTop = ''
        runeterraText.style.fontSize = ''
        mainGradient.style.opacity = ''
        background.style.width = ''
        background.style.height = ''
        background.style.marginLeft = ''
        background.style.marginTop = ''
        background.style.filter = ''
        background.style.backgroundSize = ''
        circle.style.opacity = '1'
        regionText.style.marginTop = ''
        regionCap.style.marginTop = ''
        leftArrow.style.marginTop = ''
        rightArrow.style.marginTop = ''
        regionBackground.style.marginTop = ''
        regionGradient.style.marginTop = ''
        regionBackground.style.transition = ''
        runeterraText.style.transition = ''
        initialText.style.transition = ''
        background.style.transition = '0.6s'
        background.style.transform = ''
        setTimeout(() => {
            navbar.style.opacity = ''
            background.style.transition = '0.3s'
            clickCD = false
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 600);
        setTimeout(() => {
            background.style.transition = '0.2s'
        }, 800);
        setTimeout(() => {
            background.style.transition = '0.1s'
        }, 1000);
        setTimeout(() => {
            background.style.transition = '0s'
        }, 1200);

    }

}, 1100);

