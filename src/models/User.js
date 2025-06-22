// src/models/User.js

class User {
  constructor({ email, password, firstName, lastName } = {}) {
    if (!email || !password || !firstName || !lastName) {
      throw new Error('Faltan campos obligatorios en User');
    }
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.verified = false;
    Object.freeze(this); // evita agregar propiedades nuevas
  }
}

module.exports = User;
