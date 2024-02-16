function randint() {
    document.getElementById("d").innerText(Math.random() * 100);
}

document.getElementById("d").addEventListener("click", randint());
