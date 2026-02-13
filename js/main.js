function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
    }, 200);
}

/* Console */
const input = document.getElementById("consoleInput");
const output = document.getElementById("consoleOutput");

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const text = input.value;
        typeOutput("You typed: " + text);
        input.value = "";
    }
});

function typeOutput(text) {
    output.innerHTML = "";
    let i = 0;
    let interval = setInterval(() => {
        output.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 30);
}
