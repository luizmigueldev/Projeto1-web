const token = localStorage.getItem("token");
const containerInf = document.getElementById('container-inf');
const contentApi = document.getElementById('content-api');
const formApi = document.getElementById("form-api");


if (token) {
  containerInf.style.display = 'none';
  contentApi.style.display = 'flex';

}

const formLogin = document.getElementById("form");
formLogin.addEventListener("submit", submit)
formApi.addEventListener("submit", requestApi)

async function submit(event) {

  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const { data, status } = await axios.post("https://reqres.in/api/login", {
      email,
      password
    })

    if (status == 200) {
      localStorage.setItem("token", data.token);
      containerInf.style.display = 'none';
      contentApi.style.display = 'flex';
    }
  }
  catch (e) {
    const error = document.querySelector(".error");
    error.textContent = "Usuario e/ou Senha Invalidos!!"

  }
}
async function requestApi(event) {
  event.preventDefault();
  const query = document.getElementById("query").value;

  try {
    const key = "8802371-6f1e7f4cccc616e9ab78e5fd2";

    const urlRequest = `https://pixabay.com/api/?key=${key}&q=${encodeURI(query)}&image_type=photo&per_page`
    const { data, status } = await axios.get(urlRequest)
    console.log(data)
    if (status == 200) {
      const containerImages = document.querySelector(".image-busca")
      containerImages.innerHTML = '';
      data.hits.map(({ previewURL }) => {
        const image = document.createElement(`img`);
        image.src = previewURL;
        containerImages.appendChild(image);
      })
    }
  } catch (e) {
    console.log(e)
  }

}