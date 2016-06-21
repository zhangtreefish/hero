import { Component, Input } from '@angular/core';
//import {Project} from './project.service';
import { Project } from './project';
//import { AppComponent } from './app.component';

@Component({
	selector: 'details',
	templateUrl: 'app/project.component.html'
})
export class ProjectComponent {
	@Input()
	project: Project;
	// constructor(projectsComponent: ProjectsComponent) {
	// 	this.project = projectsComponent.getActiveProject();
	}
