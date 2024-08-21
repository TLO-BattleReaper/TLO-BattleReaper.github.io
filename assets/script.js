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

    // Ottiene la data e l'orario formattati
    let timeString = now.toLocaleString('it-IT', options);

    // Dividi la stringa in componenti per capitalizzare solo il giorno e il mese
    let parts = timeString.split(' ');
    if (parts.length >= 4) {
        // Capitalizza solo il giorno della settimana e il mese
        parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
        parts[2] = parts[2].charAt(0).toUpperCase() + parts[2].slice(1).toLowerCase();
    }
    
    // Ricompone la stringa
    timeString = parts.join(' ');

    // Aggiorna il contenuto dell'orologio
    document.getElementById('clock').textContent = timeString;
}

window.onload = function() {
    // Mostra "Loading..." mentre l'orologio viene impostato
    const loading = document.getElementById('loading');
    const clock = document.getElementById('clock');

    // Imposta l'orologio inizialmente
    updateClock();

    // Dopo 100ms, nascondi "Loading..." e mostra l'orologio
    setTimeout(() => {
        loading.style.display = 'none';
        clock.style.display = 'block';
    }, 100);

    // Aggiorna l'orologio ogni secondo
    setInterval(updateClock, 1000);
};
