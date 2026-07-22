const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you for contacting me! Your message has been submitted.");

    form.reset();

});