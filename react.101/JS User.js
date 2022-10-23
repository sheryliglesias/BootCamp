class User{
  constructor(email, password, firstName, lastName){
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
  }
}

let user1 = new User("juan@kodego,ph","12345678","Juan", "dela Cruz");
let user2 = new User("maria@kodego,ph","12345678","Maria", "Makiling");

user2.firstName;

