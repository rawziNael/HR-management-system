function Employee(id, firstName, lastName,department,level) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName + " " + this.lastName;
    this.department = department;
    this.level = level;
    //this.image = 
  };

  Employee.prototype.checkSalary = function(){
        //this.level = level;`
        let level = this.level;
        if((level ==="junior")||(level ==="Junior")){
            this.salary = 500 + (Math.floor(Math.random() * 500) + 1);
            this.netSalary = this.salary - (this.salary * 0.075);
            console.log(this.netSalary);
        }else if((level ==="Mid-Senior")||(level ==="mid-senior")){
            this.salary = 1000 + (Math.floor(Math.random() * 500) + 1);
            this.netSalary = this.salary - (this.salary * 0.075);
            console.log(this.netSalary);
        }else if((level ==="Senior")||(level ==="senior")){
            this.salary = 1500 + (Math.floor(Math.random() * 500) + 1);
            this.netSalary = this.salary - (this.salary * 0.075);
            console.log(this.netSalary);
        }else{
            return "invalid input";
        }
 events
        document.write(`<h1>${this.level}</h1>`);
=======
        document.write(`<h1>${this.salary} ,${this.fullName}</h1>`);
 main
  }
  const ghazi = new Employee(1000 ,"Ghazi","Samer","Administration","senior");
  ghazi.checkSalary();
  console.log(ghazi);
  const lana = new Employee(1001 ,"Lana","Ali","Finance","senior");
  lana.checkSalary();
  console.log(lana);
  const tamara = new Employee(1002 ,"Tamara","Ayoub","Marketing","senior");
  tamara.checkSalary();
  console.log(tamara);
  const safi = new Employee(1003 ,"Safi","Waleed","Administration","mid-senior");
  safi.checkSalary();
  console.log(safi);
  const omar = new Employee(1004 ,"Omar","Zaid","Development","Senior");
  omar.checkSalary();
  console.log(omar);
  const rana = new Employee(1005 ,"Rana","Saleh","Development","junior");
  rana.checkSalary();
  console.log(rana);
  const hadi = new Employee(1006 ,"Hadi","Ahmad","Finance","mid-senior");
  hadi.checkSalary();
 events
  console.log(hadi);
  
 
  console.log(`${this.level}`)
=======
  console.log(hadi);
 main
