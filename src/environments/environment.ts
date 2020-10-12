// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const endpoints={
    getOneAssignmentUrl:'http://3.213.194.99:3581/faculty/assignment/getOneAssignment?',
    getAllAssignmentUrl:'http://3.213.194.99:3581/faculty/assignment/getAllAssignment',
    getOneCourse:'http://3.213.194.99:3581/faculty/course/getOneCourse?',
    getEntities: 'http://3.213.194.99:3581/faculty/assignment/getAllEntites',
    getCenters:'http://3.213.194.99:3581/faculty/assignment/getAllCenters',
    getFaculties:'http://3.213.194.99:3581/faculty/assignment/getFacultyEntites?',
    addAssignment:'http://3.213.194.99:3581/faculty/assignment/addOneAssignment',
    getFacultyProfile:'http://3.213.194.99:3581/faculty/getFacultyDetails',
    getCountry:'http://3.213.194.99:3581/location/countrycodes/1',
    getSubjects:'http://3.213.194.99:3581/subjects/getsubjects',
    updateFaculty:'http://3.213.194.99:3581/faculty/updateprofile',
    login:'http://3.213.194.99:3581/faculty/login',
    forgetPassword:'http://3.213.194.99:3581/faculty/forgotpassword',
    changePassword:'http://3.213.194.99:3581/faculty/changepassword',
    aboutUs:'http://3.213.194.99:3580/info/aboutus',
    contactUs:'http://3.213.194.99:3580/info/contactus',
    faq:'http://3.213.194.99:3580/info/getfaqs',
    privacyPolicy:'http://3.213.194.99:3580/info/privacy',
    termsConditions:'http://3.213.194.99:3580/info/terms',


};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
