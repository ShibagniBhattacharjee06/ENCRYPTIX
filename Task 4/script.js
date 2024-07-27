function toggleInfo(infoId) {
    var info = document.getElementById(infoId);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
