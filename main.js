function addTransaction() {
    let dateValue = document.getElementById("date").value;
    let priceValue = document.getElementById("price").value;
    let itemValue = document.getElementById("item").value;
    
    let selectionValue = document.getElementsByName("transactionType");

    if ((selectionValue[0].checked==false) && (selectionValue[1].checked==false)) {
        alert("Error, no transaction type chosen!");
        return;
    }
    else if (dateValue=="") {
        alert("Error, no date entered!");
        return;
    }
    else if (priceValue==null || priceValue=="") {
        alert("Error, no price entered!");
        return;
    }
    else if (itemValue==null || itemValue=="") {
        alert("Error, no item entered!");
        return;
    }
    else {
        localStorage.setItem("date", dateValue);
        let date = localStorage.getItem("date");
        localStorage.setItem("price", priceValue);
        let price = localStorage.getItem("price");
        localStorage.setItem("item", itemValue);
        let item = localStorage.getItem("item");
        localStorage.setItem("selection", selectionValue);
        let selection = localStorage.getItem("selection");

        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "listItem");
        newDiv.innerHTML = `<li>${item}<span id="dateDisplay">${date}</span><span id="priceDisplay">${price}</span></li>`;
        document.getElementsByTagName("ul")[0].append(newDiv);
        let deleteTransactionButton = document.createElement("button");
        deleteTransactionButton.setAttribute("id", "deleteTransaction");
        newDiv.append(deleteTransactionButton);
    }
}

function deleteTransaction() {}