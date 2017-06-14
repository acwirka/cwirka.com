
window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("topbar").className = "blend";
        document.getElementById("navLogo").className = "shrink";
    } else {
        document.getElementById("topbar").className = "";
        document.getElementById("navLogo").className = "";
    }
}
