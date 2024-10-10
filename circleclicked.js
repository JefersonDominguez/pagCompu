document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        const message = `Has hecho clic en ${this.innerText}`;
        document.getElementById('message').innerText = message;
    });
});