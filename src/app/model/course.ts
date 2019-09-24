export class Course {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number;

  constructor(id: number, name: string, shortDescription: string, description: string, startDateTime: Date, endDateTime: Date, price: number) {
    this.id = id;
    this.name = name;
    this.shortDescription = shortDescription;
    this.description = description;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.price = price;
  }
}
