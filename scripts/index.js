function dropDown() {
    const menuBtn = document.getElementById('menu-btn');
    const dropDownList = document.getElementById('drop-down');
    const menuList = document.getElementById('menu-list');
    if(menuBtn.checked === true) {
        dropDownList.style.height = 'auto';
        menuList.style.visibility = 'visible';
        menuList.style.opacity = '1';
    }
    else {
        dropDownList.style.height = '0';
        menuList.style.visibility = 'hidden';
        menuList.style.opacity = '0';
    }
}

function dropDownSelect() {
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.checked = false;
    const dropDownList = document.getElementById('drop-down');
    dropDownList.style.height = '0';
    const menuList = document.getElementById('menu-list');
    menuList.style.visibility = 'hidden';
    menuList.style.opacity = '0';
}