const navMenuButtonElement = document.getElementsByClassName("nav-button")[0];
const navLinkElement = document.getElementsByClassName("nav-link")[0];

navMenuButtonElement.addEventListener("click", () => {
  navLinkElement.classList.toggle("active");
});

/*form*/
const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("subject", subject.value);
  formData.append("message", message.value);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Message sent successfully!"))
    .catch((error) => alert(error));
});

/*
Finally, you will need to configure the backend of your website to handle the form submissions. You can either use an existing backend framework or create a custom server using Node.js or PHP, depending on your preference.*/
