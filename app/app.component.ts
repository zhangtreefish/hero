import {Component, OnInit} from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service'

export class Project {
	id: number;
	title: string;
	dates: string;
	description: string;
	tools: string[];
	image: string;
	url: string;
	code: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ProjectComponent],
	providers: [ProjectService]
})

export class AppComponent implements OnInit{
	title = 'Tour of Projects';

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
