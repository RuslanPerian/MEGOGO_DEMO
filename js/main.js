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

let adaptive = () => {
    let h = window.innerHeight,
        w = window.innerWidth;

    if (h > 2.88*w){
        $('.gift .offer').css('padding-top', 'calc(var(--vh, 1vh) * 7.8)');
    }
    else if (h > 2.29*w){
        $('.gift .offer').css('padding-top', 'calc(var(--vh, 1vh) * 10)');
    }
    else{
        $('.gift .offer').css('padding-top', 'calc(var(--vh, 1vh) * 13.8)');
    }

    if (h > 2.74*w){
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 1.34)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 1.34)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','100%');
    }
    else if (h > 2.73*w){
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 3)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 3)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','100%');
    }
    else if (h > 2.71*w){
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 4)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 5.34)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','100%');
    }
    else if (h > 2.25*w){
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 6)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 10)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','100%');
    }
    else if (h > 2.13*w){
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 6)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 16.34)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','100%');
    }
    else if (h > 2.02*w){
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 6)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 16.34)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','95%');
    }
    else if (h > 1.9*w){
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 6)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 16.34)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','90%');
    }
    else if (h > 1.76*w){
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 6)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 16.34)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','85%');
    }
    else {
        $('.optimal .offer').css('margin-bottom', 'calc(var(--vh, 1vh) * 6)');
        $('.optimal .offer').css('margin-top', 'calc(var(--vh, 1vh) * 16.34)');
        $('.offer__title, .offer__text, .offer__table, .try__title, .try__text, .try__btn-container, .try__info, .offer__btn-container, .optimal__title').css('width','80%');
    }
}

adaptive();

window.addEventListener('resize', () => {
    adaptive();
});
