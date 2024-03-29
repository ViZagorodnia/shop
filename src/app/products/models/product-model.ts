export class ProductModel {
  constructor(
    public id: number | null,
    public name: string,
    public description: string,
    public price: number,
    public category: string,
    public isAvailable: boolean,
    public additionalInfo: string,
    public stock: number
  ) {}

}
