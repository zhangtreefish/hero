import {Component, OnInit} from '@angular/core';
import { ProjectComponent } from './project.component';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    selector: 'my-projects',
    templateUrl: 'app/projects.component.html',
	styleUrls: ['app/projects.component.css'],
	directives: [ProjectComponent]
})

export class ProjectsComponent implements OnInit{
	projects: Project[];

	selectedProject: Project;

	constructor(private _projectService: ProjectService) { };

	getProjects() {
		this._projectService.getProjects().then(projects => this.projects = projects);
	}

	ngOnInit() {
		this.getProjects();
	}

	onSelect(proj: Project) {
		this.selectedProject = proj;
	};
}
