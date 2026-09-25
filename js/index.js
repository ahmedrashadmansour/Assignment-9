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
var addFavourite = document.getElementById("addFavourite");
var addEmergency = document.getElementById("addEmergency");
var favouriteList = document.getElementById("favouriteList");
var addFavouriteContactInHeader = document.getElementById("totalFavourite");
var contactAdress = document.getElementById("Contactaddress");

var emergencyList = document.getElementById("emergencyList");
var addEmergecnyContactInHeader = document.getElementById("totalEmergency");

var contactList = JSON.parse(localStorage.getItem("Contacts")) || [];
displayContactList();
displayFavourite();
displayEmergency();

function addNewContact() {
  var isFavCheckbox = document.getElementById("addFavouriteCheckbox");
  var isEmergCheckbox = document.getElementById("addEmergCheckbox");
  var newContact = {
    // image: contactImage.files[0]
    //   ? `imgs/${contactImage.files[0].name}`
    //   : `<span class="first-letter">A<span class="second-letter">R</span></span>`,
    name: fullName.value,
    number: phoneNumber.value,
    email: emailAddress.value,
    adress: adress.value,
    contactGroup: contactGroup.value,
    notes: notes.value,
    isFavorite: isFavCheckbox ? isFavCheckbox.checked : false,
    isEmergency: isEmergCheckbox ? isEmergCheckbox.checked : false,
  };

  //adding intaal letters
  // var separeteNames = [];
  // var fullContactName = newContact?.name || "";
  // if (fullContactName.trim() !== "") {
  //   separeteNames.push(...fullContactName.split(" "));
  // }
  // console.log(separeteNames[0]?.[0] || "No Initial");
  // console.log(separeteNames[1]?.[0] || "No Initial");
  // fullContactName.push(newContact.name);
  // var separeteNames = [fullContactName];

  contactList.push(newContact);
  localStorage.setItem("Contacts", JSON.stringify(contactList));
  displayContactList();

  displayFavourite();
  displayEmergency();
  clearAllInputs();

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

  var isFavCheckbox = document.getElementById("addFavouriteCheckbox");
  var isEmergCheckbox = document.getElementById("addEmergCheckbox");
  if (isFavCheckbox) isFavCheckbox.checked = false;
  if (isEmergCheckbox) isEmergCheckbox.checked = false;
}

//adding intaal letters
function getInitials(name) {
  if (!name || name.trim() === "") return "";

  var parts = name.trim().split(" ").filter(Boolean);
  var firstInitial = parts[0][0].toUpperCase();

  if (parts.length > 1) {
    var lastInitial = parts[parts.length - 1][0].toUpperCase();
    return firstInitial + lastInitial;
  }

  return firstInitial;
}

