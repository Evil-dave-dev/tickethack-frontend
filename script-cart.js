fetch('http://localhost:3000/carts', {
    method: "GET",
  })
  .then (response => response.json())
  .then (data => {
    
   function supTrip() {
      let X = document.querySelectorAll('.delete');
      for (let i = 0; i < X.length; i++) {
        
      X[i].addEventListener('click', function() {
        this.parentNode.remove();
        fetch(`http://localhost:3000/carts/deleteOne/${data[i]._id}`, {
          method: "DELETE",
    });
      })
    }
    }
    let totalCost = 0;
    for (let i = 0; i < data.length; i++) {
      document.querySelector('#purchase-container').innerHTML += `
      <div class="purchase-row">
          <p class="purchase-path">${data[i].departure} > ${data[i].arrival}</p>
          <p class="purchase-departure">HEURE</p>
          <p class="purchase-price">${data[i].price}$</p>
          <span class="delete">&#215;</span>
        </div>`
        supTrip();
        
        totalCost += data[i].price
        console.log(totalCost)
       // totalCost += document.querySelectorAll('.purchase-price');
    }

    document.querySelector('#total').textContent = totalCost;
  })









