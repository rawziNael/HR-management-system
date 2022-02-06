function Employee(firstName, department, level, image, id) {
  this.fullName = firstName;
  this.department = department;
  this.level = level;
  this.image = image;
  this.id = generateId();
};

function generateId() {
  const id = Math.floor(1000 + Math.random() * 5000);
  return id;
}

let form= document.getElementById('form');
let data = document.getElementById("section1");
//create array
let allEmployees = [];
//call the function
checkLocalAndPush();


function render(employeeStorage) {
  for (let i = 0; i < employeeStorage.length; i++) {
    let div = document.createElement('div');
    section2.appendChild(div);
    div.className = "gallery";

    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src', `${employeeStorage[i].image}`);


    let h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.textContent = "Name: " + employeeStorage[i].fullName;
    h2.className = "center";

    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent = "Department: " + employeeStorage[i].department;
    h3.className = "center";

    let h4 = document.createElement('h4');
    div.appendChild(h4);
    h4.textContent = "Level: " + employeeStorage[i].level;
    h4.className = "center";

    let h5 = document.createElement('h5');
    div.appendChild(h5);
    h5.textContent = "Id - " + employeeStorage[i].id;
    h5.className = "center";

    // let form = document.getElementById("fill");
    // console.log(form);
  }
}


function fillForm(event) {
  event.preventDefault();
  let fname = event.target.fname.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let image = event.target.image.value;
  let id = event.target.image.value;
  let employee = new Employee(fname, department, level, image, id);
  //read from form
  allEmployees.push(employee);
  //convert to JSON
  let jsonArray = toJSON();
  //save the converted array to localstorage
  saveToLocalS(jsonArray);

  render(readFromLocalS());
}
//add local storage function

function checkLocalAndPush() {
  if (allEmployees.length == 0) {
    let arr = readFromLocalS();
    if (arr.length != 0) {
      allEmployees = arr;
    }
  }
}

function readFromLocalS() {
  let jsonArr = localStorage.getItem('employees');
  let arr = JSON.parse(jsonArr);
  if (arr !== null) {
    return arr;
  } else {
    return [];
  }
}

function toJSON() {
  let jsonArray = JSON.stringify(allEmployees);
  return jsonArray;
}

function saveToLocalS(jsonArray) {
  localStorage.setItem('employees', jsonArray)
}
render(readFromLocalS());
console.log(form);
form.addEventListener('submit',fillForm );
