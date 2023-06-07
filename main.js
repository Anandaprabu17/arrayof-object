let phoneDetails = [{
    name: "Iphone",
    model: "mini",
    price: 145000,
    colorVarient: "white"
},
{
    name: "redmi",
    model: "pro max",
    price: 20000,
    colorVarient: "white"
},
{
    name: "oneplus",
    model: "nord",
    price: 25000,
    colorVarient: "blue"
}]
phoneDetails.forEach(function (element) {
    if (element.price <= 20000) {
        document.write(`Brand Name: ${element.name + " " + element.model}`, "<br>");
        document.write(`Price:${element.price}`, "<br>");
    }
    else {
        document.write("No stock", "<br>");
    }
})
document.write("<br>", "<br>")

phoneDetails.forEach(function (element) {
    for (let key in element) {
        if (key == "price") {
            if (element[key] <= 20000) {
                document.write(`${element.name + " " + element.model} cost less than 20000`, "<br>");
            }
            else {
                document.write("No stock", "<br>");
            }
        }
    }
})