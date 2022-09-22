let on = false;
let links = document.getElementById("links").style;

function openNav() {
    on = !on
    if (on) {
        links.width = "35%";
        links.display = "block";
        links.animation = "link_slide .5s ease-in";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        console.log("...");
    } else {
        links.animation = "link_slide_out .2s ease-in";
        setTimeout(() => {
            links.display = "none";
        }, 180)
        console.log("xxx");
    }

}