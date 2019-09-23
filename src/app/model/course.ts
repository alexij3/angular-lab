export class Course {
  name: string;
  shortDescription: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number;

  constructor(name: string, shortDescription: string, description: string, startDateTime: Date, endDateTime: Date, price: number) {
    this.name = name;
    this.shortDescription = shortDescription;
    this.description = description;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.price = price;
  }
}
