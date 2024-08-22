function updateClock() {
    const now = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    let timeString = now.toLocaleString('it-IT', options);

    let parts = timeString.split(' ');
    if (parts.length >= 4) {
        parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
        parts[2] = parts[2].charAt(0).toUpperCase() + parts[2].slice(1).toLowerCase();
    }

    timeString = parts.join(' ');
    document.getElementById('clock').textContent = timeString;
}

window.onload = function() {
    const loading = document.getElementById('loading');
    const clock = document.getElementById('clock');

    updateClock();
    setTimeout(() => {
        loading.style.display = 'none';
        clock.style.display = 'block';
    }, 100);

    setInterval(updateClock, 1000);

    // Aggiungi il comportamento di click ai pulsanti
    const buttons = document.querySelectorAll('.quiz-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('fatto')) {
                this.classList.remove('fatto');
                this.textContent = 'Non fatto';
            } else {
                this.classList.add('fatto');
                this.textContent = 'Fatto';
            }
            console.log(`${this.dataset.site}: ${this.textContent}`);  // Log per debug
        });
    });

    console.log("Script caricato e pronto");
};
