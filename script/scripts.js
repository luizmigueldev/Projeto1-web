const token = localStorage.getItem("token");
const containerInf = document.getElementById('container-inf');


if (token) {
  containerInf.style.display = 'none';

}

const formLogin = document.getElementById("form");
formLogin.addEventListener("submit", submit)

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
    }
  }
  catch (e) {
    const error = document.querySelector(".error");
    error.textContent = "Usuario e/ou Senha Invalidos!!"

  }
}