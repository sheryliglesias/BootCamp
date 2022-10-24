<!DOCTYPE html>
<html>

<body>
      
       

<script>

class User{
  constructor(email, password){
      this.email = email;
      this.password = password;
      
  }
  getPassword(){
    return "Your default password is" + this.password;
  }
}

class PersonalInfo extends User{
  constructor(email, password, firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
     super(email, password); 
   
    }
  } 

  fullName(){
    return this.firstName + " " + this.lastName;
  }
  
let user1 = new PersonalInfo("juan@kodego,ph","12345678","Juan", "dela Cruz");
let user2 = new PersonalInfo("maria@kodego,ph","12345678","Maria", "Makiling");

document.write(user1.fullName());

</script>
</body>
</html>
