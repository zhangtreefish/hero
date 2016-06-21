import {Component} from '@angular/core';
import { ProjectComponent } from './project.component';

export class Project {
	id: number;
	title: string;
	dates: string;
	description: string;
	tools: string[];
	image: string;
	url: string;
	code: string;
}

const PROJECTS: Project[] = [
	{
		"id": 1,
		"title": "Retirement Homes",
		"dates": "2014-2015",
		"description": "Build a San Antonio retirement homes application with interactive map and search list with KnockoutJS",
		"tools": ["KnockoutJS", "google.maps", "ajax", "bootstrap", "jQuery", "Yelp API", "jsonp"],
		"image": "http://i.imgur.com/ztDG76q.jpg",
		"url": "http://zhangtreefish.github.io/Project-5-for-Front-End-Web-Developer-Nanodegree",
		"code": "https://github.com/zhangtreefish/Project-5-for-Front-End-Web-Developer-Nanodegree"
	},
	{
		"id": 2,
		"title": "therapeutic foods",
		"dates": "2016-2016",
		"description": "Developed a Flask web app, hosted it in Amazon Web Service using Apache HTTP Server and PostgreSQL on Ubuntu system",
		"tools": ["Amazon Web Service", "Apache2", "PostgreSQL", "Ubuntu", "Linux", "Flask", "Jinja2", "Python", "json", "sqlalchemy", "oauth2", "imgur"],
		"image": "http://i.imgur.com/dd4d0fr.png",
		"url": "http://ec2-52-38-199-253.us-west-2.compute.amazonaws.com/",
		"code": "https://github.com/zhangtreefish/Project-3-for-Full-Stack-Nanodegree-at-Udacity"
	},
	{
		"id": 3,
		"title": "a Frogger game",
		"dates": "2015-2015",
		"description": "Implemented a Frogger game with an immunology twist using Object-Oriented javaScript and HTML5 Canvas",
		"tools": ["javascript", "object-oriented programming", "canvas", "requestAnimationFrame"],
		"image": "http://i.imgur.com/TMw9w29.png",
		"url": "https://zhangtreefish.github.io/Project-3-for-Front-End-Web-Developer-Nanodegree",
		"code": "https://github.com/zhangtreefish/Project-3-for-Front-End-Web-Developer-Nanodegree"
	},
	{

		"id": 10,
		"title": "from mockup",
		"dates": "2015-2015",
		"description": "Turned a designer’s mockup into the semantic HTML and CSS with a 2.4% mismatch",
		"tools": ["html5", "css3"],
		"image": "http://i.imgur.com/coxWkyU.png",
		"url": "http://zhangtreefish.github.io/Project-1-for-Udacity-Front-End-Web-Developer-Nanodegree/",
		"code": "https://github.com/zhangtreefish/Project-1-for-Udacity-Front-End-Web-Developer-Nanodegree"
	},
	{
		"id": 9,
		"title": "Resume Page",
		"dates": "2015-2015",
		"description": "Built JSONs and dynamically add information to a resume template through jQuery",
		"tools": ["JSON", "jQuery"],
		"image": "https://i.imgur.com/78mvBFX.jpg",
		"url": "http://zhangtreefish.github.io/Project-2-for-Front-End-Web-Developer-Nanodegree",
		"code": "https://github.com/zhangtreefish/Project-2-for-Front-End-Web-Developer-Nanodegree"
	},
	{
		"id": 8,
		"title": "web performance optimization",
		"dates": "2015-2015",
		"description": "Optimized a webpage through refactoring, page speed analysis and 60 FPS methods",
		"tools": ["Chrome DevTools", "javascript"],
		"image": "http://i.imgur.com/XaqjwTe.jpg",
		"url": "http://zhangtreefish.github.io/Project-4-for-Front-End-Web-Developer-Nanodegree/",
		"code": "https://github.com/zhangtreefish/Project-4-for-Front-End-Web-Developer-Nanodegree"
	},
	{
		"id": 7,
		"title": "Unit Test with Jasmine",
		"dates": "2015-2015",
		"description": "Performed unit-testing with JasmineJS",
		"tools": ["JasmineJS"],
		"image": "http://i.imgur.com/11ovdoO.jpg",
		"url": "http://zhangtreefish.github.io/Project-6-for-Front-End-Web-Developer-Nanodegree/",
		"code": "https://github.com/zhangtreefish/Project-6-for-Front-End-Web-Developer-Nanodegree"
	},
	{
		"id": 6,
		"title": "A Movie Site",
		"dates": "2015-2015",
		"description": "Created a movie site with clickable trailers using Python and a web server for HTML",
		"tools": ["Python", "Python modules of webbrowser, re, os"],
		"image": "http://i.imgur.com/YO1cjJr.png",
		"url": "http://zhangtreefish.github.io/Project-1-for-Full-Stack-Web-Developer-Nanodegree/",
		"code": "https://github.com/zhangtreefish/Project-1-for-Full-Stack-Web-Developer-Nanodegree.git"
	},
	{
		"id": 5,
		"title": "a Tournament Database",
		"dates": "2015-2015",
		"description": "Developed a PostgreSQL database to track the players and matches of a tournament",
		"tools": ["psql", "vagrant", "Python", "PostgreSQL", "psycopg2"],
		"image": "",
		"url": "",
		"code": "https://github.com/psycopg/psycopg2.git"
	},
	{
		"id": 4,
		"title": "Tictactoe Game API",
		"dates": "2015-2015",
		"description": "Created a platform-agnostic, RESTful API on Google App Engine Endpoints to serve a game app",
		"tools": ["Google App Engine Endpoints", "Python",],
		"image": "http://i.imgur.com/Hwd5fSb.jpg",
		"url": "https://tictactoe-2016.appspot.com/_ah/api/explorer",
		"code": "https://github.com/zhangtreefish/Project-4-for-Full-Stack-Nanodegree-at-Udacity.git"
	},
];

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
	styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .projects {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .projects li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .projects li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .projects li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .projects .text {
    position: relative;
    top: -3px;
  }
  .projects .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
	directives: [ProjectComponent]
})

export class AppComponent {
	title = 'Tour of Projects';

	public projects = PROJECTS;

	selectedProject: Project;

	onSelect(proj: Project) {
		this.selectedProject = proj;
	};
}
