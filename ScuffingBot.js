function GoIn()
{
    getScuffed = document.getElementById("scuffer").value;
    localStorage.setItem("scuffer", "scuffer");
    window.location("uGotScuffed.html");
}