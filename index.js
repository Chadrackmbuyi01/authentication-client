// document.getElementById("registerForm").addEventListener("submit", addUser);

// // Function to handle user registration
// function addUser(event) {
//   event.preventDefault();
//   const user = {
//     firstName: document.getElementById("firstName").value,
//     lastName: document.getElementById("lastName").value,
//     address: document.getElementById("address").value,
//     username: document.getElementById("username").value,
//     email: document.getElementById("email").value,
//     password: document.getElementById("password").value,
//   };

//   fetch("http://localhost:8080/api/users/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       let outputElement = document.getElementById("output");
//       outputElement.innerHTML = data;
//       alert("Registration successful!");
//     })
//     .catch((error) => console.error("Error:", error));
//   registerForm.reset();
// }

// document.getElementById("LoginForm").addEventListener("submit", getUser);

// // Function to handle user login
// async function getUser(event) {
//   event.preventDefault();

//   // const formData = new FormData(event.target);
//   // const loginRequest = {
//   //   email: formData.get("loginEmail"),
//   //   password: formData.get("loginPassword"),
//   // };
//   const loginRequest = {
//     username: document.getElementById("loginUsername").value,
//     password: document.getElementById("loginPassword").value,
//   };

//   // Correct API endpoint for login
//   const apiUrl = "http://localhost:8080/api/users/login";
//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(loginRequest),
//     });
//     if (!response.ok) {
//       throw new Error("Invalid username or password");
//     }
//     const data = response.json();

//     console.log("User data fetched from database:", data);
//     alert("Login successful!");
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Invalid username or password"); // Show error message
//   }
// }
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", addUser);
  }

  if (loginForm) {
    loginForm.addEventListener("submit", getUser);
  }
});

// Function to handle user registration
function addUser(event) {
  event.preventDefault();
  const user = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
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
    .then((response) => response.json())
    .then((data) => {
      console.log("User registered successfully:", data);
      alert("Registration successful!");
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      alert("Registration failed!");
    });
}

// Function to handle user login
async function getUser(event) {
  event.preventDefault();

  const loginRequest = {
    username: document.getElementById("loginUsername").value,
    password: document.getElementById("loginPassword").value,
  };

  try {
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    const data = await response.json();
    console.log("User logged in successfully:", data);
    alert("Login successful!");
  } catch (error) {
    console.error("Error logging in user:", error);
    alert("Invalid username or password");
  }
}
