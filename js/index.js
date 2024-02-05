"use strict";
const icon = document.querySelector(".line-container");
const topList = document.querySelector(".top-list-main");
const navigation = document.querySelector(".navigation");
const navButton = document.querySelectorAll(".nav-top");
const navBox = document.querySelectorAll(".nav-box");
const navIcon = document.querySelectorAll(".nav-icon");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const navCars = document.querySelectorAll(".nav-cars");
const navSegment = document.querySelectorAll(".nav-segment");
const navItemBox = document.querySelectorAll(".nav-itemBox");
const navVehicles = document.querySelectorAll(".nav-vehicles");
const iconVehicles = document.querySelectorAll(".icon-vehicles");
// ***********************************************
const boxList = document.querySelectorAll(".box-list");
const boxListItem = document.querySelectorAll(".box-list-item");
const boxIcon = document.querySelectorAll(".box-icon");

// ***********************************************
const boxVehicle = document.querySelectorAll(".box-vehicle");

function btVehicle(x) {
    for (let i = 0; i < boxVehicle.length; i++) {
        if (i == x) {
            boxListItem[i].classList.remove("button-showHidden");
            boxVehicle[i].classList.toggle("color-vehicle");

        }
        else {
            boxListItem[i].classList.add("button-showHidden");
            boxVehicle[i].classList.remove("color-vehicle");
        }
    }
}
boxVehicle[0].addEventListener("click", function () {
    btVehicle(0);
});

boxVehicle[1].addEventListener("click", function () {
    btVehicle(1);
});
boxVehicle[2].addEventListener("click", function () {
    btVehicle(2);
});
boxVehicle[3].addEventListener("click", function () {
    btVehicle(3);
});
boxVehicle[4].addEventListener("click", function () {
    btVehicle(4);
});
boxVehicle[5].addEventListener("click", function () {
    btVehicle(5);
});
// ***********************************************
icon.addEventListener("click", function () {
    navigation.classList.toggle("showHide-navigation");
    line1.classList.toggle("top-rotate");
    line2.classList.toggle("hide-line");
    line3.classList.toggle("bottom-rotate");
    topList.classList.toggle("top-fixed");
    for (let i = 0; i < navVehicles.length; i++) {
        navVehicles[i].classList.add("showHidden-vehicles");
    }
});
//********************************************* */

function navTop(x) {
    for (let i = 0; i < navButton.length; i++) {
        if (i == x) {
            navBox[i].classList.toggle("nav-showHidden");
            navButton[i].classList.toggle("color-nav-top");
            if (navIcon[i].classList.contains("bi-plus")) {
                navIcon[i].classList.replace("bi-plus", "bi-dash-lg");
            }
            else {
                navIcon[i].classList.replace("bi-dash-lg", "bi-plus");
            }
        }
        else {
            navBox[i].classList.add("nav-showHidden");
            navButton[i].classList.remove("color-nav-top");
            navIcon[i].classList.replace("bi-dash-lg", "bi-plus");
        }
    }
}
// ********************************************
function navVehiclesLarge(x) {
    for (let i = 0; i < navSegment.length; i++) {
        if (i == x) {
            navSegment[i].classList.remove("showHidden-vehicles");
            navCars[i].classList.add("cars-style");
        }
        else {
            navSegment[i].classList.add("showHidden-vehicles");
            navCars[i].classList.remove("cars-style");
        }
    }
}
// ********************************************
function navVehiclesItem(x) {
    navVehicles[x].classList.add("showHidden-vehicles");
}
// ********************************************
function navVehiclesBox(x) {
    navVehicles[x].classList.remove("showHidden-vehicles");
}

// ********************************************
function boxItem(x) {
    for (let i = 0; i < boxList.length; i++) {
        if (i == x) {
            boxListItem[i].classList.toggle("nav-showHidden");
            boxList[i].classList.toggle("color-nav-top");
            if (boxIcon[i].classList.contains("bi-plus")) {
                boxIcon[i].classList.replace("bi-plus", "bi-dash-lg");
            }
            else {
                boxIcon[i].classList.replace("bi-dash-lg", "bi-plus");
            }
        }
        else {
            boxListItem[i].classList.add("nav-showHidden");
            boxList[i].classList.remove("color-nav-top");
            boxIcon[i].classList.replace("bi-dash-lg", "bi-plus");
        }
    }
}
// ********************************************
navButton[0].addEventListener("click", function () {
    navTop(0);
});

navButton[1].addEventListener("click", function () {
    navTop(1);
});

navButton[2].addEventListener("click", function () {
    navTop(2);
});
// ********************************************

