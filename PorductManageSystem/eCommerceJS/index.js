
var rans = new Array(7);
for (var i = 0; i < rans.length; i++) {
    rans[i] = Math.floor(Math.random() * 255);
    if (i==6) {
        rans[i]=Math.floor(Math.random() * 10);
    }
    console.log(rans[i]);
}

function changeColor() {
    for (var i = 0; i < rans.length; i++) {
        if (i<6) {
            rans[i]--;
            if (rans[i]<1) {
                rans[i] = Math.floor(Math.random() * 255);
            }
        }
    }

    var background = "-webkit-linear-gradient(left, rgba(";
    for (var i = 0; i < rans.length; i++)  {
        if (i<3) {
            background = background + rans[i] + ",";
        } else if (i == 3) {
            background = background + rans[rans.length-1] + "),rgba(";
        } else {
            background = background + rans[i-1] + ",";
        }
    }
    background = background + rans[rans.length - 1] + "))";
    document.body.style.background = background;
}
window.setInterval(changeColor, 500);

//登录
function loginButton() {
    var lForm = document.getElementById("loginForm");
    lForm.style.top = "130px";
    lForm.style.transition = "top";
    lForm.style.transitionDuration = ".5s";
    lForm.style.transitionTimingFunction = "ease-in-out";
    var cover = document.getElementById("cover");
    cover.style.display = "block";
    cover.setAttribute("onclick", "coverBack(this,'loginForm')");
}

//取消登录
function coverBack(cover,eleId) {
    cover.style.display = "none";
    var lForm = document.getElementById(eleId);
    lForm.style.top = "-800px";
    lForm.style.transition = "top";
    lForm.style.transitionDuration = ".5s";
    lForm.style.transitionTimingFunction = "ease-in-out";
}

function registeButton() {
    var lForm = document.getElementById("registeForm");
    lForm.style.top = "20px";
    lForm.style.transition = "top";
    lForm.style.transitionDuration = ".5s";
    lForm.style.transitionTimingFunction = "ease-in-out";
    var cover = document.getElementById("cover");
    cover.style.display = "block";
    cover.setAttribute("onclick", "coverBack(this,'registeForm')");
}