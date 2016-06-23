import {Component, OnInit} from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';
import { Router } from '@angular/router-deprecated';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	frontEndProjects: Project[];
	fullStackProjects: Project[];

	constructor(
		private _projectService: ProjectService,
		private _router: Router) { };

	getProjects() {
		this._projectService.getProjects().then(projects => {
			this.frontEndProjects = projects.filter(project => project.genre === 'front end');
			this.fullStackProjects = projects.filter(project => project.genre === 'full stack');
		});
	}

	ngOnInit() {
		this.getProjects();
	}

	gotoDetail(project: Project) {
		let link = ['ProjectDetail', { id: project.id }];
		this._router.navigate(link);
	}
}

