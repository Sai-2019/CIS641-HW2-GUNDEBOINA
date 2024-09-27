document.getElementById("viewProjectsBtn").addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent. Thank you!");
  });
  