let h3 = document.getElementById('h3')
let vez = document.getElementById('vez')
let container = document.getElementById('centerFinal')
let contadorEmpate = 0;

let img = document.getElementById('img')

let input1 = document.getElementById('play1')
let input2 = document.getElementById('play2')

let arrayColuna0 = []
let arrayColuna1 = []
let arrayColuna2 = []
let arrayColuna3 = []
let arrayColuna4 = []
let arrayColuna5 = []
let arrayColuna6 = []

let colunaBaixo0 = 5;
let colunaBaixo1 = 5;
let colunaBaixo2 = 5;
let colunaBaixo3 = 5;
let colunaBaixo4 = 5;
let colunaBaixo5 = 5;
let colunaBaixo6 = 5;

let corDisco = 'discoVermelho'
let controle = true;

const tab = [
    ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    ['N', 'N', 'N', 'N', 'N', 'N', 'N']
];

const criaTabela = () => {
    let tabela = document.createElement('table');
    tabela.classList.add('tabela');
    tabela.id = 'table';
    for (let i = 0; i < 6; i++) {
        let linha = document.createElement('tr');
        linha.classList.add('linha');

        for (let j = 0; j < 7; j++) {
            let coluna = document.createElement('td');
            coluna.classList.add('coluna');
            coluna.id = `${i}-${j}`;

            if (j == 0) {
                arrayColuna0.push(coluna)
            }
            if (j == 1) {
                arrayColuna1.push(coluna)
            }
            if (j == 2) {
                arrayColuna2.push(coluna)
            }
            if (j == 3) {
                arrayColuna3.push(coluna)
            }
            if (j == 4) {
                arrayColuna4.push(coluna)
            }
            if (j == 5) {
                arrayColuna5.push(coluna)
            }
            if (j == 6) {
                arrayColuna6.push(coluna)
            }

            const verificaEmpate = () => {
                let c = 0;
                for (let a = 0; a < 6; a++) {
                    o = tab[a].includes("N");
                    if (!o) {
                        c++;
                        console.log(c);
                    }
                    if (c == 6) {
                        window.location = 'pages/empate.html';
                    }
                }
            }

            coluna.addEventListener('click', () => {
                if (coluna.childElementCount === 0) {
                    if (j == 0) {
                        if (controle) {
                            arrayColuna0[colunaBaixo0].classList.add(corDisco);
                            tab[colunaBaixo0][j] = tab[colunaBaixo0][j].replace('N', '1');

                            colunaBaixo0 = colunaBaixo0 - 1
                            controle = false
                            corDisco = 'discoPreto'

                        }
                        else {
                            arrayColuna0[colunaBaixo0].classList.add(corDisco);
                            tab[colunaBaixo0][j] = tab[colunaBaixo0][j].replace('N', '2');
                            colunaBaixo0 = colunaBaixo0 - 1
                            controle = true
                            corDisco = 'discoVermelho'

                        }

                    }
                    if (j == 1) {
                        if (controle) {
                            arrayColuna1[colunaBaixo1].classList.add(corDisco);
                            tab[colunaBaixo1][j] = tab[colunaBaixo1][j].replace('N', '1');
                            colunaBaixo1 = colunaBaixo1 - 1
                            controle = false
                            corDisco = 'discoPreto'
                        }
                        else {
                            arrayColuna1[colunaBaixo1].classList.add(corDisco);
                            tab[colunaBaixo1][j] = tab[colunaBaixo1][j].replace('N', '2');
                            colunaBaixo1 = colunaBaixo1 - 1
                            controle = true
                            corDisco = 'discoVermelho'
                        }

                    }
                    if (j == 2) {
                        if (controle) {
                            arrayColuna2[colunaBaixo2].classList.add(corDisco);
                            tab[colunaBaixo2][j] = tab[colunaBaixo2][j].replace('N', '1');
                            colunaBaixo2 = colunaBaixo2 - 1
                            controle = false
                            corDisco = 'discoPreto'
                        }
                        else {
                            arrayColuna2[colunaBaixo2].classList.add(corDisco);
                            tab[colunaBaixo2][j] = tab[colunaBaixo2][j].replace('N', '2');
                            colunaBaixo2 = colunaBaixo2 - 1
                            controle = true
                            corDisco = 'discoVermelho'
                        }

                    }
                    if (j == 3) {
                        if (controle) {
                            arrayColuna3[colunaBaixo3].classList.add(corDisco);
                            tab[colunaBaixo3][j] = tab[colunaBaixo3][j].replace('N', '1');
                            colunaBaixo3 = colunaBaixo3 - 1
                            controle = false
                            corDisco = 'discoPreto'
                        }
                        else {
                            arrayColuna3[colunaBaixo3].classList.add(corDisco);
                            tab[colunaBaixo3][j] = tab[colunaBaixo3][j].replace('N', '2');
                            colunaBaixo3 = colunaBaixo3 - 1
                            controle = true
                            corDisco = 'discoVermelho'
                        }

                    }
                    if (j == 4) {
                        if (controle) {
                            arrayColuna4[colunaBaixo4].classList.add(corDisco);
                            tab[colunaBaixo4][j] = tab[colunaBaixo4][j].replace('N', '1');
                            colunaBaixo4 = colunaBaixo4 - 1
                            controle = false
                            corDisco = 'discoPreto'
                        }
                        else {
                            arrayColuna4[colunaBaixo4].classList.add(corDisco);
                            tab[colunaBaixo4][j] = tab[colunaBaixo4][j].replace('N', '2');
                            colunaBaixo4 = colunaBaixo4 - 1
                            controle = true
                            corDisco = 'discoVermelho'
                        }

                    }
                    if (j == 5) {
                        if (controle) {
                            arrayColuna5[colunaBaixo5].classList.add(corDisco);
                            tab[colunaBaixo5][j] = tab[colunaBaixo5][j].replace('N', '1');
                            colunaBaixo5 = colunaBaixo5 - 1
                            controle = false
                            corDisco = 'discoPreto'
                        }
                        else {
                            arrayColuna5[colunaBaixo5].classList.add(corDisco);
                            tab[colunaBaixo5][j] = tab[colunaBaixo5][j].replace('N', '2');
                            colunaBaixo5 = colunaBaixo5 - 1
                            controle = true
                            corDisco = 'discoVermelho'
                        }

                    }
                    if (j == 6) {
                        if (controle) {
                            arrayColuna6[colunaBaixo6].classList.add(corDisco);
                            tab[colunaBaixo6][j] = tab[colunaBaixo6][j].replace('N', '1');
                            colunaBaixo6 = colunaBaixo6 - 1
                            controle = false
                            corDisco = 'discoPreto'
                        }
                        else {
                            arrayColuna6[colunaBaixo6].classList.add(corDisco);
                            tab[colunaBaixo6][j] = tab[colunaBaixo6][j].replace('N', '2');
                            colunaBaixo6 = colunaBaixo6 - 1
                            controle = true
                            corDisco = 'discoVermelho'
                        }

                    }
                    if (controle) {
                        vez.innerHTML = j1
                    }
                    else {
                        vez.innerHTML = j2
                    }
                }

                const anunciaVencedor = vencedor => {
                    let point = document.getElementById('point');
                    point.style.display = 'none';
                    ver.style.display = 'none';
                    h3.style.display = 'none';
                    table.style.display = 'none';
                    seen.style.display = 'none';

                    let imgVencedor = document.createElement('img');
                    if (vencedor === j1){
                        imgVencedor.src = 'imagens/pokeballRed60.png'
                    } 
                    if (vencedor === j2){
                        imgVencedor.src = 'imagens/pokeballBlue60.png'
                    }

                    let p = document.createElement('p');
                    p.innerText = `Parabéns ${vencedor}!! \n\n Você ganhou!!`;
                    p.classList.add('classVencedor');

                    let btnRestart = document.createElement('a');
                    btnRestart.innerText = 'Jogar Novamente!';
                    btnRestart.href = 'index.html';
                    btnRestart.id = 'startBtn';

                    document.body.appendChild(imgVencedor);
                    document.body.appendChild(p);
                    document.body.appendChild(btnRestart);
                }

                if (Vitoria(tab) == 'VitoriaPlay1') {
                    anunciaVencedor(j1);
                    
                }
                if (Vitoria(tab) == 'VitoriaPlay2') {
                    anunciaVencedor(j2);
                   
                }

                verificaEmpate();

            });
            linha.appendChild(coluna);
        }
        tabela.appendChild(linha);
    }
    container.appendChild(tabela);
}

let botao = document.getElementById('startBtn')
let ver = document.getElementById('ver')
let seen = document.getElementById('seen')

botao.addEventListener('click', function () {

    j1 = input1.value
    j2 = input2.value

    if(j1 == '' || j2 == ''){
        alert(' PREENCHA OS CAMPOS DE NOME! ')
    }
    else{
        vez.innerHTML = j1

        h3.style.display = 'block'
        criaTabela();
        botao.classList.remove('show');
        botao.classList.add('hide');
        ver.classList.add('show')
        seen.classList.add('show')
        let bora = document.getElementById('bora')
        bora.style.display = 'none'
        input1.style.display = 'none';
        input2.style.display = 'none';
        botao.style.display = 'none'
        img.style.display = 'none'

        let jogador1 = document.getElementById('jogador1')
        let jogador2 = document.getElementById('jogador2')
        let x = document.getElementById('x')

        jogador1.style.display = 'block'
        jogador2.style.display = 'block'
        x.style.display = 'block'

        jogador1.innerHTML = j1
        jogador2.innerHTML = j2
    }
    

})

let discoVermelho = document.getElementById('vermelho');
let discoPreto = document.getElementById('preto');