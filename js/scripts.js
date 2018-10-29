// function AddressBook() {
//   this.contacts = [],
//   this.currentId = 0
// }
//
// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignID();
//   this.contacts.push(contact);
// }
//
// AddressBook.prototype.assignID = function(){
//   this.currentId += 1;
//   return this.currentId;
// }
//
// AddressBook.prototype.findContact = function(id) {
//   for (var i=0; i < this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id === id) {
//         return this.contacts[i];
//       }
//     }
//   };
//     return false;
//   }
//
// AddressBook.prototype.deleteContact = function(id) {
//   for (var i=0; i < this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id === id) {
//         delete this.contacts[i];
//         return true;
//       }
//     }
//   };
//     return false;
//   }
//
//
// function Contact (firstName, lastName, phoneNumber) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.phoneNumber = phoneNumber
// };
//
//
// Contact.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };


function Trips() {
  this.places = [];
}

Trips.prototype.addTrip = function (trip) {
  this.places.push(trip);
}

function Place(location, terrain, timeVisited, notes) {
  this.location = location,
  this.terrain = terrain,
  this.timeVisited = timeVisited,
  this.notes = notes
}

// Cient end code

var myTrips = new Trips();

$(function() {
  $("p#clickHere").click(function() {
    console.log("You've clicked the paragraph");
  });

  $("p#testy").click(function() {
    console.log("Testy talks back!!");
  });

  $("#survey").submit(function(event) {
    event.preventDefault();

var location = $("input#location").val();
var terrain = $("input#terrain").val();
var dateVisited = $("input#dateVisited").val();
var tripNotes = $("input#tripNotes").val();

var add_location_log = new Place(location, terrain, dateVisited, tripNotes);

myTrips.addTrip(location);

var userResults = add_location_log;

$("#results").text(userResults);




console.log(location + terrain + dateVisited + tripNotes);

    // var userInput = $(form#survey).val();
    // var results = AddressBook(userInput);

});
});
