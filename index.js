! function () {



    // Selector

    // Add, Toggle, Remove Classes
    const addClass = (el, ...classes) => el.classList.add(...classes);
    const removeClass = (el, ...classes) => el.classList.remove(...classes);
    const toggleClass = (el, className) => el.classList.toggle(className);


    // Variables
    const section = document.querySelector('section');
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelector('.modal-btn');
    const modalCloseBtn = document.querySelector('.close-btn');


    // Function: Hide Modal
    const hideModal = () => {
        section.style.filter = 'blur(0px)';
        const hide = {
            transition: '.35s',
            transform: 'translate(-50%, -50%) scale(0)'
        }
        Object.assign(modal.style, hide);
        setTimeout(() => {
            const reset = {
                transition: 'none',
                top: 0,
                transform: 'translate(-50%, -100%) scale(1)'
            }
            Object.assign(modal.style, reset);
        }, 350);
    }

    modalCloseBtn.addEventListener('click',hideModal);
    window.addEventListener('keydown',(e) => {
        if(e.code === "Escape") {
            hideModal();
        }
    });

    section.addEventListener('click', function (e) {
        if (e.target.className == 'modal-btn') {
            const show = {
                transition: '1s',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }
            Object.assign(modal.style, show);
            section.style.filter = 'blur(4px)';
        } else {
            hideModal();
        }

    });

}();