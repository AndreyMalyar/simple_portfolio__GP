const panelBtn = document.querySelectorAll(".accordion__item-btn");
panelBtn[0].nextElementSibling.style.height = panelBtn[0].nextElementSibling.scrollHeight + "px";
panelBtn[0].parentElement.style.backgroundColor = "#fff";
panelBtn[0].parentElement.style.color = "#000";
panelBtn[0].style.color = "#000";

panelBtn.forEach(item => {
    item.addEventListener("click", function () {
        panelBtn.forEach((child) => {
            child.nextElementSibling.removeAttribute("style")
            child.querySelector("span").classList.remove("active");
            child.parentElement.style.backgroundColor = "";
            child.style.color = "#fff";
        })
        // const parentNext = item.nextElementSibling;

        item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + "px";
        item.parentElement.style.backgroundColor = "#fff";
        item.querySelector("span").classList.add("active");
        item.style.color = "#000";
    })
})