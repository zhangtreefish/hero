import {Component, OnInit} from '@angular/core';
import { ProjectComponent } from './project.component';
import { Project } from './project';
import { ProjectService } from './project.service';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-projects',
    templateUrl: 'app/projects.component.html',
	styleUrls: ['app/projects.component.css'],
	directives: [ProjectComponent]
})

export class ProjectsComponent implements OnInit{
	projects: Project[];
	selectedProject: Project;

	constructor(private _projectService: ProjectService,
		private _router: Router) { };

	getProjects() {
		this._projectService.getProjects().then(projects => this.projects = projects);
	}

	ngOnInit() {
		this.getProjects();
	}

	gotoDetail(project: Project) {
		let link = ['ProjectDetail', { id: project.id }];
		this._router.navigate(link);
	}
	onSelect(proj: Project) {
		this.selectedProject = proj;
	};
}
