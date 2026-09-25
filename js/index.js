// // function sayHello() {
// //   console.log(document.getElementById("floatingInput").value);
// // }
// // var emailInput = document.getElementById("floatingInput");
// // var passwordInput = document.getElementById("floatingPassword");

// // function clearData() {
// //   emailInput.value = "";

// //   passwordInput.value = "";
// // }
// // function sayHello() {
// //   // emailInput = null;
// //   // passwordInput = null;
// //   console.log(emailInput.value);
// //   console.log(passwordInput.value);
// // }

// /*
// Crud Operation

// C => create
// R => read | retrieve
// u => Updade
// D => Delete
// S => search

// */

// // add New Product

// var ProductName = document.getElementById("productName");
// var productPrice = document.getElementById("productPrice");
// var productImage = document.getElementById("productImage");
// var productCategory = document.getElementById("productCategory");
// var productDiscription = document.getElementById("productDiscription");
// var rowData = document.getElementById("rowData");
// var updateBtn = document.getElementById("updateBtn");
// var addBtn = document.getElementById("addBtn");
// var productList = (productList = JSON.parse(localStorage.getItem("products")) || []);

// // var productList = JSON.parse(localStorage.getItem("products"));
// displayAllProudct();
// // console.log(productList);

// /* any update in original array requires:
//    1- store this upgate in local storeage
//    2- display this update in UI
// */

// function addNewproduct() {
//   var newProduct = {
//     name: ProductName.value,
//     price: productPrice.value,
//     image: productImage.files[0] ? `imgs/${productImage.files[0].name}` : `imgs/2.jpg`,
//     category: productCategory.value,
//     discription: productDiscription.value,
//   };

//   productList.push(newProduct);
//   localStorage.setItem("products", JSON.stringify(productList));
//   displayAllProudct();
//   clearForm();

//   // console.log(productList);
// }

// function clearForm() {
//   ProductName.value = "";
//   productPrice.value = "";
//   productImage.value = "";
//   productCategory.value = "";
//   productDiscription.value = "";
// }

// function displayAllProudct() {
//   var box = "";
//   for (var i = 0; i < productList.length; i++) {
//     box += `<div class="col-4 mb-5">
//           <div class="card">
//             <img src="${productList[i].image}" class="card-img-top" alt="..." multiple />
//             <div class="card-body">
//               <h5 class="card-title">${productList[i].name}</h5>
//               <p>${productList[i].price}</p>
//               <h4>${productList[i].category}</h4>
//               <p class="card-text">${productList[i].discription}</p>
//               <div class="d-flex justify-content-between flex-row gap-2">
//               <button class="btn  w-100 btn-danger " onclick="deleteThisProduct(${i})">Delete</button>
//               <button class="btn  w-100 btn-warning" onclick="updateProduct(${i})">Update</button>
//               </div>
//             </div>
//           </div></div>
//           `;
//   }
//   rowData.innerHTML = box;
// }

// function deleteThisProduct(index) {
//   productList.splice(index, 1);
//   localStorage.setItem("products", JSON.stringify(productList));
//   displayAllProudct();
// }

// var globalIndex;
// function updateProduct(index) {
//   globalIndex = index;
//   showUpdateHideAdd();
//   ProductName.value = productList[index].name;
//   productPrice.value = productList[index].price;
//   productCategory.value = productList[index].category;
//   productDiscription.value = productList[index].discription;
// }

// function updateThisProduct() {
//   // console.log("update this product ");

//   var updatedProduct = {
//     name: ProductName.value,
//     price: productPrice.value,
//     image: productImage.files[0] ? `imgs/${productImage.files[0].name}` : `imgs/2.jpg`,
//     category: productCategory.value,
//     discription: productDiscription.value,
//   };

//   productList[globalIndex] = updatedProduct;
//   localStorage.setItem("products", JSON.stringify(productList));
//   displayAllProudct();
//   showAddHideUpdate();
//   clearForm();
// }

// function showUpdateHideAdd() {
//   updateBtn.classList.remove("d-none");
//   addBtn.classList.add("d-none");
// }
// function showAddHideUpdate() {
//   updateBtn.classList.add("d-none");
//   addBtn.classList.remove("d-none");
// }

