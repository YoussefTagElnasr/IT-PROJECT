document.getElementById('book-link').onclick = (e) => {
    e.preventDefault();
    document.getElementById('reservation-form').classList.add('visible');
};

document.getElementById('book-form').onsubmit = (e) => {
    e.preventDefault();
    document.getElementById('reservation-form').classList.remove('visible');
    document.getElementById('confirmation-msg').classList.add('visible');
};

document.getElementById('cancel-btn').onclick = () => {
    document.getElementById('reservation-form').classList.remove('visible');
};

document.getElementById('close-msg-btn').onclick = () => {
    document.getElementById('confirmation-msg').classList.remove('visible');
};