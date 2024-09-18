Swal.fire({
  title: " Donate to keep a girl in school",
  html: `
      <h1 class="text-center display-1 "> 
      <img src="images/girl.jpg" class="img-fluid" />
      </h1>   
     <p class="p-2 bg-light fw-bold  my-3">Every coin counts </p>
    <p><a class="btn btn-dark text-light mr-2 m-2" onclick="Swal.close()">Not ready</a><a class="btn btn-warning m-2" onclick="contact()">Donate</a></p>
        
        `,
  showCloseButton: true,
  showCancelButton: false,
  showConfirmButton: false,
});

function close() {
  Swal.close();
}

function contact() {
  window.location.href = "/donate";
}