// function searchProduct(input) {
//   // var productSearch = document.getElementById("productSearch");
//   console.log(input.value);

//   var box = "";
//   for (var i = 0; i < productList.length; i++) {
//     if (productList[i].name.toLowerCase().includes(input.value.toLowerCase())) {
//       box += `<div class="col-4 mb-5">
//           <div class="card">
//             <img src="${productList[i].image}" class="card-img-top" alt="..." multiple />
//             <div class="card-body">
//               <h5 class="card-title">${productList[i].name}</h5>
//               <p>${productList[i].price}</p>
//               <h4>${productList[i].category}</h4>
//               <p class="card-text">${productList[i].discription}</p>
//               <div class="d-flex justify-content-between flex-row gap-2">
//               <button class="btn  w-100 btn-danger " onclick="deleteThisProduct(${i})">Delete</button>
//               <button class="btn  w-100 btn-warning" onclick="updateProduct(${i})">Update</button>
//               </div>
//             </div>
//           </div></div>
//           `;
//     }
//   }
//   rowData.innerHTML = box;
// }

// var addContact = document.getElementById("addContact");
// var addFavourite = document.getElementById("addFavourite");
// var addEmergency = document.getElementById("addEmergency");
// var callIcon = document.getElementById("callIcon");
// var emailIcon = document.getElementById("emailIcon");
// var editContact = document.getElementById("editContact");
// var deleteContact = document.getElementById("deleteContact");
// var contactName = document.getElementById("contactName");
// var contactNumber = document.getElementById("contactNumber");
// var contactEmail = document.getElementById("contactEmail");

var contactImage = document.getElementById("photoInput");
var fullName = document.getElementById("nameInput");
var phoneNumber = document.getElementById("phoneInput");
var emailAddress = document.getElementById("emailInput");
var adress = document.getElementById("addressInput");
var contactGroup = document.getElementById("groupInput");
var notes = document.getElementById("noteInput");
var rowData = document.getElementById("addButnRowData");
var addingTotalContact = document.getElementById("paragraphCount");
var addTotalContactInHeader = document.getElementById("total-contacts");
var imagePathOrIntials = document.getElementById("intialLetters ");
var saveBtn = document.getElementById("saveContact");
var updateBtn = document.getElementById("saveUpdate");

var contactList = JSON.parse(localStorage.getItem("Contacts")) || [];
displayContactList();

//

function addNewContact() {
  var newContact = {
    // image: contactImage.files[0]
    //   ? `imgs/${contactImage.files[0].name}`
    //   : `<span class="first-letter">A<span class="second-letter">R</span></span>`,
    name: fullName.value,
    number: phoneNumber.value,
    email: emailAddress.value,
    adress: adress.value,
    adress: adress.value,
    contactGroup: contactGroup.value,
    notes: notes.value,
  };

  contactList.push(newContact);
  localStorage.setItem("Contacts", JSON.stringify(contactList));
  displayContactList();

  clearAllInputs();
  console.log(contactList);

  // to close button after adding contactts
  if (document.activeElement) {
    document.activeElement.blur();
  }

  // Hide the Bootstrap modal
  var modalElement = document.getElementById("addContactModal");
  var modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
}

function clearAllInputs() {
  contactImage.value = "";
  fullName.value = "";
  phoneNumber.value = "";
  emailAddress.value = "";
  adress.value = "";
  contactGroup.value = "";
  notes.value = "";
}

