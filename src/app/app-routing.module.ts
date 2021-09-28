import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { CoursesComponent } from './courses/courses.component';
import { HomePageComponent } from './home-page/home-page.component';



const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'courses', component: CoursesComponent },
  { path: 'play', component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }