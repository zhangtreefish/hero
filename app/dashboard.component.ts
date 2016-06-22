import {Component, OnInit} from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	frontEndProjects: Project[];
	fullStackProjects: Project[];

//	selectedProject: Project;

	constructor(private _projectService: ProjectService) { };

	getProjects() {
		this._projectService.getProjects().then(projects => {
			this.frontEndProjects = projects.filter(project => project.genre === 'front end');
			this.fullStackProjects = projects.filter(project => project.genre === 'full stack');
		});
	}

	ngOnInit() {
		this.getProjects();
	}

	gotoDetail() {
	}

