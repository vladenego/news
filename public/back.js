


async function getData(genre) {

  let responce = fetch('https://newsapi.org/v2/top-headlines?country=ua&apiKey=e714b70c4494471799b7b36bd08169dc')
  let content = await (await responce).json()
  let articles = content.articles


  let feed = document.getElementById('feed')

  for (const item of articles) {

    if (item.urlToImage != null) {

      let block = document.createElement('div')
      block.className = "item"
      feed.appendChild(block)

      let blockPicture = document.createElement('div')
      blockPicture.className = "item-picture"
      block.appendChild(blockPicture)
      let picture = document.createElement('img');
      picture.src = item.urlToImage
      blockPicture.appendChild(picture)
      

      let blockTitle = document.createElement('div')
      blockTitle.className = "item-title"
      block.appendChild(blockTitle)
      let title = document.createElement('h2')
      title.textContent = item.title
      console.log(item.title);
      blockTitle.appendChild(title)

      let blockText = document.createElement('div')
      blockText.className = "item-text"
      block.appendChild(blockText)
      let text = document.createElement('p')
      text.textContent = item.description
      console.log(text.title);
      blockText.appendChild(text)
      

      let btnSource = document.createElement('div')
      btnSource.className = "item-btn"
      block.appendChild(btnSource)
      let btn = document.createElement('a')
      btn.innerHTML = "source"
      btn.href = item.url
      btnSource.appendChild(btn)

      let btnMore = document.createElement('div')
      btnMore.className = "item-btn2"
      block.appendChild(btnMore)
      let btn2 = document.createElement('a')
      btn2.innerHTML = "more"
      
      btnMore.appendChild(btn2)
      btn2.onclick = () => {
        blockText.style.transition = "all 2s"
        blockText.style.display = "block"
        
      }
    } else {

    }






  }
  console.log(articles);

}
getData()




















// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => {
//       let shortJson = json.splice(0, 100)
//       console.log(shortJson);



//       for (const item of shortJson) {

//         console.log(item.title);
//         let title = document.createElement('h1');
//         title.className = "title"
//         title.textContent = item.title
//         document.body.appendChild(title)

//         ////////////////////////////////////

//         let descripttion = document.createElement('p');
//         descripttion.className = "description"
//         descripttion.textContent = item.body
//         document.body.appendChild(descripttion)



//       }




//     }


//   )
