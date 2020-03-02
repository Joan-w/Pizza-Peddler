const order = document.getElementById("btn");
order.addEventListener("click", function(){
    
    var pizzaSize = parseInt(document.getElementById("size").value);
    var pizzaCrust = parseInt(document.getElementById("crust").value);
    var pizzaToppings = parseInt(document.getElementById("pizzaToppings").value);
    var quantity = parseInt(document.getElementById("quantity").value);
        
    var totalCost = (pizzaSize + pizzaCrust + pizzaToppings) * quantity;

    alert(`Your order has been received amounting to ${totalCost}`);
    prompt(`please enterb your location.`);
    alert(`Your order will be delivered in afew, please have some ksh. 200 for delivery.`)

    if (delivery.checked) {
        
    } else {
        
    }
    prompt(``)

    


});