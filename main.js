let totalIncome = 0;
let totalExpenses = 0;
let balance = 0;

function deleteButton() {
    let element = this.parentElement;

    let priceSpan = element.querySelector("span[id*='price']");
    let priceText = priceSpan.textContent.trim();
    let price = parseFloat(priceText.replace(/[^\d.-]/g, ""));

    if (priceText.includes("-")) { // Expense
        totalExpenses = totalExpenses + price;
    } else { // Income
        totalIncome = totalIncome - price;
    }

    balance = totalIncome - totalExpenses;

    updateBalance();

    element.remove();
}

function createButton() {
    let deleteTransactionButton = document.createElement("button");
    deleteTransactionButton.setAttribute("id", "deleteTransactionButton");
    deleteTransactionButton.addEventListener("click", deleteButton);
    deleteTransactionButton.innerHTML = "X";
    return deleteTransactionButton;
}

function addTransaction() {
    let dateValue = document.getElementById("date").value;
    let priceValue = document.getElementById("price").value;
    let itemValue = document.getElementById("item").value;
    
    let selectionValue = document.getElementsByName("transactionType");

    if ((selectionValue[0].checked==false) && (selectionValue[1].checked==false)) { //Test 1
        alert("Error, no transaction type chosen!");
        return;
    }
    else if (dateValue=="") { //Test 2
        alert("Error, no date entered!");
        return;
    }
    else if (priceValue==null || priceValue=="") { //Test 3
        alert("Error, no price entered!");
        return;
    }
    else if (itemValue==null || itemValue=="") { //Test 4
        alert("Error, no item entered!");
        return;
    }
    else { //All tests passed then execute

        let date = dateValue;
        let price = priceValue;
        let item = itemValue;

        if (selectionValue[0].checked==true) { //Expense
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "listItem");
            newDiv.innerHTML = `<li><span id="itemDisplay">${item}</span><span id="dateDisplay">${date}</span><span id="priceExpenseSpan">-$${price}</span></li>`;
            document.getElementsByTagName("ul")[0].append(newDiv);
            let deleteButton = createButton();
            newDiv.append(deleteButton);

            totalExpenses = Number(totalExpenses) + Number(price);
            balance = Number(totalIncome) - Number(totalExpenses);
        }
        else { //Income
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "listItem");
            newDiv.innerHTML = `<li><span id="itemDisplay">${item}</span><span id="dateDisplay">${date}</span><span id="priceIncomeSpan">+$${price}</span></li>`;
            document.getElementsByTagName("ul")[0].append(newDiv);
            let deleteButton = createButton();
            newDiv.append(deleteButton);

            totalIncome = Number(totalIncome) + Number(price);
            balance = Number(totalIncome) - Number(totalExpenses);
        }
    }
}

function updateBalance() {
    let balanceDisplay = document.getElementById("balanceSpan");
    balanceDisplay.textContent = `$${Number(balance)}`;

    let expensesDisplay = document.getElementById("expensesSpan");
    expensesDisplay.textContent = `$${Number(totalExpenses)}`;

    let incomeDisplay = document.getElementById("incomeSpan");
    incomeDisplay.textContent = `$${Number(totalIncome)}`;
}