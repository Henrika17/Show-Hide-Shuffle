function showOrHideDiv() {
    const v = document.getElementById("showOrHide");
    if (v.style.display === "none") {
      v.style.display = "block";
    } else {
      v.style.display = "none";
    }
}

function shuffle() {
    let v = document.querySelector("div");
    for (let i = v.children.length; i >= 0; i--) {
      v.appendChild(v.children[Math.random() * i | 0]);
    }
  }