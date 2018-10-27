import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolcoursesComponent} from './schoolcourses/schoolcourses.component';
import { SchoolcoursedetailsComponent} from './schoolcoursedetails/schoolcoursedetails.component';
import { StudentsComponent} from './students/students.component';
import { StudentdetailsComponent} from './studentdetails/studentdetails.component';

const routes: Routes = [

	{
		path: '',
		component: SchoolcoursesComponent
	},
	{ 
		path: 'schoolcourses',
		component: SchoolcoursesComponent
  },
	{
		path: 'schoolcoursedetails/:id',
		component: SchoolcoursedetailsComponent
	},
	{ 
		path: 'students',
		component: StudentsComponent
	},
	{
		path: 'studentdetails/:id',
		component: StudentdetailsComponent
	},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
