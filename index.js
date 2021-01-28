
// accordion
let btns = document.querySelectorAll('.acc-btn');
let newBtns = [...btns];

newBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let panel = btn.nextElementSibling;
        let filtered = newBtns.filter((items) => {
            return items != e.currentTarget;
        })

        filtered.forEach((n) => {
            if (n.classList.contains('visible')) {
                n.classList.remove('visible');
                n.firstElementChild.classList.replace('fa-minus', 'fa-plus');
                n.nextElementSibling.style.maxHeight = null;
            }
        })

        e.currentTarget.classList.toggle('visible');

        if (e.currentTarget.classList.contains('visible')) {
            e.currentTarget.firstElementChild.classList.replace('fa-plus', 'fa-minus');
            panel.style.maxHeight = panel.firstElementChild.clientHeight + "px";
        } else {
            e.currentTarget.firstElementChild.classList.replace('fa-minus', 'fa-plus');
            panel.style.maxHeight = null;
        }
    })
})