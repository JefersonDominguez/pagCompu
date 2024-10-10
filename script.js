document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll('.circle');
    const messageBox = document.getElementById('message-box');

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const message = circle.getAttribute('data-message');
            messageBox.textContent = message;
        });
    });

    // Carrusel básico
    let currentIndex = 0;
    const items = document.querySelectorAll('.itemCarrusel');
    const totalItems = items.length;

    setInterval(() => {
        items.forEach(item => item.style.transform = `translateX(-${currentIndex * 300}px)`);
        currentIndex = (currentIndex + 1) % totalItems;
    }, 3000);
});
