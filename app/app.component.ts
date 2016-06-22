import {Component} from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectService } from './project.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
	directives: [ProjectsComponent],
	providers: [ProjectService]
})

export class AppComponent {
	title = 'Tour of Projects';
}
