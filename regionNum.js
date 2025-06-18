

function regionCheck() {
    if (regionNum === 1) {
        setTimeout(() => {
            regionText.innerHTML = 'IONIA'
            capContainer.innerHTML = "Uma terra feita de espíritos, demônios e histórias. Erguida sobre montanhas, lâminas e sangue.";
            capContainer.style.width = '35vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/ionia.jpg)'
    }
    if (regionNum === 2) {
        setTimeout(() => {
            regionText.innerHTML = 'NOXUS'
            capContainer.innerHTML = "Um império conquistador e brutal. <br> Exílio aos indignos. <br> Morte aos fracos.";
            capContainer.style.width = '25vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/noxus.png)'
    }
    if (regionNum === 3) {
        setTimeout(() => {
            regionText.innerHTML = 'ÁGUAS DE SENTINA'
            capContainer.innerHTML = "Um paraíso para marujos e pescadores, onde mares e oceanos se encontram. <br> Vida longa à Nagakabouros";
            capContainer.style.width = '30vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/bilgewater.png)'
    }
    if (regionNum === 4) {
        setTimeout(() => {
            regionText.innerHTML = 'FRELJORD'
            capContainer.innerHTML = "Um continente glacial ao extremo norte. <br> Forjador de guerreiros <br> Lar de deuses";
            capContainer.style.width = '30vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/freljord.png)'
    }
    if (regionNum === 5) {
        setTimeout(() => {
            regionText.innerHTML = 'SHURIMA'
            capContainer.innerHTML = "Um antigo império com a benção do sol e com a maldição do vazio.";
            capContainer.style.width = '30vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/shurima.png)'
    }
    if (regionNum === 6) {
        setTimeout(() => {
            regionText.innerHTML = 'O VAZIO'
            capContainer.innerHTML = "O vazio não é um lugar ou algo. <br> O vazio é o oblívio, o nada, o fim. <br> O vazio consome, consome <br> e consome.";
            capContainer.style.width = '40vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/void.png)'
    }
    if (regionNum === 7) {
        setTimeout(() => {
            regionText.innerHTML = 'PILTOVER'
            capContainer.innerHTML = "A cidade do progresso, movida a ideias e horizontes.<br>Nem a luz do sol será capaz de ofuscar <br> o futuro de Piltover.";
            capContainer.style.width = '40vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/piltover.png)'
    }
    if (regionNum === 8) {
        setTimeout(() => {
            regionText.innerHTML = 'ZAUN'
            capContainer.innerHTML = "O submundo, movido a fumaça e angústia.<br>Nem a escuridão da noite será capaz de apagar <br> o passado de Zaun.";
            capContainer.style.width = '35vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/zaun.png)'
    }
    if (regionNum === 9) {
        setTimeout(() => {
            regionText.innerHTML = 'IXTAL'
            capContainer.innerHTML = "Uma das nações mais antigas, formada majoritariamente <br> por magos e criaturas que sobreviveram <br> aos piores eventos de Runeterra.";
            capContainer.style.width = '40vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/ixtal.png)'
    }
    if (regionNum === 10) {
        setTimeout(() => {
            regionText.innerHTML = 'DEMACIA'
            capContainer.innerHTML = "Um reino poderoso e imenso, a honra de Demacia <br> seguirá firme até que toda aberração mágica <br> esteja por trás das grades. ";
            capContainer.style.width = '40vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/demacia.png)'
    }
    if (regionNum === 11) {
        setTimeout(() => {
            regionText.innerHTML = 'TARGON'
            capContainer.innerHTML = "As histórias de escaladas do Monte Targon são dadas como mitos. <br> Desiluções de quem busca algo irreal. <br> Mas somente aqueles com um propósito, poderão ver <br> o verdadeiro topo do monte.";
            capContainer.style.width = '45vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/targon.png)'
    }
    if (regionNum === 12) {
        setTimeout(() => {
            regionText.innerHTML = 'BANDOPOLIS'
            capContainer.innerHTML = "A cidade de Bandópolis é um dos maiores mistérios de Runeterra. <br> Um lugar além do reino material, com portais maiores que continentes <br> e criaturas tão antigas quanto o tempo.";
            capContainer.style.width = '49vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/bandopolis.png)'
    }
    if (regionNum === 13) {
        setTimeout(() => {
            regionText.innerHTML = 'ILHAS DAS SOMBRAS'
            capContainer.innerHTML = "Após um cataclisma mágico quebrar as barreiras do material e espiritual, <br> toda vida das ilhas se foi e a névoa negra cobriu tudo e todos com o sombrio. <br> Agora, ela acorrenta as almas daqueles que se aproximam <br> e corrói os resquícios do que um dia já foi conhecido como <br> \"Ilhas das Bençãos\"";
            capContainer.style.width = '55vw'
            capContainer.style.height = '30vh'
        }, 400);
        regionBackground.style.backgroundImage = 'url(img/shadowisles.png)'
    }
}

setInterval(regionCheck, 10)