function displayContactList() {
  var box = "";
  // totalNumberOfContacts++;

  for (var i = 0; i < contactList.length; i++) {
    box += `<div class="col-12 col-md-6">
                        <div class="inner">
                          <div class="contact-card my-3 shadow-sm rounded-5 overflow-hidden">
                            <div class="contact-info p-3 bg-white pb-2">
                              <div class="contact-heading d-flex gap-3">
                                <div class="intial-letters font-18 fw-semibold name-gradient p-3 rounded-3 text-white mb-2" id="intialLetters">
                                  <!-- <img src="${contactList[i].image}" alt=""  class="z-3 w-100 h-100"/> -->
                                 <span class="first-letter">A<span class="second-letter">R</span></span>   
                                </div>
                                <div class="name-number">
                                  <h5 class="name text-capitalize m-0 fs-6 fw-semibold mb-2" id="contactName">${contactList[i].name}</h5>
                                  <p class="d-flex gap-2 align-items-center">
                                    <span class="p-1 txt-blue-with-bg-light rounded-2 font-11"><i class="fa-solid fa-phone"></i></span>
                                    <span class="number font-14 text-muted" id="contactNumber"> ${contactList[i].number}</span>
                                  </p>
                                </div>
                              </div>
                              <div class="email d-flex gap-2 align-items-center mb-2">
                                <span class="text-purple-with-bg-light font-11 p-2 rounded-2 d-block"
                                  ><i class="fa-solid fa-envelope"></i
                                ></span>
                                <p class="email text-muted font-14 m-0" id="contactEmail" >${contactList[i].email}</p>
                              </div>
                              <div class="is-emergency-pill d-flex align-items-center font-11 rounded-3 mt-1">
                                <span class="d-block p-2 ps-0 rounded-3"><i class="fa-solid fa-heart-pulse"></i></span>
                                <span>Emergency</span>
                              </div>
                            </div>
                            <div class="contact-controls py-2 px-3 d-flex justify-content-between font-14 rounded-2">
                              <div class="comunications d-flex gap-2 align-items-center">
                                <a class="call green-icon font-14 p-2 rounded-2" href="tel:${contactList[i].number}" id="callIcon">
                                  <span><i class="fa-solid fa-phone"></i></span>
                                </a>
                                <a href="mailto:${contactList[i].email}" class="email text-purple-with-bg-light font-14 p-2 rounded-2" id="emailIcon">
                                  <span><i class="fa-solid fa-envelope"></i></span>
                                </a>
                              </div>
                              <div class="contact-updates d-flex gap-2 align-items-center">
                                <button id="addFavourite" class="add-favourite yellow-icon font-14 p-2 rounded-2">
                                  <i class="fa-solid fa-star"></i>
                                </button>
                                <button class="add-emergency rounded-2" id="addEmergency">
                                  <span class="d-block font-14 p-2 rounded-2 red-icon"><i class="fa-solid fa-heart-pulse"></i></span>
                                </button>
                                   <!-- delete and update buttons -->
                                <button onclick="editContact (${i})" class="edit text-muted p-2" id="editContact"><i class="fa-solid fa-pen"></i></button>
                                <button onclick="deleteThisContact (${i})" class="delete text-muted p-2" id="deleteContact"><i class="fa-solid fa-trash"></i></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`;
  }
  rowData.innerHTML = box;
  //adding total contacts
  addingTotalContact.innerHTML = `Manage and organize your ${contactList.length} contacts`;
  addTotalContactInHeader.innerHTML = `${contactList.length}`;
}

function deleteThisContact(index) {
  contactList.splice(index, 1);
  localStorage.setItem("Contacts", JSON.stringify(contactList));
  displayContactList();
  // console.log(index);
}
var globalIndex = 0;
function editContact(index) {
  globalIndex = index;
  showUpdateHideSaveBtn();
  fullName.value = contactList[index].name;
  phoneNumber.value = contactList[index].number;
  emailAddress.value = contactList[index].email;
  adress.value = contactList[index].adress;
  contactGroup.value = contactList[index].contactGroup;
  notes.value = contactList[index].notes;

  // Get the modal id
  var modalElement = document.getElementById("addContactModal");

  // Get or create the Bootstrap Modal objext
  var modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
  modalInstance.show();
}

function updateThisContact() {
  var updatedContact = {
    name: fullName.value,
    number: phoneNumber.value,
    email: emailAddress.value,
    adress: adress.value,
    adress: adress.value,
    contactGroup: contactGroup.value,
    notes: notes.value,
  };
  contactList[globalIndex] = updatedContact;

  clearAllInputs();
  localStorage.setItem("Contacts", JSON.stringify(contactList));
  displayContactList();
  showSaveHideUpdateBtn();

  // to close button after adding contactts
  if (document.activeElement) {
    document.activeElement.blur();
  }

  // Hide the Bootstrap modal
  var modalElement = document.getElementById("addContactModal");
  var modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
}

