let telacheia = false
let arrowClick = false
let regionNum = Math.floor(Math.random() * 13) + 1;

//Math.floor(Math.random() * 13) + 1;

function verificarTelaCheia() {
    if (telacheia && !circleHover) {
        circle.style.marginTop = '14vh'
    } else if (!telacheia && !circleHover) {
        circle.style.marginTop = '10.5vh'
    }
    if (window.innerWidth === screen.width && window.innerHeight === screen.height) {
        telacheia = true
    } else {
        telacheia = false
    }
}


setInterval(verificarTelaCheia, 100);


function nomeRegiao() {
    scrollar = window.pageYOffset

    if (clicked && arrowClick === false) {
        const alturaTela = window.innerHeight * 0.8;
        if (scrollar >= alturaTela) {
            regionText.style.opacity = '1'
            regionText.style.marginTop = '120vh'
            regionBackground.style.opacity = '1'
            setTimeout(() => {
                leftArrow.style.opacity = '1'
                leftArrow.style.marginTop = '165vh'
                rightArrow.style.opacity = '1'
                rightArrow.style.marginTop = '165vh'
                regionCap.style.opacity = '1'
                regionCap.style.marginTop = '147vh'
            }, 200);

        } else {
            leftArrow.style.opacity = ''
            leftArrow.style.marginTop = '175vh'
            rightArrow.style.opacity = ''
            rightArrow.style.marginTop = '175vh'
            regionText.style.opacity = ''
            regionText.style.marginTop = '130vh'
            regionCap.style.opacity = ''
            regionCap.style.marginTop = '152vh'
            regionBackground.style.opacity = ''
        }
    }
    requestAnimationFrame(nomeRegiao);
}

nomeRegiao();

rightArrow.addEventListener('click', function () {
    arrowClick = true

    setTimeout(() => {
        arrowClick = false
    }, 1500);

    regionBackground.style.filter = 'blur(2.5vw)'
    regionBackground.style.marginLeft = '-140vw'
    regionText.style.opacity = '0'

    setTimeout(() => {
        regionCap.style.opacity = '0'
        regionBackground.style.transition = '0s'
    }, 200);

    setTimeout(() => {
        regionBackground.style.marginLeft = '105vw'
        if (regionNum != 13) {
            regionNum += 1
        } else {
            regionNum = 1
        }
    }, 600);

    setTimeout(() => {
        regionBackground.style.transition = '0.8s'
        regionBackground.style.marginLeft = '0vw'
    }, 700);

    setTimeout(() => {
        regionBackground.style.filter = 'blur(0)'
    }, 950);

}, 1100);



leftArrow.addEventListener('click', function () {
    arrowClick = true

    setTimeout(() => {
        arrowClick = false
    }, 1500);

    regionBackground.style.filter = 'blur(2.5vw)'
    regionBackground.style.marginLeft = '140vw'
    regionText.style.opacity = '0'

    setTimeout(() => {
        regionCap.style.opacity = '0'
        regionBackground.style.transition = '0s'
    }, 200);

    setTimeout(() => {
        regionBackground.style.marginLeft = '-105vw'
        if (regionNum != 1) {
            regionNum -= 1
        } else {
            regionNum = 13
        }
    }, 600);

    setTimeout(() => {
        regionBackground.style.transition = '0.8s'
        regionBackground.style.marginLeft = '0vw'
    }, 700);

    setTimeout(() => {
        regionBackground.style.filter = 'blur(0)'
    }, 950);


}, 1100);