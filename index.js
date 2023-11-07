document.querySelector('#searching-btn').addEventListener('click', function () {
 console.log('click');
  const trip = {
   departure: document.querySelector('#searching-departure').value,
   arrival: document.querySelector('#searching-arrival').value,
  };
  console.log(trip);
  fetch('http://localhost:3000/trips', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(trip),
  })
  .then (response => response.json())
  .then (data => {
    console.log(data)
    document.querySelector('.notfound-content').style.display = 'none';
    for (let i = 0; i < data.trips.length; i++) {
      document.querySelector('#row-content').innerHTML += `
      <div class="purchase-row">
          <p class="purchase-path">${data.trips[i].departure} > ${data.trips[i].arrival}</p>
          <p class="purchase-departure">HEURE</p>
          <p class="purchase-price">${data.trips[i].price}$</p>
        </div>`
        document.querySelector('.row-content').style.display = 'flex';
    }
  })
})