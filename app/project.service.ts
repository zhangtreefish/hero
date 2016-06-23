import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { PROJECTS } from './projects';
import 'rxjs/add/operator/toPromise';

import { Project } from './project';

@Injectable()
export class ProjectService {
	private _projectsUrl = 'app/projects';

	constructor(private _http: Http) { };

	getProjects(): Promise<Project[]> {
		return this._http.get(this._projectsUrl)
		.toPromise()
		.then(response => response.json().data)
		.catch(this._handleError);
	}

	private _handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	getProject(id: number) {
		return this.getProjects().then(projects => projects.filter(project => project.id===id)[0]);
	}
}
