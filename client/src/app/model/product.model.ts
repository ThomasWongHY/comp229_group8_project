export class Product
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public name?: string,
    public ptype?: string,
    public description?: string,
    public price?: number,
    public quantity?: number,
    public imageurl?: string
  ){}

  public toString(): string
  {
    return `
    Book
    -------------------------------
    Name       : ${this.name}
    PType      : ${this.ptype}
    Description: ${this.description}
    Price      : ${this.price}
    Quantity   : ${this.quantity}
    ImageUrl   : ${this.imageurl}
    -------------------------------
    `;
  }
}
