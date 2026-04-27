function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

function toggleDetails(element) {
  const details = element.querySelector(".details");

  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}