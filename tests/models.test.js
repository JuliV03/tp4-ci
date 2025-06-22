// tests/models.test.js

const User = require('../src/models/User');
const Contact = require('../src/models/Contact');

describe('Pruebas de definición y atributos de las clases User y Contact', () => {
  // 1) La clase User debe existir
  test('Clase User definida', () => {
    expect(typeof User).toBe('function');
  });

  // 2) La clase Contact debe existir
  test('Clase Contact definida', () => {
    expect(typeof Contact).toBe('function');
  });

  // 3) Instanciar User sin los campos obligatorios lanza error
  test('User(): lanza error si falta email, password, firstName o lastName', () => {
    expect(() => new User()).toThrow();
    expect(() => new User({ email: 'a@b.com' })).toThrow();
  });

  // 4) Instanciar User con todos los campos no lanza error
  test('new User({…}): crea instancia si se pasan todos los campos', () => {
    const datos = {
      email: 'usuario@dominio.com',
      password: 'Clave123!',
      firstName: 'Ana',
      lastName: 'García'
    };
    expect(() => new User(datos)).not.toThrow();
  });

  // 5) La instancia de User tiene las propiedades correctas
  test('User instance tiene email, password, firstName y lastName', () => {
    const datos = {
      email: 'x@y.com',
      password: 'Pwd123!',
      firstName: 'Juan',
      lastName: 'Pérez'
    };
    const usuario = new User(datos);
    ['email','password','firstName','lastName'].forEach(prop => {
      expect(usuario).toHaveProperty(prop, datos[prop]);
    });
  });

  // 6) La propiedad verified en User existe y es false por defecto
  test('User.verified existe y vale false inicialmente', () => {
    const u = new User({
      email: 'u@d.com',
      password: 'Pwd123!',
      firstName: 'Lu',
      lastName: 'Su'
    });
    expect(u).toHaveProperty('verified', false);
  });

  // 7) Instanciar Contact sin firstName o lastName lanza error
  test('Contact(): lanza error si falta firstName o lastName', () => {
    expect(() => new Contact()).toThrow();
    expect(() => new Contact({ firstName: 'Ana' })).toThrow();
  });

  // 8) Instancia de Contact con solo campos obligatorios pone nulos en opcionales
  test('new Contact({firstName,lastName}): opcionales son null', () => {
    const c = new Contact({ firstName: 'Ana', lastName: 'Lopez' });
    ['email','phone','dateOfBirth','address1','address2','city','state','postalCode','country']
      .forEach(prop => {
        expect(c).toHaveProperty(prop, null);
      });
  });

  // 9) Instancia de Contact con campos opcionales asignados respeta esos valores
  test('Contact instance asigna correctamente los campos opcionales', () => {
    const datos = {
      firstName: 'Luis',
      lastName: 'Martinez',
      email: 'luis@ejemplo.com',
      phone: '+549111234567'
    };
    const c = new Contact(datos);
    expect(c.email).toBe(datos.email);
    expect(c.phone).toBe(datos.phone);
  });
});
