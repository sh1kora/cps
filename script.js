const MenuItem = document.querySelectorAll('.page__menu-item')

MenuItem.forEach(function (item) {
    item.addEventListener('click', function () {
        MenuItem.forEach(function (el){
            el.classList.remove('page__menu-item--active')
        })
        item.classList.add('page__menu-item--active')
    })
})
