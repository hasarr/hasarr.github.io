
function mobileMenu (){
    var mobileMenu = document.getElementById("mobileMenu");
    var dropMenu = document.getElementById("mobileDropList");
    if(mobileMenu.style.display === "none")
    {
        mobileMenu.style.display = "block";
    }
    else
    {
        hideMobileMenu(mobileMenu);
        hideMobileMenu(dropMenu);
    }

}

function showDropMenu()
{
    var dropMenu = document.getElementById("mobileDropList");
    var mobileMenu = document.getElementById("mobileMenu");
    if(dropMenu.style.display === "none")
    {
        dropMenu.style.display = "block";
    }
    else
    {
        hideMobileMenu(dropMenu);
        hideMobileMenu(mobileMenu);
    }
}
function hideMobileMenu(mobileMenu)
{
    if(mobileMenu == null)mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = "none";
}
