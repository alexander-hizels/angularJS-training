'use strict';

var NOTIFY_COURSES = 'courses-changed';

angular.module('appCoursesService', [])
    .factory('coursesService', function($rootScope) {
        var courses = [ {
            id: 1,
            description: 'Lorem1 ipsum dolor1 sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudia.',
            title: 'Course1',
            date: new Date('2019-10-29'),
            duration: '28',
            topRated: true
        }, {
            id: 2,
            title: 'Course2',
            description: 'Lorem2 ipsum dolor2 sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
            date: new Date('2019-10-19'),
            duration: '45',
            topRated: false
        }, {
            id: 3,
            title: 'Course3',
            description: 'Lorem ipsum dolor1 sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
            date: new Date('2019-10-22'),
            duration: '135',
            topRated: true
        }, {
            id: 4,
            title: 'Course4',
            description: 'Lorem ipsum dolor2 sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
            date: new Date('2019-10-20'),
            duration: '25',
            topRated: false
        }, {
            id: 5,
            title: 'Course5',
            description: 'Lorem ipsum dolor2 sit, amet consectetur adipisicing elit. Officiis, ratione voluptate adipisci iste sapiente reprehenderit repudiandae sequi laboriosam debitis doloribus! Deleniti similique autem aperiam ratione veritatis sunt vero aliquam natus.',
            date: new Date('2019-11-29'),
            duration: '27',
            topRated: false
        } ];

        function create() {
            var newCourse = {
                id: courses.length + 1,
                title: 'Course title',
                description: 'Description',
                date: new Date('2019-01-01'),
                duration: '10',
                topRated: false
            };
            courses.push(newCourse);
        }

        function getCourseById(id) {
            var course = courses.find(function(course) {
                return course.id === id;
            });

            return course;
        }

        function getListCourses() {
            return courses;
        }

        function update(course) {
            Object.assign(courses[course.id - 1], course);
        }

        function remove(id) {
            courses = courses.filter(function(course) {
                return course.id !== id;
            });
            notify();
        }

        function subscribe(scope, callback) {
            var handler = $rootScope.$on(NOTIFY_COURSES, callback);
            scope.$on('$destroy', handler);
        }

        function notify() {
            $rootScope.$emit(NOTIFY_COURSES);
        }

        return {
            create: create,
            getCourseById: getCourseById,
            getListCourses: getListCourses,
            notify: notify,
            remove: remove,
            subscribe: subscribe,
            update: update
        };
    });
