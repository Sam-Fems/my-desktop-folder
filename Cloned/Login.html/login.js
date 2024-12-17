document.querySelector('.login-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
  
    if (!username || !password) {
      message.textContent = 'Please fill out all fields.';
      message.style.color = 'red';
      return;
    }
  
    if (username === 'samuel123' && password === '568020') {
      message.textContent = 'Sign-in successful!';
      message.style.color = 'green';
    } else {
      message.textContent = 'Invalid username or password.';
      message.style.color = 'red';
    }
  });
  