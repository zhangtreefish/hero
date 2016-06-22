import {Component} from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { DashboardComponent } from './dashboard.component';
import { ProjectService } from './project.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, ProjectService]
})
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/projects',
		name: 'Projects',
		component: ProjectsComponent
	}
])
export class AppComponent {
	title = 'Tour of Projects';
}
