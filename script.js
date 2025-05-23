//Use this panel to make your page more interactive!!!
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const homeBtn = buttons[0];
  const aboutBtn = buttons[1];
  const projectsBtn = buttons[2];
  const contactBtn = buttons[3];

  const aboutSection = document.getElementById("about-section");
  const projectsSection = document.getElementById("projects-section");
  const contactSection = document.getElementById("contact-section");

  function hideAllSections() {
    aboutSection.style.display = "none";
    projectsSection.style.display = "none";
    contactSection.style.display = "none";
  }

  aboutBtn.addEventListener("click", () => {
    const isVisible = aboutSection.style.display === "block";
    hideAllSections();
    aboutSection.style.display = isVisible ? "none" : "block";
  });

  projectsBtn.addEventListener("click", () => {
    const isVisible = projectsSection.style.display === "block";
    hideAllSections();
    projectsSection.style.display = isVisible ? "none" : "block";
  });

  contactBtn.addEventListener("click", () => {
    const isVisible = contactSection.style.display === "block";
    hideAllSections();
    contactSection.style.display = isVisible ? "none" : "block";
  });
});
