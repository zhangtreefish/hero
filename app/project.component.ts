import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project';
import { RouteParams } from '@angular/router-deprecated';
import { ProjectService } from './project.service';

@Component({
	selector: 'details',
	templateUrl: 'app/project.component.html',
	styleUrls: ['app/project.component.css']
})
export class ProjectComponent implements OnInit {
	project: Project;

	constructor(
		private _projectService: ProjectService,
		private _routeParams: RouteParams) {}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._projectService.getProject(id).then(project => this.project=project)
	}

	goBack() {
		window.history.back();
	}
};
	// constructor(appComponent: AppComponent) {
	// 	this.project = appComponent.selectedProject;
	// }
