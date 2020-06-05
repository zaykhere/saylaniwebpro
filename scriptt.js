var contactForm = document.getElementById("contact-form");
var submitBtn = document.querySelector(".submitBtn");
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var alert = document.getElementById("alert");

submitBtn.addEventListener("click", function (e) {
  if (name.value === "" || email.value === "" || message.value === "") {
    if (!alert.hasChildNodes()) {
      var para = document.createElement("p");
      para.innerHTML = "Please enter all fields";
      para.style.textAlign = "center";
      para.style.marginTop = "15px";
      para.style.color = "red";
      para.style.fontSize = "18px";
      para.classList.add("paraclass");

      alert.appendChild(para);
      e.preventDefault();
    }
  } else {
    console.log(alert);
    var success = document.createElement("p");
    success.innerHTML = "Form submitted successfully";
    success.style.textAlign = "center";
    success.style.marginTop = "15px";
    success.style.color = "green";
    success.style.fontSize = "18px";
    if (alert.hasChildNodes()) alert.removeChild(alert.childNodes[0]);
    alert.appendChild(success);

    e.preventDefault();
  }
  e.preventDefault();
});
