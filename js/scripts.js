function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignID();
  this.contacts.push(contact);
}

AddressBook.prototype.assignID = function(){
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
  };
    return false;
  }

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
    return false;
  }


function Contact (firstName, lastName, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber
};


Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

var john = new Contact ('j', 'k', '5');

var jim = new Contact ('jim', 'smith', '43');

var joe = new Contact ('s', 'e', '2');

var newBook = new AddressBook();


newBook.addContact(john);
newBook.addContact(jim);
newBook.addContact(joe);
