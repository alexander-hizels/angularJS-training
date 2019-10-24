angular.module('appCoursesService', []).
    factory('coursesService', function () {
        return {
            courses: [{
                name: 'Course1',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '28'
            }, {
                name: 'Course2',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '27'
            }, {
                name: 'Course3',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '35'
            }, {
                name: 'Course4',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '27'
            }, {
                name: 'Course5',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '27'
            }]
        };
    });
    