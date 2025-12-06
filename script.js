const toggle = document.getElementById("theme-toggle");

// Default theme = DARK
if (!localStorage.getItem("theme")) {
    document.body.classList.add("dark");
    toggle.checked = true;
} 
else if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
} 
else {
    document.body.classList.remove("dark");
    toggle.checked = false;
}

// Toggle theme on click
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
