fetch('http://localhost:3000/carts', {
    method: "GET",
  })
  .then (response => response.json())
  .then (data => {
    console.log(data)
    
    for (let i = 0; i < data.length; i++) {
      document.querySelector('#purchase-container').innerHTML += `
      <div class="purchase-row">
          <p class="purchase-path">${data[i].departure} > ${data[i].arrival}</p>
          <p class="purchase-departure">HEURE</p>
          <p class="purchase-price">${data[i].price}$</p>
          <span class="delete">&#215;</span>
        </div>`
       
    }
  })





function supTrip() {
  let X = document.querySelectorAll('.delete');
  for (let i = 0; i < X.length; i++) {
  X[i].addEventListener('click', function() {
    this.parentNode.remove();
    compteur();
  })
}
}
supTrip();