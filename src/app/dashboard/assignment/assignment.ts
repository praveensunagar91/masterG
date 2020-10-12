export class Assignment{
  public constructor(
    public assignmentID: number,
    public facultyID: number,
    public assignmentName:string,
    public assignmentSubject: string,
    public assignmentDescription: string,
    public assignmentFiles: string,
    public assignmentPic: string,
    public assignmentStatus: string,
    public assignmentCreatedDate: Date,
    public entityID: number,
    public categorylevel1ID:number,
    public categorylevel2ID:number,
    public categorylevel3ID: number,
    public categorylevel4ID: number
  ){}
}
