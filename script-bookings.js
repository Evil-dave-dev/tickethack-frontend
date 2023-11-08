// ajout des objets de la collection booking dans le container
fetch("http://localhost:3000/bookings", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.trips.length !== 0) {
      for (let i = 0; i < data.trips.length; i++) {
        document.querySelector("#bookings-content").innerHTML += `
            <div class="bookings-row">
            <p class="bookings-path">${data.trips[i].departure} > ${data.trips[i].arrival}</p>
            <p class="bookings-departure">20:09</p>
            <p class="bookings-price">${data.trips[i].price}€</p>
            <p>Departure in <span id="departure">5</span> hours</p>
            </div>`;
      }
    }
  });
