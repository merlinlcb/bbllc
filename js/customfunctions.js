function function1() {
  document.getElementById("nav1").classList.add("active");
  document.getElementById("nav3").classList.remove("active");
  document.getElementById("nav2").classList.remove("active");
  var x = document.getElementById("homecontainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("aboutcontainer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("contactcontainer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function function2() {
  document.getElementById("nav1").classList.remove("active");
  document.getElementById("nav3").classList.remove("active");
  document.getElementById("nav2").classList.add("active");
  var x = document.getElementById("aboutcontainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("homecontainer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("contactcontainer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function function3() {
  document.getElementById("nav1").classList.remove("active");
  document.getElementById("nav3").classList.add("active");
  document.getElementById("nav2").classList.remove("active");
  var x = document.getElementById("contactcontainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("aboutcontainer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("homecontainer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
