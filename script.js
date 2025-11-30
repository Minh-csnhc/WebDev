const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      Goto = body.querySelector(".lang"),
      Py = body.querySelector(".lang-python"),
      Pybutton = body.querySelector(".python")

// ===== Save Changes =====
let saveMode = localStorage.getItem("mode")
if (saveMode == "dark") {
  body.classList.add("dark");
  modeText.innerText = "Light Mode"
}

// ===== Toggle sidebar ==== //
toggle.addEventListener("click", () =>{
  sidebar.classList.toggle("close")
});

// ===== Toggle Dark Mode =====// 
modeSwitch.addEventListener("click", () =>{
  body.classList.toggle("dark");

  if(body.classList.contains("dark")) {
      modeText.innerText = "Light Mode";
      localStorage.setItem("mode", "dark");
  } else {
      modeText.innerText = "Dark Mode";
      localStorage.setItem("mode", "light")
  }
});

// ===== Goto Button ===== //
Goto.addEventListener("click", () =>{
  window.location.href = "lang.html"
});

// ===== Lang Button ===== //
Py.addEventListener("click", () =>{
  window.location.href = "python.html"
});

// ===== Lang-info Button ===== //
Pybutton.addEventListener("click", () =>{
  window.location.href = ""
});