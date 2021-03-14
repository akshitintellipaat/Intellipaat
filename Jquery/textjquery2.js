const load = document.querySelector('.sk-folding-cube');
const whole = document.querySelector('.whole');

function init(){
    setTimeout(() => {
        load.style.opacity = 0;
        load.style.display = 'none';

        whole.style.display = 'inline';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}

init();