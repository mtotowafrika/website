function contact() {
  Swal.fire({
    html: `
      <h2 class="fw-bold h1">Get in touch</h2>
      <p>We shall be glad to hear from you</p>
      
      <form id="contactForm">
        <div class="form-group">
                    <input type="text" id="name" name="name" placeholder="Name" class="form-control" required>
        </div>
        <div class="form-group">
          
          <input type="tel" id="phone" name="phone" class="form-control" placeholder="Phone"  required>
        </div>
        <div class="form-group">
                <input type="email" id="email" name="email" class="form-control" placeholder="Email"  required>
        </div>
        <div class="form-group">
         
          <input type="text" id="subject" name="subject" class="form-control" placeholder="subject"  required>
        </div>
        <div class="form-group">
          <textarea id="message" name="message" placeholder="Message"  class="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-dark mt-3">Submit</button>
      </form>
     
    `,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    didOpen: () => {
      const form = document.getElementById("contactForm");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        Swal.fire("Thank you!", "Your message has been sent.", "success");
        close();
      });
    },
  });
}

function close() {
  Swal.close();
}
