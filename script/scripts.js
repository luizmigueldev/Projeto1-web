
const formLogin = document.getElementById("form");

formLogin.addEventListener("submit", submit)

async function submit(event) {

  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const { data } = await axios.post("https://reqres.in/api/login", {
      email,
      password
    })
    if (data.status == 200) {
      localStorage.setItem("token", data.token);
    }
  }
  catch (e) {
    const error = document.querySelector(".error");
    error.textContent = "Usuario e/ou Senha Invalidos!!"

  }
}