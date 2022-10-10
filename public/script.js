
document.querySelector("#btnLoad").addEventListener("click", () => {
  getDinoName();
  getDinoImage();
});

async function getDinoName() {

const response = await fetch("https://dinoipsum.com/api/?format=json&words=2&paragraphs=1");
const json = await response.json();
let dinoName = json[0].join(' ');
document.querySelector('#dinoName').textContent = dinoName;
}

const api_key = process.env.API_KEY;
async function getDinoImage() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8371dcc157msh6d09c34158c3365p1d1330jsn52db17361dd1",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

   const response = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10",options);
  const json = await response.json();
  let dinoImg = json.value[Math.floor(Math.random() * 10)].thumbnailUrl;
  let img = document.createElement('img');
  img.src = dinoImg;
  document.getElementById('dinoName').appendChild(img);

}
