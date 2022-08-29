const showBtn = (btnClass, showItemClass, isSection) => {
    if (isSection === true){
        const btns = document.querySelectorAll(`.${btnClass}`);
        const item = document.querySelector(`.${showItemClass}`);

        for (const btn of btns) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.toggle('show_on');
                item.classList.toggle('show_off');
                item.classList.toggle('section');
                btns[0].classList.toggle('hidden');
                btns[0].classList.toggle('visible');
            });
        }
    }
    else {
        const btn = document.querySelector(`.${btnClass}`);
        const item = document.querySelector(`.${showItemClass}`);

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('hidden');
            item.classList.toggle('visible');
        });
    }
}

showBtn('header__nav-btn','header__nav', false);
showBtn('header__scroll-btn','header div:nth-child(2)', true);

let h = window.innerHeight,
    w = window.innerWidth;

if (h > 1.78*w){
    $('.offer__title, .offer__text, .offer__table').css('width','95%');
    $('.optimal .offer, .gift .offer').css('margin-top', 'calc(var(--vh, 1vh) * 10)');
}

window.addEventListener('resize', () => {
    let h = window.innerHeight,
    w = window.innerWidth;

    if (h > 1.78*w){
        $('.offer__title, .offer__text, .offer__table').css('width','95%');
        $('.optimal .offer, .gift .offer').css('margin-top', 'calc(var(--vh, 1vh) * 10)');
    }
});
