document.getElementById('load-user').addEventListener('click', function () {
  const countText = document.getElementById('user-count').value;
  const count = parseInt(countText);
  displayData(count);
  document.getElementById('user-detail').innerHTML = '';
});

function displayData(count) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      data = data.slice(0, count);
      const userContainer = document.getElementById('users');
      userContainer.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const div = document.createElement('div');
        div.innerHTML = `<p class="dynamicP">Username: <strong>${user.name}</strong><button onclick='getUserDetails(${user.id})' class="detailsBtn">Get Details ${user.id}</button></p>`;
        userContainer.appendChild(div);
      }
    });
}
function getUserDetails(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      const detail = document.getElementById('user-detail');
      detail.innerHTML = `
                <h3 class="data-name">Name: ${data.name}</h3>
                <h4>Email: ${data.email}</h4>
                <p>Phone: ${data.phone}</p>
                `;
    });
}
