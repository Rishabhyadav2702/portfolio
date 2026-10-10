```javascript
const menuToggle = document.querySelector("#menuToggle");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#overlay");

function toggleMenu() {
    const isOpen = sidebar.classList.toggle("sidebar-open");

    menuToggle.classList.toggle("is-open", isOpen);
    overlay.classList.toggle("show", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

menuToggle.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);

// Close menu when a navigation link is selected
sidebar.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("sidebar-open");
        menuToggle.classList.remove("is-open");
        overlay.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Close menu with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        sidebar.classList.remove("sidebar-open");
        menuToggle.classList.remove("is-open");
        overlay.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});
```
