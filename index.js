


const bsCollapse = new bootstrap.Collapse("#navbarNav", {
  toggle: false,
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".navbar a span")) return false;

  bsCollapse.hide();
});


// Update the footer year dynamically
// This ensures the footer year is always current

document.querySelector(".footerYear").innerText = new Date().getFullYear();