document.querySelector("#searching-btn").addEventListener("click", function () {
  const trip = {
    departure: document.querySelector("#searching-departure").value,
    arrival: document.querySelector("#searching-arrival").value,
  };
  if (trip.departure !== "" && trip.arrival !== "") {
    fetch("http://localhost:3000/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trip),
    })
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".notfound-content").style.display = "none";
        document.querySelector("#row-content").style.display = "flex";
        //vider les champs
        document.querySelector("#row-content").innerHTML = "";
        document.querySelector("#searching-departure").value = "";
        document.querySelector("#searching-arrival").value = "";
        // ajouter les trajets au row-content à travers une boucle
        for (let i = 0; i < data.trips.length; i++) {
          console.log(data.trips[i]._id);
          const hour = data.trips[i].date.slice(11, 16);
          document.querySelector("#row-content").innerHTML += `
        <div class="purchase-row">
            <p class="purchase-path">${data.trips[i].departure} > ${data.trips[i].arrival}</p>
            <p class="purchase-departure">${hour}</p>
            <p class="purchase-price">${data.trips[i].price}$</p>
            <button class="purchase-book" data-id="${data.trips[i]._id}">book</button>
          </div>`;
        }
      });
  } else {
    console.log("vos champs sont vides");
    document.querySelector(".notfound-content").style.display = "flex";
    document.querySelector("#row-content").style.display = "none";
  }
});
