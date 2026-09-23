// function sayHello() {
//   console.log(document.getElementById("floatingInput").value);
// }
// var emailInput = document.getElementById("floatingInput");
// var passwordInput = document.getElementById("floatingPassword");

// function clearData() {
//   emailInput.value = "";

//   passwordInput.value = "";
// }
// function sayHello() {
//   // emailInput = null;
//   // passwordInput = null;
//   console.log(emailInput.value);
//   console.log(passwordInput.value);
// }

/*
Crud Operation 

C => create
R => read | retrieve
u => Updade 
D => Delete 
S => search 

*/

// add New Product

var ProductName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productImage = document.getElementById("productImage");
var productCategory = document.getElementById("productCategory");
var productDiscription = document.getElementById("productDiscription");
var rowData = document.getElementById("rowData");
var updateBtn = document.getElementById("updateBtn");
var addBtn = document.getElementById("addBtn");
var productList = (productList = JSON.parse(localStorage.getItem("products")) || []);

// var productList = JSON.parse(localStorage.getItem("products"));
displayAllProudct();
// console.log(productList);

/* any update in original array requires: 
   1- store this upgate in local storeage
   2- display this update in UI
*/

function addNewproduct() {
  var newProduct = {
    name: ProductName.value,
    price: productPrice.value,
    image: productImage.files[0] ? `imgs/${productImage.files[0].name}` : `imgs/2.jpg`,
    category: productCategory.value,
    discription: productDiscription.value,
  };

  productList.push(newProduct);
  localStorage.setItem("products", JSON.stringify(productList));
  displayAllProudct();
  clearForm();

  // console.log(productList);
}

function clearForm() {
  ProductName.value = "";
  productPrice.value = "";
  productImage.value = "";
  productCategory.value = "";
  productDiscription.value = "";
}

function displayAllProudct() {
  var box = "";
  for (var i = 0; i < productList.length; i++) {
    box += `<div class="col-4 mb-5">
          <div class="card">
            <img src="${productList[i].image}" class="card-img-top" alt="..." multiple />
            <div class="card-body">
              <h5 class="card-title">${productList[i].name}</h5>
              <p>${productList[i].price}</p>
              <h4>${productList[i].category}</h4>
              <p class="card-text">${productList[i].discription}</p>
              <div class="d-flex justify-content-between flex-row gap-2">
              <button class="btn  w-100 btn-danger " onclick="deleteThisProduct(${i})">Delete</button>
              <button class="btn  w-100 btn-warning" onclick="updateProduct(${i})">Update</button>
              </div>
            </div>
          </div></div>
          `;
  }
  rowData.innerHTML = box;
}

function deleteThisProduct(index) {
  productList.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productList));
  displayAllProudct();
}

var globalIndex;
function updateProduct(index) {
  globalIndex = index;
  showUpdateHideAdd();
  ProductName.value = productList[index].name;
  productPrice.value = productList[index].price;
  productCategory.value = productList[index].category;
  productDiscription.value = productList[index].discription;
}

function updateThisProduct() {
  // console.log("update this product ");

  var updatedProduct = {
    name: ProductName.value,
    price: productPrice.value,
    image: productImage.files[0] ? `imgs/${productImage.files[0].name}` : `imgs/2.jpg`,
    category: productCategory.value,
    discription: productDiscription.value,
  };

  productList[globalIndex] = updatedProduct;
  localStorage.setItem("products", JSON.stringify(productList));
  displayAllProudct();
  showAddHideUpdate();
  clearForm();
}

function showUpdateHideAdd() {
  updateBtn.classList.remove("d-none");
  addBtn.classList.add("d-none");
}
function showAddHideUpdate() {
  updateBtn.classList.add("d-none");
  addBtn.classList.remove("d-none");
}

function searchProduct(input) {
  // var productSearch = document.getElementById("productSearch");
  console.log(input.value);

  var box = "";
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].name.toLowerCase().includes(input.value.toLowerCase())) {
      box += `<div class="col-4 mb-5">
          <div class="card">
            <img src="${productList[i].image}" class="card-img-top" alt="..." multiple />
            <div class="card-body">
              <h5 class="card-title">${productList[i].name}</h5>
              <p>${productList[i].price}</p>
              <h4>${productList[i].category}</h4>
              <p class="card-text">${productList[i].discription}</p>
              <div class="d-flex justify-content-between flex-row gap-2">
              <button class="btn  w-100 btn-danger " onclick="deleteThisProduct(${i})">Delete</button>
              <button class="btn  w-100 btn-warning" onclick="updateProduct(${i})">Update</button>
              </div>
            </div>
          </div></div>
          `;
    }
  }
  rowData.innerHTML = box;
}
