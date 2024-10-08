const container = document.querySelector(".container")

for (let i = 1; i <= 64; i++) {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = i;
    container.appendChild(div);
}