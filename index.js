// Navigation functionality
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');

        pages.forEach(page => {
            page.classList.add('hidden');
        });

        document.getElementById(targetPage).classList.remove('hidden');
    });
});

// Signup Functionality data store local 
// document.getElementById('signup-btn').addEventListener('click', (e) => {
//     e.preventDefault()
//     const name = document.getElementById('signup-name').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     if (name && email && password) {
//         localStorage.setItem('user', JSON.stringify({ name, email, password }));
//         alert('Sign Up Successful! Redirecting to Login page...');

//         document.getElementById('signup').classList.add('hidden');
//         document.getElementById('login').classList.remove('hidden');
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// Login Functionality with local data base 
// function loginFunc(e) {
//     e.preventDefault()
//     console.log('login db js file')
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     const user = JSON.parse(localStorage.getItem('user'));

//     if (user && user.email === email && user.password === password) {
//         alert(`Welcome back, ${user.name}!`);
//     } else {
//         alert('Invalid email or password. Please try again.');
//     }
// }
// document.getElementById('login-btn').addEventListener('click', loginFunc);
// console.log(name, email, password);

document.addEventListener("DOMContentLoaded", () => {
    // Scroll to SignUp
    document.querySelector('a[data-page="signup"]').addEventListener("click", (event) => {
        event.preventDefault();

        // Clear signup form fields
        document.getElementById("signup-name").value = "";
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";
        document.getElementById("signup-error").style.display = "none";

        // Scroll to signup section
        document.getElementById("signup").scrollIntoView({ behavior: "smooth" });
    });

    // Scroll to Login
    document.querySelector('a[data-page="login"]').addEventListener("click", (event) => {
        event.preventDefault();

        // Clear login form fields
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
        document.getElementById("login-error").style.display = "none";

        // Scroll to login section
        document.getElementById("login").scrollIntoView({ behavior: "smooth" });
    });
});
// // Handle Sign Up
// document.getElementById("signup-btn").addEventListener("click", (e) => {
//     e.preventDefault()
//     const name = document.getElementById("signup-name").value;
//     const email = document.getElementById("signup-email").value;
//     const password = document.getElementById("signup-password").value;

//     if (name && email && password) {
//         alert("Sign Up Successful!");

//         // Clear fields after sign-up
//         document.getElementById("signup-name").value = "";
//         document.getElementById("signup-email").value = "";
//         document.getElementById("signup-password").value = "";
//     } else {
//         document.getElementById("signup-error").style.display = "block";
//     }
// });

// Handle Login //
// document.getElementById("login-btn").addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log('clicked offline login')
//     const email = document.getElementById("login-email").value;
//     const password = document.getElementById("login-password").value;

//     if (email && password) {
//         alert("Login Successful!");

//         // Clear fields after login
//         document.getElementById("login-email").value = "";
//         document.getElementById("login-password").value = "";
//     } else {
//         document.getElementById("login-error").style.display = "block";
//     }
// });




let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = (e) => {
    e.preventDefault()
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = (e) => {
    e.preventDefault()
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-icon-btn').onclick = (e) => {
    e.preventDefault()
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = (e) => {
    e.preventDefault()
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});