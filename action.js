document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
//   const registerBtn = document.getElementById('registerBtn');

   loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Успішний логін: токен можна зберегти в localStorage
        localStorage.setItem('token', data.token);
        alert("Вхід успішний!");
        window.location.href = '/home.html'; // або інша сторінка
      } else {
        alert(data.message || 'Помилка входу');
      }
    } catch (err) {
      console.error('Помилка запиту:', err);
      alert('Сервер недоступний');
    }
  });

//   registerBtn.addEventListener('click', () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     console.log('Натиснуто реєстрація:', email, password);

//     // Тут можна додати fetch до /api/register
//   });
});