export class Course {
  name: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number;
  imageUrl: string;

  constructor(name: string, description: string, startDateTime: Date, endDateTime: Date, price: number, imageUrl: string) {
    this.name = name;
    this.description = description;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
