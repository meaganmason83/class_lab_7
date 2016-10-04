'use strict';

var round = function(num, precision) {
  return parseFloat(num.toFixed(precision));
};

var allKiosks = [];

function Kiosk(name, minCustomer, maxCustomer, averageCups, averagePounds) {
   this.name = name;
   this.minCustomer = minCustomer;
   this.maxCustomer = maxCustomer;
   this.averageCups = averageCups;
   this.averagePounds = averagePounds;
   this.hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
   this.customerPerHour = [];
   this.customerPerDay = 0;
   this.totalCustomers = 0;
   this.cupsPerHour = [];
   this.cupsPerDay = 0;
   this.cupsIntoPounds = [];
   this.cupsPlusPounds = [];
   this.poundsPerHour = [];
   this.poundsPerDay = 0;
   this.totalBeansPerHour = [];
   this.totalBeansPerDay = 0;
   this.dailyToGoPackages = 0;
   this.employeesPerHour = [];
   this.employeesPerDay = 0;
   this.stringsForDOM = [];
   this.stringsForDOM = [];
   allKiosks.push(this);
   }

   Kiosk.prototype.getRandomCustomer = function() {
     this.getRandomCustomer = function(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
   };

    Kiosk.prototype.generateCustomerData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.customerPerHour.push(this.getRandomCustomer(this.minCustomer, this.maxCustomer));
        this.customerPerDay += this.customerPerHour[i];
    }
  };
    Kiosk.prototype.generateTotalCustomers = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.totalCustomers += this.customerPerHour[i];
    }
  };

    Kiosk.prototype.generateCupsData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.cupsPerHour.push(this.customerPerHour[i] * this.averageCups);
        this.cupsPerDay += this.cupsPerHour[i];
    }
  };

    Kiosk.prototype.generateLbsData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.poundsPerHour.push(this.customerPerHour[i] * this.averagePounds);
        this.poundsPerDay += this.poundsPerHour[i];
    }
  };

    Kiosk.prototype.generateCupsLbsData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.cupsIntoPounds.push(this.cupsPerHour[i] / 16);
    }
  };

    Kiosk.prototype.generateCupsPlusLbsData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.cupsPlusPounds.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
    }
  };

    Kiosk.prototype.generateBeansData = function() {
        for (var i = 0; i < this.hoursOpen.length; i++) {
          this.totalBeansPerHour.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
          this.totalBeansPerDay += this.totalBeansPerHour[i];
    }
  };

    Kiosk.prototype.generateEmployeeData = function() {
        for (var i = 0; i < this.hoursOpen.length; i++) {
          this.employeesPerHour.push(Math.ceil(this.customerPerHour[i] / 30));
          this.employeesPerDay += this.employeesPerHour[i];
    }
  };
    //add html code? this method isn't functioning correctly
  //   Kiosk.prototype.generateDOMData = function() {
  //       for (var i = 0; i < this.stringsForDOM.length; i++) {
  //         var ulEl = document.createElement('ul');
  //         var liEl = document.createElement('li');
  //         liEl.textContent = this.stringsForDOM[i];
  //         ulEl.appendChild(liEl);
  //         console.log('ulEl', ulel);
  //   }
  //       var domLink = document.createElement('new-table');
  //       domLink.appendChild(this.ulEl);
  // };

    Kiosk.prototype.generateStringsForDOM = function() {
        for (var i = 0; i < this.hoursOpen.length; i++) {
          this.stringsForDOM.push(this.hoursOpen[i] + ': ' + parseFloat(this.totalBeansPerHour[i].toFixed(2)) + ' lbs [' + parseFloat(this.customerPerHour[i].toFixed(0)) + ' customers, ' + parseFloat(this.cupsPerHour[i].toFixed(1)) + ' cups (' + parseFloat(this.cupsIntoPounds[i].toFixed(1)) + ' lbs), ' + parseFloat(this.poundsPerHour[i].toFixed(0)) + ' lbs to-go]');
        }
        this.stringsForDOM.push('Total customers at ' + this.name + ': ' + this.totalCustomers);
        this.stringsForDOM.push('Total cups sold at ' + this.name + ': ' + parseFloat(this.cupsPerDay.toFixed(2)));
        this.stringsForDOM.push('Total to-go pound packages sold at ' + this.name + ': ' + parseFloat(this.poundsPerDay.toFixed(2))); //can't figure this out
        this.stringsForDOM.push('Total pounds of beans needed at ' + this.name + ': ' + parseFloat(this.totalBeansPerDay.toFixed(2)));//can't figure this out
    }
  };

    Kiosk.prototype.callMethods = function() {
      this.getRandomCustomer();
      this.generateCustomerData();
      this.generateTotalCustomers();
      this.generateCupsData();
      this.generateLbsData();
      this.generateCupsLbsData();
      this.generateCupsPlusLbsData();
      this.generateBeansData();
      this.generateEmployeeData();
      // this.generateDOMData();
      this.generateStringsForDOM();
  }

 new Kiosk('Pike Place Market', 14, 35, 1.2, 0.34);
 new Kiosk('Capitol Hill', 12, 28, 3.2, 0.03);
 new Kiosk('Seattle Public Library', 9, 45, 2.6, 0.02);
 new Kiosk('South Lake Union', 5, 18, 1.3, 0.04);
 new Kiosk('Sea-Tac Airport', 28, 44, 1.1, 0.41);

 function makeAllKiosks() {
  for (var i = 0; i < allKiosks.length; i++) {
    allKiosks[i].callMethods();
  }
}

makeAllKiosks();

//reference to the id in html
var tableEl = document.getElementById('populate-table');

function makeARow() {
  var rowEl = document.createElement('tr');
  //make a cell
  var cellEl = document.createElement('td');
      //give it content
      cellEl.textContent = allKiosks[0].name;
      //append cell to row
      rowEl.appendChild(cellEl);
    //append row to the table
      tableEl.appendChild(rowEl);
}
makeARow();


//function makeAllItemRows() {
//   for (var item of allItems) {
//     makeItemRow(item);
//   }
// }
