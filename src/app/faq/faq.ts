export class Faq{
  public constructor(
    public faqID:number,
    public faqtypeID :number,
    public faqQuestion:string,
    public faqAnswer:string,
    public faqStatus:string,
    public faqtypeName:string,
    public faqtypeRemarks:string,
    public faqtypeStatus:string
  ){}
}
