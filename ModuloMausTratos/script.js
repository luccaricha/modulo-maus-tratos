let currentFontSize = parseInt(localStorage.getItem('font-size')) || 100;

function updateFontSize() {
    document.documentElement.style.setProperty('--font-size-multiplier', currentFontSize / 100);
    document.getElementById('font-size-label').innerText = currentFontSize + '%';
    localStorage.setItem('font-size', currentFontSize);
}

function changeFontSize(delta) {
    currentFontSize = Math.min(Math.max(currentFontSize + delta, 75), 200);
    updateFontSize();
}

function resetFontSize() {
    currentFontSize = 100;
    updateFontSize();
}

// Inicializa no carregamento
updateFontSize();

