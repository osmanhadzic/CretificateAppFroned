export default class Certificate {
    public id: string;
    public supplier: string;
    public certificatetType: string;
    public validFrom : object;
    public validTo: object;

    constructor(id:string,supplier: string,certificatetType: string,validFrom : object,validTo: object) {
      this.id = id;
      this.supplier = supplier;
      this.certificatetType = certificatetType;
      this.validFrom = validFrom;
      this.validTo = validTo
    };
  }