iconVehicles[0].addEventListener("click", function () {
    navVehiclesItem(0);
});

iconVehicles[1].addEventListener("click", function () {
    navVehiclesItem(1);
});

iconVehicles[2].addEventListener("click", function () {
    navVehiclesItem(2);
});

iconVehicles[3].addEventListener("click", function () {
    navVehiclesItem(3);
});

iconVehicles[4].addEventListener("click", function () {
    navVehiclesItem(4);
});

iconVehicles[5].addEventListener("click", function () {
    navVehiclesItem(5);
});
// ********************************************
navItemBox[0].addEventListener("click", function () {
    navVehiclesBox(0);
});

navItemBox[1].addEventListener("click", function () {
    navVehiclesBox(1);
});

navItemBox[2].addEventListener("click", function () {
    navVehiclesBox(2);
});
navItemBox[3].addEventListener("click", function () {
    navVehiclesBox(3);
});

navItemBox[4].addEventListener("click", function () {
    navVehiclesBox(4);
});

navItemBox[5].addEventListener("click", function () {
    navVehiclesBox(5);
});
// ********************************************
navCars[0].addEventListener("click", function () {
    navVehiclesLarge(0);
});

navCars[1].addEventListener("click", function () {
    navVehiclesLarge(1);
});

navCars[2].addEventListener("click", function () {
    navVehiclesLarge(2);
});

navCars[3].addEventListener("click", function () {
    navVehiclesLarge(3);
});

navCars[4].addEventListener("click", function () {
    navVehiclesLarge(4);
});

navCars[5].addEventListener("click", function () {
    navVehiclesLarge(5);
});

// ********************************************
boxList[0].addEventListener("click", function () {
    boxItem(0);
});

boxList[1].addEventListener("click", function () {
    boxItem(1);
});

boxList[2].addEventListener("click", function () {
    boxItem(2);
});
boxList[3].addEventListener("click", function () {
    boxItem(3);
});
boxList[4].addEventListener("click", function () {
    boxItem(4);
});
boxList[5].addEventListener("click", function () {
    boxItem(5);
});
// ********************************************
$(document).ready(function () {
    $($(".item-list")[0]).click(function () {
        $(".nav-opening").slideToggle(200);
        $(".nav-shop").slideUp(200);
        $(".nav-support").slideUp(200);
    });
    $($(".item-list")[1]).click(function () {
        $(".nav-shop").slideToggle(200);
        $(".nav-opening").slideUp(200);
        $(".nav-support").slideUp(200);
    });
    $($(".item-list")[2]).click(function () {
        $(".nav-support").slideToggle(200);
        $(".nav-opening").slideUp(200);
        $(".nav-shop").slideUp(200);
    });
    $($(".end-box")).click(function () {
        $(".end-item-box").slideToggle(200);
    });
    // *************************
    $($(".list-heading")[0]).click(function () {
        $($(".text-list-end")[0]).slideToggle(200);
        $($(".text-list-end")[1]).slideUp(200);
        $($(".text-list-end")[2]).slideUp(200);
        $($(".text-list-end")[3]).slideUp(200);
    });
    $($(".list-heading")[1]).click(function () {
        $($(".text-list-end")[1]).slideToggle(200);
        $($(".text-list-end")[0]).slideUp(200);
        $($(".text-list-end")[2]).slideUp(200);
        $($(".text-list-end")[3]).slideUp(200);
    });
    $($(".list-heading")[2]).click(function () {
        $($(".text-list-end")[2]).slideToggle(200);
        $($(".text-list-end")[0]).slideUp(200);
        $($(".text-list-end")[1]).slideUp(200);
        $($(".text-list-end")[3]).slideUp(200);
    });
    $($(".list-heading")[3]).click(function () {
        $($(".text-list-end")[3]).slideToggle(200);
        $($(".text-list-end")[0]).slideUp(200);
        $($(".text-list-end")[1]).slideUp(200);
        $($(".text-list-end")[2]).slideUp(200);
    });
});

// **********************************************************************
var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}
// ***************************************************
var slideChange = [1, 1];
var slideModel = ["mySlide1", "mySlide2"]
nowSlides(1, 0);
nowSlides(1, 1);

function afterSlides(s, so) {
    nowSlides(slideChange[so] += s, so);
}

function nowSlides(s, so) {
    let i;
    let x = document.getElementsByClassName(slideModel[so]);
    if (s > x.length) { slideChange[so] = 1 }
    if (s < 1) { slideChange[so] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideChange[so] - 1].style.display = "block";
}



