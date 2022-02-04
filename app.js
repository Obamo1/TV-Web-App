
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
e.preventDefault();
const searchTerm = form.elements.query.value;
const conf = {params : {q: searchTerm}}
const res = await axios.get(`https://api.tvmaze.com/search/shows?q=girls`, conf);
makeImage(res.data)
})

const makeImage = (shows) => {
for (let result of shows){
  if(result.show.image){
const img = document.createElement('IMG');
img.src = result.show.image.medium; 
document.body.append(img)
  }
}
}