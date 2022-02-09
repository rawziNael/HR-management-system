function render(employeeStorage) {
    let div = document.createElement('div');
    div.innerHTML = '';
    for (let i = 0; i < employeeStorage.length; i++) {
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
    }
  }