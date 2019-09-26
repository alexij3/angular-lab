export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  dateOfBirth: Date;


  constructor(id: number, username: string, email: string, password: string, dateOfBirth: Date) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
  }
}
