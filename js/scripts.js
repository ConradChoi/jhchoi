function openTab(tabName) {
var i, tabContent, tabBtn;

if (tabName === 'projects') {
    document.getElementById('career').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    return;
}

tabContent = document.getElementsByClassName("tab-content");
for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
}

tabBtn = document.getElementsByClassName("tab-btn");
for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].classList.remove("active");
}

document.getElementById(tabName).style.display = "block";
event.currentTarget.classList.add("active");
}