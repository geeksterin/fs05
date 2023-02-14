const billItems = [{
    id: 1,
    itemName: "Bread",
    price: 20,
  }, {
    id: 2,
    itemName: "Butter",
    price: 50
  }, {
    id: 3,
    itemName: "Tomatoes",
    price: 30
  }, {
    id: 4,
    itemName: "Onion",
    price: 40
  }, {
    id: 5,
    itemName: "Pomegranate",
    price: 60
  }, {
    id: 6,
    itemName: "Apple",
    price: 40
  }, {
    id: 7,
    itemName: "Grapes",
    price: 30
  }, {
    id: 8,
    itemName: "Mango",
    price: 100
}];

// create a working input search bar 
// this ----> event.target
function onChangeHandler(event){
    let word = event.value.toLowerCase();
    console.log('word is',word);
    let filteredList = [];
    billItems.forEach((item)=>{   
        let isFilter = false;  
        for(let key in item){       
            if(item[key].toString().toLowerCase().includes(word))
                isFilter = true;
        }
        if(isFilter)
            filteredList.push(item);
    });
    console.log('filtered list',filteredList);
    createAndUpdateTable(filteredList);
}

//create the table dynamically

const table = document.querySelector('table');

function createHeader()
{
    const thead = document.createElement('thead');
    const itemOne = billItems[0];
    for(key in itemOne){
        const col = document.createElement('td');
        col.innerText = key;
        thead.append(col);
    }
    table.append(thead);
}

//-------------------CREATE AND UPDATE TABLE------------------
function createAndUpdateTable(items){
    table.innerHTML=``;
    createHeader();
    // create tbody ---> 8 rows and 3 columns ----> append to tbody---->table
    const tbody=document.createElement('tbody');
    items.forEach((item)=>{
        const row = document.createElement('tr');

        for(key in item){
            const col = document.createElement('td');
            col.innerText = item[key];
            row.append(col);
        }
        tbody.append(row);
    });
    table.append(tbody);
}

createAndUpdateTable(billItems);