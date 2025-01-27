const menuBtn = document.getElementById('menu-btn');

const mblmenu = document.getElementById('mbl-menu');

menuBtn.addEventListener('click', () => {
    mblmenu.classList.toggle('hidden')
});

const menulinks = mblmenu.querySelectorAll('a')
menulinks.forEach(link => {
    link.addEventListener('click', () => {
        mblmenu.classList.toggle('hidden');
    })
})