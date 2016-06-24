import {Component} from '@angular/core';
import { SkillsComponent } from './skills.component';
import { ProjectComponent } from './project.component';
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
		path: '/skills',
		name: 'Skills',
		component: SkillsComponent
	},
	{
		path: '/detail/:id',
		name: 'ProjectDetail',
		component: ProjectComponent
	},
])
export class AppComponent {
	title = 'Tour of Projects';
}
