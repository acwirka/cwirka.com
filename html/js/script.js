
window.onscroll = function() { myFunction() };
window.onload = function() { load() };

function load() {
//        document.getElementById("logoh1").className = "load";
//        document.getElementById("logoh2").className = "load";
        element = document.getElementById("logoh1");
        element.classList.remove("logoh1");
        element.classList.add("load");
        element = document.getElementById("logoh2");
        element.classList.remove("logoh2");
        element.classList.add("load");
}


function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("topbar").className = "blend";
       
        document.getElementById("navLinks").className = "shrinkright";
        document.getElementById("navLogo").className = "shrinkleft";
    } else {
        document.getElementById("topbar").className = "";
        document.getElementById("navLogo").className = "";
        document.getElementById("navLinks").className = "";
    }
}

var waypoint = new Waypoint({
  element: document.getElementById('sites1'),
  handler: function() {
    document.getElementById('sites1').className = "slideFromLeft"
  },
  offset: '50%'
})

var waypoint = new Waypoint({
  element: document.getElementById('sites2'),
  handler: function() {
    document.getElementById('sites2').className = "slideFromRight"
  },
  offset: '50%'
})