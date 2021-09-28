import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GolfApp';

  constructor(private coursesService: CoursesService) {}


  courseData: any
  errorMessage: any

  


  ngOnInit(): void {
    // this.coursesService.getCourse('18300').subscribe({
    //   next: courseData => this.courseData = courseData,
    //   error: err => this.errorMessage = err
    // })
  }

}