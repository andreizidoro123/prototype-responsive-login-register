document.getElementById('showRegister').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('loginForm').classList.remove('active');
  document.getElementById('registerForm').classList.add('active');
});

document.getElementById('showLogin').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('registerForm').classList.remove('active');
  document.getElementById('loginForm').classList.add('active');
});
