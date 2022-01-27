function Employee(firstName, department,level, image , id) {
    this.fullName = firstName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.id =generateId();
  };

  function generateId(){
    const id = Math.floor(1000 + Math.random() * 5000);
      return id;
  }
  
  let data = document.getElementById("section1");


  Employee.prototype.render=function(){
    let div = document.createElement('div');
    section2.appendChild(div);
    div.className= "gallery";

    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src', `${this.image}`);


    let h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.textContent="Name: " + this.fullName;
    h2.className= "center";

    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent="Department: " + this.department;
    h3.className= "center";

    let h4 = document.createElement('h4');
    div.appendChild(h4);
    h4.textContent="Level: " + this.level;
    h4.className= "center";

    let h5 = document.createElement('h5');
    div.appendChild(h5);
    h5.textContent= "Id - " + this.id;
    h5.className= "center";
}
let form = document.getElementById("fill");
console.log(form);
 form.addEventListener("submit", fillForm);

function fillForm(event){
    event.preventDefault();
    let fname = event.target.fname.value;
    let department= event.target.department.value;
    let level= event.target.level.value;
    let image= event.target.image.value;
    let id = event.target.image.value;
    let employee = new Employee(fname,department,level, image ,id);
    employee.render();
}