function displayContactList() {
  var box = "";

  for (var i = 0; i < contactList.length; i++) {
    var emergencyPillClass = contactList[i].isEmergency ? "" : "d-none";
    var starClass = contactList[i].isFavorite ? "yellow-icon" : "text-muted";
    var heartClass = contactList[i].isEmergency ? "red-icon" : "text-muted";
    var initials = getInitials(contactList[i].name);
    box += `<div class="col-12 col-md-6">
                        <div class="inner">
                          <div class="contact-card my-3 shadow-sm rounded-5 overflow-hidden">
                            <div class="contact-info p-3 bg-white pb-2">
                              <div class="contact-heading d-flex gap-3">
                                <div class="intial-letters font-18 fw-semibold name-gradient p-3 rounded-3 text-white mb-2" id="intialLetters">
                                  <!-- <img src="${contactList[i].image}" alt=""  class="z-3 w-100 h-100"/> -->
                                 <span class="first-letter">${initials}</span></span>   
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
                               <div class="address d-flex gap-2 align-items-center mb-2">
                                <span class="address-icon text-purple-with-bg-light font-11 p-2 rounded-2 d-block"
                                  ><i class="fa-solid fa-location-dot"></i>
                                </span>
                                <p class="address-icon text-muted font-14 m-0" id="Contactaddress">${contactList[i].adress}</p>
                              </div>
                              <div class="is-emergency-pill d-flex align-items-center font-11 rounded-3 mt-1 ${emergencyPillClass}">
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
                                <button id="addFavourite" class="add-favourite ${starClass}  font-14 p-2 rounded-2" onclick="addFavouriteContact(this,${i})">
                                  <i class="fa-solid fa-star"></i>
                                </button>
                                <button class="add-emergency rounded-2 " id="addEmergency" onclick="addEmergencyContact(this,${i})">
                                  <span class="d-block font-14 p-2 rounded-2 ${heartClass}"><i class="fa-solid fa-heart-pulse"></i></span>
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
  displayFavourite();
  displayEmergency();
}
var globalIndex = 0;
function editContact(index) {
  globalIndex = index;
  showUpdateHideSaveBtn();
  fullName.value = contactList[index].name;
  phoneNumber.value = contactList[index].number;
  emailAddress.value = contactList[index].email;
  adress.value = contactList[index].adress || "";
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
    contactGroup: contactGroup.value,
    notes: notes.value,
    isFavorite: contactList[globalIndex].isFavorite,
    isEmergency: contactList[globalIndex].isEmergency,
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

function addFavouriteContact(buttonElement, index) {
  // contactList[index].isFavorite = !contactList[index].isFavorite;
  // if (contactList[index].isFavorite) {
  //   buttonElement.classList.add("yellow-icon");
  // } else {
  //   buttonElement.classList.remove("yellow-icon");
  // }
  contactList[index].isFavorite = !contactList[index].isFavorite;
  localStorage.setItem("Contacts", JSON.stringify(contactList));
  displayContactList();
  displayFavourite();
}

function displayFavourite() {
  var box = "";

  for (var i = 0; i < contactList.length; i++) {
    if (contactList[i].isFavorite === true) {
      box += `<div class="contact-fav-lst d-flex shadow-sm p-3 py-1 bg-white">
              <div class="contact-fav-wrapper d-flex justify-content-between align-items-center flex-grow-1 p-2 contact-bg rounded-3">
                <div class="d-flex gap-3">
                  <div class="intial-letters font-18 fw-semibold bg-orange-gradient p-2 rounded-3">
                    <span class="first-letter text-white">${getInitials(contactList[i].name)}</span>
                  </div>
                  <div class="contact-info">
                    <p class="name m-0 font-14">${contactList[i].name}</p>
                    <p class="number m-0 font-12 text-muted">${contactList[i].number}</p>
                  </div>
                </div>
                <span class="call-icon d-block txt-green-color font-12 p-2 rounded-2 bg-light-green"
                  ><i class="fa-solid fa-phone"></i
                ></span>
              </div>
           </div>`;
    }
  }
  addFavouriteContactInHeader.innerHTML = `${contactList.filter((c) => c.isFavorite).length}`;
  favouriteList.innerHTML = box;

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

function addEmergencyContact(buttonElement, index) {
  // contactList[index].isEmergency = !contactList[index].isEmergency;
  // if (contactList[index].isEmergency) {
  //   buttonElement.classList.add("red-icon");
  // } else {
  //   buttonElement.classList.remove("red-icon");
  // }
  contactList[index].isEmergency = !contactList[index].isEmergency;
  localStorage.setItem("Contacts", JSON.stringify(contactList));
  displayContactList();
  displayEmergency();
}

function displayEmergency() {
  var box = "";

  for (var i = 0; i < contactList.length; i++) {
    if (contactList[i].isEmergency === true) {
      box += `      <div class="d-flex shadow-sm p-2 bg-white">
                      <div
                        class="contact-emergncy-wrapper d-flex justify-content-between align-items-center flex-grow-1 p-3 contact-bg rounded-3">
                        <div class="d-flex gap-3">
                          <div class="intial-letters font-18 fw-semibold bg-orange-gradient p-2 rounded-3">
                            <span class="first-letter text-white">${getInitials(contactList[i].name)}</span>
                          </div>
                          <div class="contact-info">
                            <p class="name m-0 font-14">${contactList[i].name}</p>
                            <p class="number m-0 font-12 text-muted">${contactList[i].number}</p>
                          </div>
                        </div>
                        <span class="call-icon d-block font-12 p-2 rounded-2 txt-red bg-light-red"><i class="fa-solid fa-phone"></i></span>
                      </div>
                    </div>`;
    }
  }
  addEmergecnyContactInHeader.innerHTML = `${contactList.filter((c) => c.isEmergency).length}`;
  emergencyList.innerHTML = box;

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
