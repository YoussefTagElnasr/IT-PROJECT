document.querySelector('.book-btn').onclick = (e) => {
    e.preventDefault();
    document.querySelector('.form-bg').classList.add('visible');
};

document.querySelector('.book-form').onsubmit = (e) => {
    e.preventDefault();
    document.querySelector('.form-bg').classList.remove('visible');
    document.querySelector('.book-msg').classList.add('visible');
};

document.querySelector('.cancel-btn').onclick = (e) => {
    e.preventDefault();
    document.querySelector('.form-bg').classList.remove('visible');
};

document.querySelector('.book-msg button').onclick = () => {
    document.querySelector('.book-msg').classList.remove('visible');
};