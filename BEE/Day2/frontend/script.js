function js(prem){
    if(prem){
        console.log("HELLO FROM JS");
    }else{
        console.log("HELLO")
    }
}

// Example products list
const productsList = [
    { name: "Product 1", price: "$10", description: "This is a great product." },
    { name: "Product 2", price: "$20", description: "This product is even better." },
    { name: "Product 3", price: "$30", description: "You will love this product." }
];

function loaddata(){
    // fetch the data from server
    // convert the data into html

    document.getElementById("tag1").innerHTML =
    `<table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${productsList.map(product => `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;
}

setTimeout(js,2000,true);
setTimeout(loaddata,1000);




