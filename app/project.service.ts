import { Injectable } from '@angular/core';
import { PROJECTS } from './projects';

@Injectable()
export class ProjectService {
	getProjects() {
		return Promise.resolve(PROJECTS);
	}
}