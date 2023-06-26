document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var form = document.getElementById("signup-form");
    form.classList.add("slide-out");
  
    // You can perform additional actions like sending form data to a server here
  
    // After a certain delay, you can redirect to another page or show a success message
    setTimeout(function() {
      // Redirect to another page
      window.location.href = "success.html";
    }, 1000); // Delay in milliseconds
  });
  