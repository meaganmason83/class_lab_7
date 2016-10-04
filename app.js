'use strict';

var allStores = [];

 function Store(location, minCustomer, maxCustomer, averageCups, averagePounds) {
   this.location = location;
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
   this.domLink = null;
   this.ulEl = null;
   this.stringsForDOM = [];


   this.getRandomCustomer = function(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
};

    this.generateCustomerData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.customerPerHour.push(this.getRandomCustomer(this.minCustomer, this.maxCustomer));
        this.customerPerDay += this.customerPerHour[i];
    }
  };
    this.generateTotalCustomers = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.totalCustomers += this.customerPerHour[i];
    }
  };

    this.generateCupsData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.cupsPerHour.push(this.customerPerHour[i] * this.averageCups);
        this.cupsPerDay += this.cupsPerHour[i];
    }
  };

    this.generateLbsData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.poundsPerHour.push(this.customerPerHour[i] * this.averagePounds);
        this.poundsPerDay += this.poundsPerHour[i];
    }
  };

    this.generateCupsLbsData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.cupsIntoPounds.push(this.cupsPerHour[i] / 16);
    }
  };

  this.generateCupsPlusLbsData = function() {
      for (var i = 0; i < this.hoursOpen.length; i++) {
        this.cupsPlusPounds.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
      }
    };

    this.generateBeansData = function() {
        for (var i = 0; i < this.hoursOpen.length; i++) {
          this.totalBeansPerHour.push(this.cupsIntoPounds[i] + this.poundsPerHour[i]);
          this.totalBeansPerDay = (this.totalBeansPerHour[i] / 16);
      }
    };

    this.generateEmployeeData = function() {
        for (var i = 0; i < this.hoursOpen.length; i++) {
          this.employeesPerHour.push(Math.ceil(this.customerPerHour[i] / 30));
          this.employeesPerDay += this.employeesPerHour[i];
      }
    };

    this.generateDOMData = function() {
        for (var i = 0; i < this.stringsForDOM.length; i++) {
          var liEl = document.createElement('li');
          console.log('liEl', liEl);
          liEl.textContent = this.stringsForDOM[i];
          this.ulEl.appendChild(liEl);
        }
        //this.domLink.appendChild(this.ulEl);
    };

    this.generateStringsForDOM = function() {
        for (var i = 0; i < this.hoursOpen.length; i++) {
          this.stringsForDOM.push(this.hoursOpen[i] + ': ' + Math.ceil(this.totalBeansPerHour[i], 1) + ' lbs [' + Math.ceil(this.customerPerHour[i], 0) + ' customers, ' + Math.round(this.cupsPerHour[i], 1) + ' cups (' + Math.round(this.cupsIntoPounds[i], 1) + ' lbs), ' + Math.round(this.poundsPerHour[i], 0) + ' lbs to-go]');
        }
        this.stringsForDOM.push('Total customers at ' + this.location + ': ' + this.totalCustomers);
        this.stringsForDOM.push('Total cups sold at ' + this.location + ': ' + Math.ceil(this.cupsPerDay, 1));
        this.stringsForDOM.push('Total to-go pound packages sold at ' + this.location + ': ' + Math.ceil(this.poundsPerDay, 1)); //can't figure this out
        this.stringsForDOM.push('Total pounds of beans needed at ' + this.location + ': ' + (this.poundsPerDay[i] + this.cupsIntoPounds[i]));//can't figure this out

    };

    this.getRandomCustomer();
    this.generateCustomerData();
    this.generateTotalCustomers();
    this.generateCupsData();
    this.generateLbsData();
    this.generateCupsLbsData();
    this.generateCupsPlusLbsData();
    this.generateBeansData();
    this.generateEmployeeData();
    this.generateDOMData();
    this.generateStringsForDOM();

    allStores.push(this);
}



 new Store('Pike Place Market', 14, 35, 1.2, 0.34);
 new Store('Capitol Hill', 12, 28, 3.2, 0.03);
 new Store('Seattle Public Library', 9, 45, 2.6, 0.02);
 new Store('South Lake Union', 5, 18, 1.3, 0.04);
 new Store('Sea-Tac Airport', 28, 44, 1.1, 0.41);

//  function makeAllStores() {
//    for (var i = 0; i < allStores.length; i++) {
//      allStores[i].doAllMethods();
//    }
// };
// makeAllStores();
