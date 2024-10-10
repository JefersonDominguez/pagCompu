document.getElementById('circle1').addEventListener('click', function() {
    showMessage('Color Amarillo');
});

document.getElementById('circle2').addEventListener('click', function() {
    showMessage('Color Fucsia');
});

document.getElementById('circle3').addEventListener('click', function() {
    showMessage('Color Negro');
});

function showMessage(message) {
    document.getElementById('message').innerText = message;
}
