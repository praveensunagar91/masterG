export class FacultyProfile{
  public constructor(
  public facultyID: number,
  public facultyFullName:string,
  public facultyCountryCode:string,
  public facultyMobile:string,
  public facultyEmail: string,
  public facultyBirthDate:Date,
  public facultyGender: string,
  public facultyProfilePicture: string,
  public facultyAddress:string,
  public languageID: number,
  public facultyDeviceType:string,
  public facultyDeviceID: string,
  public facultyReferKey: null,
  public facultyVerified: string,
  public facultyNewsNotification:string,
  public facultyCourseNotification:string,
  public facultyOfferNotification:string,
  public facultyExamNotification:string,
  public facultytatus: string,
  public facultyOTP:string,
  public facultyJoiningDate:Date,
  public countryID: number,
  public stateID: number,
  public cityID:number,
  public facultyPincode:string,
  public facultyCreatedDate:Date,
  public facultyignupOTPVerified:string

  ){}
}

export class DashboardResolver{
  public constructor(
    public data:any[],
    public errormsg:string,
  ){}
}
