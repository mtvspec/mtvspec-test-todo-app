import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', component: MainComponent, children: [
      {
        path: 'task-list', children: [
          {
            path: '', component: TaskListComponent,
          },
          {
            path: 'new', component: NewTaskComponent,
          },
          {
            path: ':taskId', canActivate: [AuthGuard], component: TaskComponent,
          },
        ],
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'task-list',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
