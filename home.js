let news_div = document.getElementById("news");
async function fetchData() {
  let res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=37d9a066a6d44a0d83a0902c2fa326a5`
  );
  let data = await res.json();
  //console.log('res:',res);
  showNews(data);
}
fetchData();

function showNews(news) {
  console.log(news.articles);
  let data = news.articles;
  data.forEach(function (article) {
    let main = document.createElement("div");
    main.setAttribute("class", "main_div");

    let div = document.createElement("div");
    div.setAttribute("class", "inner_div");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "img_div");

    let img = document.createElement("img");

    img.src = `${article.urlToImage}`;

    let content = document.createElement("p");

    content.innerHTML = article.content;

    let title = document.createElement("h2");

    title.innerHTML = article.title;

    let author = document.createElement("p");

    author.innerHTML = article.author;

    let date = document.createElement("p");

    date.innerHTML = article.publishedAt;

    div.append(title, author, date);

    div1.append(content, img);

    main.append(div, div1);

    news_div.append(main);
  });
}
function search() {
  window.location.assign("./search.html");
}
