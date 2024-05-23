// //vnavbar 
// const btnMenu = document.getElementById('btn-menu');
// const navbar = document.querySelector('.navbar');
// const navLinks = document.querySelectorAll('.navbar a');

// btnMenu.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });

// document.addEventListener('click', (event) => {
//     if (!event.target.closest('.navbar') && !event.target.closest('#btn-menu')) {
//         navbar.classList.remove('active');
//     }
// });

// // dropdown cart
// var dropdown = document.getElementById("myDropdown");

// function toggleDropdown(event) {
//     event.stopPropagation();
//     dropdown.classList.toggle("show");
// }

// document.querySelector(".cart-icon").addEventListener("click", toggleDropdown);

// document.addEventListener("click", function(event) {
//     if (!event.target.closest(".cart-icon") && !event.target.closest("#myDropdown")) {
//         dropdown.classList.remove("show");
//     }
// });

// //fav icon
// var heartIcon1 = document.getElementById("heart-icon-1");
// var heartIcon2 = document.getElementById("heart-icon-2");
// var heartIcon3 = document.getElementById("heart-icon-3");

// function toggleHeartIcon(heartIcon) {
//     if (heartIcon.classList.contains("bxs-heart")) {
//         heartIcon.classList.remove("bxs-heart");
//         heartIcon.classList.add("bxs-heart-fill");
//     } else {
//         heartIcon.classList.remove("bxs-heart-fill");
//         heartIcon.classList.add("bxs-heart");
//     }
// }

// heartIcon1.addEventListener("click", function() {
//     toggleHeartIcon(heartIcon1);
// });

// heartIcon2.addEventListener("click", function() {
//     toggleHeartIcon(heartIcon2);
// });

// heartIcon3.addEventListener("click", function() {
//     toggleHeartIcon(heartIcon3);
// });


// * navbar 
const btnMenu = document.getElementById('btn-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar') && !event.target.closest('#btn-menu')) {
        navbar.classList.remove('active');
    }
});

// ********
// * dropdown cart
var dropdown = document.getElementById("myDropdown");
var cartCloseButton = document.getElementById("cartClose");

// abre o dropdwon
function toggleDropdown(event) {
    event.stopPropagation();
    dropdown.classList.toggle("show");
}

document.querySelector(".cart-icon").addEventListener("click", toggleDropdown);
// fecha se clicar fora
// document.addEventListener("click", function(event) {
//     if (!event.target.closest(".cart-icon") && !event.target.closest("#myDropdown")) {
//         dropdown.classList.remove("show");
//     }
// });

// fecha o dropdown
cartCloseButton.addEventListener("click", function(event) {
    event.stopPropagation();
    dropdown.classList.remove("show");
});

window.addEventListener("scroll", function() {
    dropdown.classList.remove("show");
});

// não deixa fechar se clicar dentro
dropdown.addEventListener("click", function(event) {
    event.stopPropagation();
});

// ********
// * exluir item do carrinho
var deleteButtons = document.querySelectorAll("#btnDelItem");

deleteButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        var cartItem = event.target.closest(".order-item");
        if (cartItem) {
            cartItem.remove();
            updateCartAndSellerInfo();
        }
    });
});

function updateCartAndSellerInfo() {
    var cartContent = document.querySelector(".cart-order");
    var cartItems = document.querySelectorAll(".order-item");

    if (cartItems.length === 0) {
        cartContent.style.display = "none";
    } else {
        cartContent.style.display = "block";
    }
}


/////////////////////

  