window.addEventListener("load", () => {
    let desc = document.getElementsByClassName("ach-title");
    for (let i = 0; i < desc.length; i++) {
        desc[i].innerHTML = desc[i].innerText;
    };
    
    // Extra padding for last skill item
    let skillItems = document.querySelectorAll(".footer > .cat-skill-item");
    if (skillItems) {
        skillItems[skillItems.length-1].classList.add("pad-bottom-extra");
    }
}, false);
