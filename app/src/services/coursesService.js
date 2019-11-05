'use strict';
angular.module('appCoursesService', [])
    .factory('coursesService', function() {
        return {
            courses: [ {
                id: 1,
                description: 'Lorem1 ipsum dolor1 sit, amet consectetur adipisicing elit. ' +
                    'Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudia.',
                title: 'Course1',
                date: new Date('2019-10-29'),
                duration: '28',
                topRated: true
            }, {
                id: 2,
                title: 'Course2',
                description: 'Lorem2 ipsum dolor2 sit, amet consectetur adipisicing elit. Officiis, ratione ' +
                    'voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus!' +
                    ' Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: new Date('2019-10-19'),
                duration: '45',
                topRated: false
            }, {
                id: 3,
                title: 'Course3',
                description: 'Lorem ipsum dolor1 sit, amet consectetur adipisicing elit. Officiis, ratione ' +
                    'voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus!' +
                    ' Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: new Date('2019-10-22'),
                duration: '135',
                topRated: true
            }, {
                id: 4,
                title: 'Course4',
                description: 'Lorem ipsum dolor2 sit, amet consectetur adipisicing elit. Officiis, ratione ' +
                    'voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus!' +
                    ' Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: new Date('2019-10-20'),
                duration: '25',
                topRated: false
            }, {
                id: 5,
                title: 'Course5',
                description: 'Lorem ipsum dolor2 sit, amet consectetur adipisicing elit. Officiis, ratione' +
                    ' voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! ' +
                    'Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: new Date('2019-11-29'),
                duration: '27',
                topRated: false
            } ]
        };
    });
