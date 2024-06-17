document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('nav .navigation ul').classList.add('active');
});

document.getElementById('menu-close').addEventListener('click', function() {
    document.querySelector('nav .navigation ul').classList.remove('active');
});

let apiKey = "657303909fe54f2196c88bd631592398"
let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
fetch(url).then((res) => {
    return res.json()
}).then((data) => {
    console.log(data);
})

