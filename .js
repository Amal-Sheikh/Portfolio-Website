console.log("hello");

//scroll sections active link
// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// When the window is scrolled
window.onscroll = () => {
    // Loop through each section on the page
    sections.forEach(sec => {
        // Get the current vertical scroll position of the window
        let top = window.scrollY;
        // Calculate the vertical offset of the current section from the top of the page,
         //adjusted by 150 pixels
        let offset = sec.offsetTop - 150;
        // Get the height of the current section
        let height = sec.offsetHeight;
        // Get the id attribute of the current section
        let id = sec.getAttribute('id');
        // Check if the current scroll position is within the range of the current section
        if (top >= offset && top < offset + height) {
            // Loop through each navigation link
            navLinks.forEach(link => {
                // Remove the 'active' class from all navigation links
                link.classList.remove('active');
            });
            // Add the 'active' class to the navigation link corresponding to the current section
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
    //sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon and navbar when click navbar link (scroll).
    menuIcon.classList.remove('#cross-icon');
    navbar.classList.remove('active');
};

// toggle menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');




menuIcon.onclick = () =>{
    menuIcon.classList.toggle('cross-icon');
    navbar.classList.toggle('active');

}
ScrollReveal({
    reset:true,
    distance: '80px',
    duration :1500,
    delay:100
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{
    origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
    ScrollReveal().reveal('home-content p,about-content'), {origin: 'right'}

    // multiple-text
    const typed = new typed('.multiple-text',{
        strings:['Trading','youtubing', ' Microsoft-office'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop:true
    });


































