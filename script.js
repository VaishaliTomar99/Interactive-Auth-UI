// Toggle Password

function togglePassword(id){

  const input = document.getElementById(id);

  if(input.type === "password"){
    input.type = "text";
  }else{
    input.type = "password";
  }

}

// Toast Function

function showToast(message){

  const toast = document.getElementById("toast");

  toast.innerText = message;

  toast.classList.add("toast-show");

  setTimeout(()=>{
    toast.classList.remove("toast-show");
  },3000);

}

// Login Form

const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    showToast("Login Successful 🚀");

  });

}

// Register Form

const registerForm = document.getElementById("registerForm");

if(registerForm){

  registerForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const password =
      document.getElementById("password").value;

    const confirmPassword =
      document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

      showToast("Passwords do not match ❌");

      return;
    }

    showToast("Registration Successful 🎉");

  });

}

// Forgot Password Form
const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {
  forgotForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Password reset link sent successfully!");
    
    forgotForm.reset();
  });
}