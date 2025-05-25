const products = [
    { year: 1975, name: "Altair BASIC", deprecated: false },
    { year: 1983, name: "Microsoft Word", deprecated: false },
    { year: 1985, name: "Windows 1.0", deprecated: true },
    { year: 1990, name: "Windows 3.0", deprecated: true },
    { year: 1995, name: "Windows 95", deprecated: true },
    { year: 2001, name: "Windows XP", deprecated: true },
    { year: 2007, name: "Windows Vista", deprecated: true },
    { year: 2009, name: "Windows 7", deprecated: true },
    { year: 2012, name: "Windows 8", deprecated: true },
    { year: 2015, name: "Windows 10", deprecated: false },
    { year: 2021, name: "Windows 11", deprecated: false },
    { year: 1986, name: "Microsoft Excel", deprecated: false },
    { year: 1995, name: "Internet Explorer", deprecated: true },
    { year: 2015, name: "Microsoft Edge", deprecated: false },
    { year: 2000, name: "Xbox", deprecated: false },
    { year: 2005, name: "Xbox 360", deprecated: true },
    { year: 2013, name: "Xbox One", deprecated: false },
    { year: 2020, name: "Xbox Series X/S", deprecated: false },
];

function generateProductList() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.year}: ${product.name} ${product.deprecated ? "(Deprecated)" : ""}`;
        productList.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", generateProductList);