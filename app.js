const outToggle = document.querySelector('.outDiv');
const inToggle = document.querySelector('.inDiv');

let cnt = 0;

inToggle.addEventListener('click', () => {
    cnt++;
    console.log(cnt);

    if (cnt % 2 !== 0) {
        inToggle.classList.add('ani');
        inToggle.classList.remove('back');
        document.querySelector('body').style.backgroundColor = '#c5e6c3';
    } else {
        inToggle.classList.add('back');
        inToggle.classList.remove('ani');
        document.querySelector('body').style.backgroundColor = '#84bee3';
    }
});
