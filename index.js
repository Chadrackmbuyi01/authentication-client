document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.ok;
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
