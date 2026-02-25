const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", function (event) {
    tabs.forEach((t) => t.classList.remove("active"));
    event.target.classList.add("active");
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
      console.log(event.target.getAttribute("href"));
    });
    document
      .querySelector(event.target.getAttribute("href"))
      .classList.add("active");
  });
});
