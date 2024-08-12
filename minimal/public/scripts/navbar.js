function toggleNavbarMenu() {
    const mobileNavbar = document.getElementById('mobile-navbar')

    if (mobileNavbar.style.transform == "translateX(100%)") {
        mobileNavbar.style.transform = "translateX(0%)"
    }
    else {
        mobileNavbar.style.transform = "translateX(100%)"
    }
}