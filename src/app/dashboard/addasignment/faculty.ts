import { Categorylevelthree } from "./categorylevel";
import { Course } from "./course";
export class Faculty{
  public constructor(
  public facultyentityID: number,
  public facultyID: number,
  public categorylevel3ID: number,
  public courseId: number,
  public categorylevel3:Categorylevelthree,
  public course:Course

  ){}
}
