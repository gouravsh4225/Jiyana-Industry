function openHeaderMenu(element) { 
    const menuList =document.getElementById('mobile-Menu');
    if(menuList.classList.contains('height-full')) {
        menuList.classList.remove('height-full')
    } else {
        menuList.classList.add('height-full');
    }
}