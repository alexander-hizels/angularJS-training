angular.module('appCoursesService', []).
    factory('coursesService', function () {
        return {
            courses: [{
                id: 1,
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                title: 'Course1',
                date: '29.05.2018',
                duration: '28'
            }, {
                id: 2,
                title: 'Course2',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '27'
            }, {
                id: 3,
                title: 'Course3',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '35'
            }, {
                id: 4,
                title: 'Course4',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '27'
            }, {
                id: 5,
                title: 'Course5',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
                date: '29.05.2018',
                duration: '27'
            }]
        };
    });
