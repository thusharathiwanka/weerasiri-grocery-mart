const error = document.querySelector(".error");
const success = document.querySelector(".success");

if (error != null) {
  setTimeout(() => {
    error.style.display = "none";
  }, 4000);
} else if (success != null) {
  setTimeout(() => {
    success.style.display = "none";
  }, 4000);
}
