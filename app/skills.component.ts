import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {SkillService} from './skill.service';
//import { Router } from '@angular/router-deprecated';

@Component({
	selector: 'skills',
	templateUrl: 'app/skills.component.html',
	providers: [SkillService]
})
export class SkillsComponent implements OnInit {
	skills: String[];

	constructor(
		private _skillService: SkillService) { };

	getSkills() {
		this.skills = this._skillService.getSkills();
	}

	ngOnInit() {
		this.getSkills();
	}
}