function showUpdateHideSaveBtn() {
  updateBtn.classList.remove("d-none");
  saveBtn.classList.add("d-none");
}
function showSaveHideUpdateBtn() {
  saveBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");
}

function searchContact(input) {
  // var input = document.getElementById("contactSearch");
  console.log(input.value);

  var box = "";

  for (var i = 0; i < contactList.length; i++) {
    if (contactList[i].name.toLowerCase().includes(input.value.toLowerCase())) {
      box += `<div class="col-12 col-md-6">
                        <div class="inner">
                          <div class="contact-card my-3 shadow-sm rounded-5 overflow-hidden">
                            <div class="contact-info p-3 bg-white pb-2">
                              <div class="contact-heading d-flex gap-3">
                                <div class="intial-letters font-18 fw-semibold name-gradient p-3 rounded-3 text-white mb-2" id="intialLetters">
                                  <!-- <img src="${contactList[i].image}" alt=""  class="z-3 w-100 h-100"/> -->
                                 <span class="first-letter">A<span class="second-letter">R</span></span>   
                                </div>
                                <div class="name-number">
                                  <h5 class="name text-capitalize m-0 fs-6 fw-semibold mb-2" id="contactName">${contactList[i].name}</h5>
                                  <p class="d-flex gap-2 align-items-center">
                                    <span class="p-1 txt-blue-with-bg-light rounded-2 font-11"><i class="fa-solid fa-phone"></i></span>
                                    <span class="number font-14 text-muted" id="contactNumber"> ${contactList[i].number}</span>
                                  </p>
                                </div>
                              </div>
                              <div class="email d-flex gap-2 align-items-center mb-2">
                                <span class="text-purple-with-bg-light font-11 p-2 rounded-2 d-block"
                                  ><i class="fa-solid fa-envelope"></i
                                ></span>
                                <p class="email text-muted font-14 m-0" id="contactEmail" >${contactList[i].email}</p>
                              </div>
                              <div class="is-emergency-pill d-flex align-items-center font-11 rounded-3 mt-1">
                                <span class="d-block p-2 ps-0 rounded-3"><i class="fa-solid fa-heart-pulse"></i></span>
                                <span>Emergency</span>
                              </div>
                            </div>
                            <div class="contact-controls py-2 px-3 d-flex justify-content-between font-14 rounded-2">
                              <div class="comunications d-flex gap-2 align-items-center">
                                <a class="call green-icon font-14 p-2 rounded-2" href="tel:${contactList[i].number}" id="callIcon">
                                  <span><i class="fa-solid fa-phone"></i></span>
                                </a>
                                <a href="mailto:${contactList[i].email}" class="email text-purple-with-bg-light font-14 p-2 rounded-2" id="emailIcon">
                                  <span><i class="fa-solid fa-envelope"></i></span>
                                </a>
                              </div>
                              <div class="contact-updates d-flex gap-2 align-items-center">
                                <button id="addFavourite" class="add-favourite yellow-icon font-14 p-2 rounded-2">
                                  <i class="fa-solid fa-star"></i>
                                </button>
                                <button class="add-emergency rounded-2" id="addEmergency">
                                  <span class="d-block font-14 p-2 rounded-2 red-icon"><i class="fa-solid fa-heart-pulse"></i></span>
                                </button>
                                   <!-- delete and update buttons -->
                                <button onclick="editContact (${i})" class="edit text-muted p-2" id="editContact"><i class="fa-solid fa-pen"></i></button>
                                <button onclick="deleteThisContact (${i})" class="delete text-muted p-2" id="deleteContact"><i class="fa-solid fa-trash"></i></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`;
    }
  }
  rowData.innerHTML = box;
  //adding total contacts
  addingTotalContact.innerHTML = `Manage and organize your ${contactList.length} contacts`;
  addTotalContactInHeader.innerHTML = `${contactList.length}`;
}
