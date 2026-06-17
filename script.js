console.log("script running...")
document.querySelector(".cross").style.display ="none"; 
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".ham").style.display = "inline"
        document.querySelector(".cross").style.display = "none"
    }    
    else{
        document.querySelector(".ham").style.display = "none" 
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline"
        },300);
    }console.log("script running...");
 
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
 
function openSidebar() {
    sidebar.classList.add("sidebar-open");
    hamburger.classList.add("sidebar-open");
    overlay.classList.add("show");
    hamburger.setAttribute("aria-expanded", "true");
}
 
function closeSidebar() {
    sidebar.classList.remove("sidebar-open");
    hamburger.classList.remove("sidebar-open");
    overlay.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
}
 
hamburger.addEventListener("click", () => {
    if (sidebar.classList.contains("sidebar-open")) {
        closeSidebar();
    } else {
        openSidebar();
    }
});
 
overlay.addEventListener("click", closeSidebar);
 
// Close the drawer automatically if the viewport grows back to desktop size
window.addEventListener("resize", () => {
    if (window.innerWidth > 880) {
        closeSidebar();
    }
});
 
// Close drawer when a nav link is tapped (mobile)
document.querySelectorAll(".sidebar nav a").forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 880) {
            closeSidebar();
        }
    });
});
 
}) 
