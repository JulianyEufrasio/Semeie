// modal.js

document.addEventListener('DOMContentLoaded', function () {
    // exibe  modal ib
    function exibirModalInfoBanca() {
        var modalInfoBanca = document.getElementById('modalInfoBanca');
        modalInfoBanca.style.display = 'flex';
    }
    exibirModalInfoBanca();
});


// verificar o modal
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('btnIB').addEventListener('click', function (e) {
//         e.preventDefault();
//         ibForm();
//     });

//     // voltar para ib
//     document.getElementById('ed-backToIB').addEventListener('click', function (e) {
//         e.preventDefault();

//         var modalEnderecos = document.getElementById('modalEnderecos');
//         modalEnderecos.style.display = 'none';

//         var modalInfoBanca = document.getElementById('modalInfoBanca');
//         modalInfoBanca.style.display = 'flex';

//         // mantem as infos salvas nos inputs
//         document.getElementById('NomeBanca').value = sessionStorage.getItem('NomeBanca');
//         document.getElementById('numCNPJ').value = sessionStorage.getItem('numCNPJ');
//         document.getElementById('fazEntrega').value = sessionStorage.getItem('fazEntrega');
//         document.getElementById('valorFrete').value = sessionStorage.getItem('valorFrete');
//         document.getElementById('chavePIX').value = sessionStorage.getItem('chavePIX');
//         document.getElementById('bancaDesc').value = sessionStorage.getItem('bancaDesc');
//     });

//     // formulario ib
//     function ibForm() {
//         // armazenando os dados inseridos para mostrar caso volte ao modal de ib
//         sessionStorage.setItem('NomeBanca', document.getElementById('NomeBanca').value);
//         sessionStorage.setItem('numCNPJ', document.getElementById('numCNPJ').value);
//         sessionStorage.setItem('fazEntrega', document.getElementById('fazEntrega').value);
//         sessionStorage.setItem('valorFrete', document.getElementById('valorFrete').value);
//         sessionStorage.setItem('chavePIX', document.getElementById('chavePIX').value);
//         sessionStorage.setItem('bancaDesc', document.getElementById('bancaDesc').value);

//         // modal de endereco
//         var modalEnderecos = document.getElementById('modalEnderecos');
//         modalEnderecos.style.display = 'flex';
        
//         var modalInfoBanca = document.getElementById('modalInfoBanca');
//         modalInfoBanca.style.display = 'none';
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnIB').addEventListener('click', function (e) {
        e.preventDefault();
        ibForm();
    });

    document.getElementById('ed-backToIB').addEventListener('click', function (e) {
        e.preventDefault();

        var modalEnderecos = document.getElementById('modalEnderecos');
        modalEnderecos.style.display = 'none';

        var modalInfoBanca = document.getElementById('modalInfoBanca');
        modalInfoBanca.style.display = 'flex';

        document.getElementById('NomeBanca').value = sessionStorage.getItem('NomeBanca');
        document.getElementById('numCNPJ').value = sessionStorage.getItem('numCNPJ');
        document.getElementById('fazEntrega').value = sessionStorage.getItem('fazEntrega');
        document.getElementById('valorFrete').value = sessionStorage.getItem('valorFrete');
        document.getElementById('chavePIX').value = sessionStorage.getItem('chavePIX');
        document.getElementById('bancaDesc').value = sessionStorage.getItem('bancaDesc');
    });

    document.getElementById('btnFinalizarCadastro').addEventListener('click', function (e) {
        e.preventDefault();
        confirmarFinalizarCadastro();
    });

    function ibForm() {
        // salva os dados do ib nos inputs
        sessionStorage.setItem('NomeBanca', document.getElementById('NomeBanca').value);
        sessionStorage.setItem('numCNPJ', document.getElementById('numCNPJ').value);
        sessionStorage.setItem('fazEntrega', document.getElementById('fazEntrega').value);
        sessionStorage.setItem('valorFrete', document.getElementById('valorFrete').value);
        sessionStorage.setItem('chavePIX', document.getElementById('chavePIX').value);
        sessionStorage.setItem('bancaDesc', document.getElementById('bancaDesc').value);

        var modalEnderecos = document.getElementById('modalEnderecos');
        modalEnderecos.style.display = 'flex';

        var modalInfoBanca = document.getElementById('modalInfoBanca');
        modalInfoBanca.style.display = 'none';
    }

    function confirmarFinalizarCadastro() {
        // alerta de cnfirmação
        var confirmacao = confirm('Deseja realmente finalizar o cadastro?');

        if (confirmacao) {
            // isto é apenas uma simulação, deve ser feito uma logiga no back etc
            alert('Cadastro finalizado com sucesso!');

            var modalEnderecos = document.getElementById('modalEnderecos');
            modalEnderecos.style.display = 'none';

            var modalInfoBanca = document.getElementById('modalInfoBanca');
            modalInfoBanca.style.display = 'none';

            sessionStorage.clear();
        } else {
            
        }
    }
});
