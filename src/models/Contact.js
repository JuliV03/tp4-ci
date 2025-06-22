// src/models/Contact.js

class Contact {
  constructor({
    firstName,
    lastName,
    email = null,
    phone = null,
    dateOfBirth = null,
    address1 = null,
    address2 = null,
    city = null,
    state = null,
    postalCode = null,
    country = null
  } = {}) {
    if (!firstName || !lastName) {
      throw new Error('Faltan campos obligatorios en Contact');
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
    Object.freeze(this);
  }
}

module.exports = Contact;
