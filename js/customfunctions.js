document.addEventListener("DOMContentLoaded", function () {
  switchTab("homecontainer");
});

function switchTab(containerId) {
  var containers = [
    "homecontainer",
    "aboutcontainer",
    "contactcontainer",
    "biocontainer",
  ];

  // Highlight the corresponding nav link
  containers.forEach(function (container) {
    var navLink = document.getElementById(
      "nav" + (containers.indexOf(container) + 1)
    );
    navLink.classList.remove("active");
  });

  var activeIndex = containers.indexOf(containerId);
  var activeNavLink = document.getElementById("nav" + (activeIndex + 1));
  activeNavLink.classList.add("active");

  // Toggle the display of containers
  containers.forEach(function (container) {
    var element = document.getElementById(container);
    element.style.display = container === containerId ? "block" : "none";
  });
}
