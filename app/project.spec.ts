import { Project } from './project';

describe('Project', () => {
    it('has title', () => {
        let project: Project = {
            id: 1,
            genre: 'front end',
            title: 'Useful App',
            dates: '2016',
            description: 'apps for people',
            tools: ['Jasmine!'],
            image: '',
            url: '',
            code: ''
        }
        expect(project.title).toEqual('Useful App');
    });
    it('has id', () => {
        let project: Project = {
            id: 1,
            genre: 'front end',
            title: 'Useful App',
            dates: '2016',
            description: 'apps for people',
            tools: ['Jasmine!'],
            image: '',
            url: '',
            code: ''
        };
        expect(project.id).toEqual(1);
    });
});
