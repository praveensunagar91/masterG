import { Entity } from './entity';
import { CategoryLevel1 } from './categoryLevelOne';
import { categoryLevel2 } from './categoryLevelTwo';
import { CategoryLevel3 } from './categoryLevelThree';
import { Course } from './course';
import { CourseSubject } from './courseSubject';

export class CourseDetails{
  public constructor(
  public facultyentityID: number,
  public facultyID: number,
  public entityID: number,
  public categorylevel1ID: number,
  public categorylevel2ID: number,
  public categorylevel3ID: number,
  public courseID: number,
  public coursesubjID: number,

  public entity:Entity,
  public categorylevel1:CategoryLevel1,
  public categorylevel2:categoryLevel2,
  public categorylevel3:CategoryLevel3,
  public course:Course,
  public coursesubject:CourseSubject

  ){}
}
