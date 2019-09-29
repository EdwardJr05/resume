<!-- button js read more read less-->
var btnText = document.getElementById("myBtn");

function toggleReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

btnText.addEventListener('click', toggleReadMore);
