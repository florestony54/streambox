var nameLabel = document.querySelector("label[for=id_username]");
var passLabel = document.querySelector("label[for=id_password]");
var input = document.querySelectorAll("input");

for (var i = 0; i < input.length-1; i++) {
  input[i].classList.add("form-control")
  input[i].classList.add("col-6")

}
