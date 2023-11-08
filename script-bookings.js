// ajout des objets de la collection booking dans le container
fetch("http://localhost:3000/carts")
.then((response) => response.json())
.then(data => {

console.log(data)
fetch("http://localhost:3000/bookings", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
 body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        document.querySelector("#bookings-content").innerHTML += `
            <div class="bookings-row">
            <p class="bookings-path">${data[i].departure} > ${data[i].arrival}</p>
            <p class="bookings-departure">20:09</p>
            <p class="bookings-price">${data[i].price}€</p>
            <p>Departure in <span id="departure">5</span> hours</p>
            </div>`;
      }
    }
  });
})
