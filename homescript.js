var myLoad;

function loadHide() {
    myLoad = setTimeout(hideLoading, 3000);
}

function hideLoading() {
    document.getElementById("loadingArea").style.display = "none";
    document.getElementById("contentArea").style.display = "block";
}

function resumeViewer() {
    document.getElementById("resumeViewer").style.backgroundImage = "url('https://res.cloudinary.com/souvik-network/image/upload/v1585068922/Sankha%27s%20Portfolio/cv_image_bkboyr.jpg')";
    document.getElementById("resumeArea").style.display = "block";
    document.getElementById("darkLayer").style.display = "block";
    document.body.style.overflowY = "hidden";
}

function closeresumeViewer() {
    document.getElementById("resumeArea").style.display = "none";
    document.getElementById("darkLayer").style.display = "none";
    document.body.style.overflowY = "";
}