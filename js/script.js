const order = document.getElementById("button");
order.addEventListener("click", function(){
    
    var size = parseInt(document.getElementById("pizzaSize").value);
    var crust = parseInt(document.getElementById("pizzaCrust").value);
    var toppings = parseInt(document.getElementById("pizzaToppings").value);
    var quantity = parseInt(document.getElementById("quantity").value);
        
    var totalAmount = (size + crust + toppings) * quantity;

    alert(`The total amount of your order is ${totalAmount}`);
    prompt(`Do you want your order delivered to you? Please type in your location....`);
    alert(`Ensure you have Ksh. 100 for delivery. Thank you for placing an order at Pizza Peddlers.`)            

});