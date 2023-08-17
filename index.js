// let total = 0;

// function handleCLikBtn(target) {
//   const selectedItemContainer = document.getElementById("selected-items");
//   const itemName = target.parentNode.childNodes[1].innerText;
//   const li = document.createElement("li");
//   li.innerText = itemName;
//   selectedItemContainer.appendChild(li);
//   const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
//   total = parseInt(total) + parseInt(price);
//   document.getElementById("total").innerText = total;
// }

// // document.getElementById("").addEventListener("click", function (e) {
// //     e.target
// // })

// .innerText.split(' ')[1]
let total = 0;
function handleCLikBtn(target) {
    const itemContainer = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[1].innerText;
    // for (const item of itemContainer.children) {
    //     if (item.innerText === itemName) {
    //         alert('Item already added');
    //         return; // Ignore adding duplicate item
    //     }
    // }
    if (itemContainer.children.length > 5) {
        alert('please go back')
        return;
    }
    const li = document.createElement('li');
    li.innerText = itemName;
    itemContainer.appendChild(li);

    console.log(itemContainer.children);
    const price = target.parentNode.childNodes[5].innerText.split(' ')[1];
    const amount = document.getElementById('total');
    total = parseFloat(total) + parseFloat(price);
    amount.innerText = total.toFixed(2)
    const discount = document.getElementById('discount');
    const percentage = parseFloat(discount.value);
    const discountText = document.getElementById('dis');
    discountText.innerText = percentage + '%';
    const discountPrice = (total * (percentage)) / 100;
    const grandTotal = document.getElementById('grand');
    const finalGrandTotal = (total - discountPrice).toFixed(2)
    grandTotal.innerText = finalGrandTotal;


}