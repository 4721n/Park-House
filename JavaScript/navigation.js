const toggleButton = document.getElementsByClassName('burger')[0];
const navbarLinks = document.getElementsByClassName('navigation-links')[0];
const x = document.getElementsByClassName('exit-nav')[0];
const officeLink = document.getElementsByClassName('offices-link')[0];
const officeNav = document.getElementsByClassName('offices-nav')[0];



toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

x.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')){
        navbarLinks.classList.toggle('active')
    }
});


officeLink.addEventListener('click', () => {
    officeNav.classList.toggle('active')

    if(officeNav.classList.contains('active')){
        officeLink.classList.toggle('active');
        document.getElementById('home-link').classList.toggle('active');
        document.getElementById('location-link').classList.toggle('active');
        document.getElementById('connectivity-link').classList.toggle('active');
        document.getElementById('facilities-link').classList.toggle('active');
        document.getElementById('contact-link').classList.toggle('active');
        document.getElementById('pricing-link').classList.toggle('active');

    } else {
        officeLink.classList.toggle('active');
        document.getElementById('home-link').classList.toggle('active');
        document.getElementById('location-link').classList.toggle('active');
        document.getElementById('connectivity-link').classList.toggle('active');
        document.getElementById('facilities-link').classList.toggle('active');
        document.getElementById('contact-link').classList.toggle('active');
        document.getElementById('pricing-link').classList.toggle('active');
    }
});

