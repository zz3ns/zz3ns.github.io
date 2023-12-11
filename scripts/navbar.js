// function toggleNavMobile() {
//     var navbarDropdown = document.getElementById('navbar-dropdown');

//     navbarDropdown.css('display', 'block');
// };

$(document).ready(function () {
    $('.navbar-mobile').on('click', function () {
        $('.navbar-dropdown').toggleClass('active-dropdown');
    });
});