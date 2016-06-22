import { Injectable } from '@angular/core';
import { PROJECTS } from './projects';

@Injectable()
export class ProjectService {
	getProjects() {
		return Promise.resolve(PROJECTS);
	}
	getProject(id: number) {
		return this.getProjects().then(projects => projects.filter(project => project.id===id)[0]);
	}
}
