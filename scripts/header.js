function headerCheck() {
    if(window.scrollY>10)
    {
        document.getElementById('header').classList.add("active");
        document.getElementById('dropList').classList.add("active");
    }
    else
    {
       document.getElementById("header").classList.remove("active");
       document.getElementById('dropList').classList.remove("active");
    }
}

window.onload = headerCheck;
window.onscroll = headerCheck;
