export class AddAssignment{
  public constructor(
    public assignmentName:string,
    public assignmentDescription:string,
    public entityID:number,
    public image:string,
    public centerId:number,
    public batchId:number,
    public courseId:number,
    public assignmentStatus:string
  ){}
}
