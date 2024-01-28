let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {

            // Activate nav bar links
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    darkModeToggle.addEventListener('change', () => {
      body.classList.toggle('dark-mode', darkModeToggle.checked);
    });

    // Sticky header
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

    // Smooth scroll to top
let upArrow = document.querySelector('.footer-icontop a');
upArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

}

