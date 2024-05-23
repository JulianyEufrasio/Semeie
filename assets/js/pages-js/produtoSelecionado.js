/* abrir miniatura da img */

var imgsArr = [];
var imgAtual = 0;

function openImg(imagem) {
    var imgView = document.getElementById('imgView');
    var ampliContent = document.getElementById('imgViewContent');
    var overlay = document.getElementById('overlay');
    
    imgsArr = Array.from(document.querySelectorAll(".item-extra-pic img"));
    imgAtual = imgsArr.indexOf(imagem);

    atualizeImg();
    
    imgView.style.display = 'block';
    overlay.style.display = 'block';
}

function closeImg() {
    var imgView = document.getElementById('imgView');
    var overlay = document.getElementById('overlay');
    
    imgView.style.display = 'none';
    overlay.style.display = 'none';
}

function switchImg(n) {
    imgAtual += n;
    if (imgAtual < 0) {
        imgAtual = imgsArr.length - 1;
    } else if (imgAtual >= imgsArr.length) {
        imgAtual = 0;
    }
    atualizeImg();
}

function atualizeImg() {
    var ampliContent = document.getElementById('imgViewContent');
    ampliContent.src = imgsArr[imgAtual].src;
}


/* atualizar qtd e preço ---- ilustrativo */
// const numQtdElement = document.getElementById('numQtd');
//         const itemqtdMenosButton = document.getElementById('itemqtdMenos');
//         const itemqtdMaisButton = document.getElementById('itemqtdMais');
//         const itemPrecoElement = document.getElementById('itemPreco');

//         // puxar do banco, isto é meramente ilustrativo
//         const precoUnitario = 4.58;
//         let quantidade = 1;

//         function atualizarQuantidadeEPreco() {
//             numQtdElement.textContent = quantidade;
//             const total = quantidade * precoUnitario;
//             itemPrecoElement.querySelector('span').textContent = `R$ ${total.toFixed(2)}`;
//         }

//         itemqtdMaisButton.addEventListener('click', function() {
//             quantidade++;
//             atualizarQuantidadeEPreco();
//         });

//         itemqtdMenosButton.addEventListener('click', function() {
//             if (quantidade > 1) {
//                 quantidade--;
//                 atualizarQuantidadeEPreco();
//             }
//         });

// atualizarQuantidadeEPreco();