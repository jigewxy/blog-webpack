
/*import {app as app} from '../app.js';
//must specify the module name
app.controller('resumeCtrl', function(){

 var resumeCtrl = this;
 resumeCtrl.particulars = {name:'Cliff Wang', age: '31'};
 resumeCtrl.thing = "boring";

});*/

export default function ResumeCtrl () {

    let resumeCtrl = this;
    resumeCtrl.particulars = {name:'Cliff Wang', age: '31'};
    resumeCtrl.thing = "boring";

}

