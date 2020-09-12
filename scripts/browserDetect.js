function redirect()
{
        var isIE = /*@cc_on!@*/false || !!document.documentMode; //is internet explorer?
        if(isIE == true)location.href="not_supported.html";
}
window.onload=redirect;
