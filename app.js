var carObject={
    vehicle: 'car',
    farePerKilo:3,
    capacity:4,
    imageUrl:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam earum recusandae minus maiores exercitationem architecto corporis voluptas, perferendis nulla commodi veniam ipsam dolore optio quos ut cum distinctio eveniet accusamus?"

}
var bikeObject={
    vehicle: 'bike',
    farePerKilo:2,
    capacity:2,
    imageUrl:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60",
    discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam earum recusandae minus maiores exercitationem architecto corporis voluptas, perferendis nulla commodi veniam ipsam dolore optio quos ut cum distinctio eveniet accusamus?"


}
var busObject={
    vehicle: 'bus',
    farePerKilo:3,
    capacity:30,
    imageUrl:"https://images.unsplash.com/photo-1590922144791-347af7dd9dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60",
    discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam earum recusandae minus maiores exercitationem architecto corporis voluptas, perferendis nulla commodi veniam ipsam dolore optio quos ut cum distinctio eveniet accusamus?"

}

function displaySurvices(service){
    const mainSection=document.getElementById('main-section');
    const stringified=JSON.stringify(service);


    const div = document.createElement('div');
    div.innerHTML=`
    <div class="card mb-3 mt-3 mx-auto" style="max-width: 800px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src=${service.imageUrl} class="img-fluid h-100 rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
                <p class="card-text"> ${service.discription}</p>
                <p class="card-text"><small class="text-muted">fare per kilo:${service.farePerKilo}</small></p><small class="text-muted">capacity:${service.capacity}</small></p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringified})' data-bs-target="#exampleModal">
                Launch demo modal
                </button>
            </div>
        </div>
    </div>
</div>
    `
    mainSection.appendChild(div)

}
displaySurvices(carObject);
displaySurvices(bikeObject);
displaySurvices(busObject);

function handleBooking(obj){
    const modalBody=document.getElementById('modal-body');
    const stringified=JSON.stringify(obj);

    modalBody.innerHTML=`
    <div class="card mx-auto" style="width: 18rem;">
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">vehicle mood:${obj.vehicle}</h5>
    <p class="card-text">discription:${obj.discription}</p>
    <p class="card-text"><small class="text-muted">fare per kilo:${obj.farePerKilo}</small></p><small class="text-muted">capacity:${obj.capacity}</small></p>
    <div class="d-flex flex-column" role="search">

    <p>fare: <small class="text-muted" id='fare'></small>  </P
    <p>tax: <small class="text-muted" id='tax'></small>  </P
    <p>total cost: <small class="text-muted" id='total-cost'></small>  </P

  >
    <input class="form-control m-2"  id="quantity-input" type="number" placeholder="koyta gari lagbe?" aria-label="Search"/>
    <input class="form-control m-2"  id="distance-input" type="number" placeholder="koto kilo jaba?" aria-label="Search"/>
    <button class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringified})'>Submit</button>
    </div>
    
    </div>
    </div>
    `
 
}
function calculateCost(obj){
    const quantity=document.getElementById('quantity-input').value;
    const distance=document.getElementById('distance-input').value;

    const fareDiv=document.getElementById("fare");
    fareDiv.innerHTML=quantity* distance* obj.farePerKilo;

    const taxDiv=document.getElementById("tax");
    taxDiv.innerHTML=quantity*distance*obj.farePerKilo*0.2;
    

    const totalCostDiv=document.getElementById("total-cost");
    totalCostDiv.innerHTML=parseFloat(fareDiv.innerHTML)  + parseFloat(taxDiv.innerHTML);
    

    console.log(quantity,distance)
console.log(obj);
}