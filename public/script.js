const btn = document.getElementById("b");
const div = document.getElementById("d");
btn.addEventListener('click', function(){
    div.textContent = Math.floor(Math.random() * 100 +1);
});