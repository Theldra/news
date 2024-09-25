fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=bb7f953c78034f868bee1df918f55d32&pageSize=6')
    .then(function (response) {
        // console.log(response.body);
        return response.json();
    })
    .then(function (data) {
        // console.table(data.articles);
        for (const article of data.articles) {
            // console.log(article);
            const articleDiv = document.createElement('div');
            const articleH1 = document.createElement('h1');
            articleH1.textContent = article.title;
            articleDiv.appendChild(articleH1);

            // const articleP = document.createElement('p')
            // articleP.textContent = article.content;
            // articleDiv.appendChild(articleP);

            const articleP = document.createElement('p')
            articleP.textContent = article.description;
            articleDiv.appendChild(articleP);

            const articleImg = document.createElement('img');
            articleImg.setAttribute('src', article.urlToImage);
            articleImg.setAttribute('alt', article.title);
            articleImg.classList.add('article-img');
            articleDiv.appendChild(articleImg);

            document.querySelector('#articles').appendChild(articleDiv);

        }
    })







