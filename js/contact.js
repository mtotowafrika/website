function contact() {
  Swal.fire({
    html: `
          <h2 class="fw-bold h1">Get in touch</h2>
          <p>We shall be glad to hear from you</p>
          
          <form id="contact-form">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Name" class="form-control" required>
            </div>
            <div class="form-group">
              <input type="tel" id="phone" name="phone" class="form-control" placeholder="Phone" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" required>
            </div>
            <div class="form-group">
              <textarea id="message" name="message" placeholder="Message" class="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-dark mt-3">Submit</button>
          </form>
        `,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    didOpen: () => {
      const form = document.getElementById("contact-form");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        sendmessage(form);
      });
    },
  });
}

function sendmessage(form) {
  // Show sending alert
  Swal.fire({
    title: "Sending...",
    text: "Please wait while we send your message.",
    icon: "info",
    allowOutsideClick: false,
    showConfirmButton: false,
    showCloseButton: true,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  const serviceID = "service_tb3cck8"; // Replace with your EmailJS service ID
  const templateID = "template_7pjxp4r"; // Replace with your EmailJS template ID

  emailjs
    .sendForm(serviceID, templateID, form)
    .then(() => {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent.",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    })
    .catch((error) => {
      // Log the entire error object to the console
      console.error("Error occurred:", error);

      // Handle the case where error.text might be undefined
      const errorMessage =
        error.text || "An unknown error occurred. Please try again later.";

      Swal.fire({
        title: "Error!",
        text: `An error occurred: ${errorMessage}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    });
}

function close() {
  Swal.close();
}
