document.getElementById("menu-btn").addEventListener("click", function () {
  document.querySelector("nav .navigation ul").classList.add("active");
});

document.getElementById("menu-close").addEventListener("click", function () {
  document.querySelector("nav .navigation ul").classList.remove("active");
});


// accordian
const accordian = document.querySelectorAll(".accordian");

accordian.forEach(acco => {
  const icon = acco.querySelector(".fa-caret-down");
  const answer = acco.querySelector(".answer");

  acco.addEventListener("click", function() {
    icon.classList.toggle('iconactive')
    answer.classList.toggle('active')
  })
})



let apiKey = "657303909fe54f2196c88bd631592398";
let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

document.querySelector(".course-card").addEventListener("click", function () {
  window.location.href = "course-details.html";
});
