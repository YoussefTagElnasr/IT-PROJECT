function openPopup(event) {
    event.preventDefault(); 
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('registrationForm').addEventListener('submit', openPopup);
