myAppmodule.controller('studentsController', ['$scope', function($scope) {
    $scope.students = [{
        name: 'John',
        surname: 'Doe',
        photo: 'https://upload.wikimedia.org/wikipedia/en/7/71/Quebec_citadelles_200x200.png',
        date_of_birth: '22-03-1999',
        phone: 1234567890,
        id : 0
    }, {
        name: 'Anton',
        surname: 'Doe',
        photo: 'http://vignette4.wikia.nocookie.net/awesomeanimeandmanga/images/3/34/K-on%21-avatar-200x200.jpg/revision/latest?cb=20110517050049',
        date_of_birth: '25-02-1992',
        phone: 1234567890,
        id : 1
    }, {
        name: 'Mark',
        surname: 'Doe',
        photo: 'http://forums.ferra.ru/uploads/profile/photo-106401.png',
        date_of_birth: '22-03-1999',
        phone: 1234567890,
        id : 2
    }, {
        name: 'Silver',
        surname: 'Doe',
        photo: 'http://www.themefreak.net/uploads/avatars/avatar_100.jpg?dateline=1336770265',
        date_of_birth: '22-03-1999',
        phone: 1234567890,
        id : 3
    }, {
        name: 'Stone',
        surname: 'Doe',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy90SNsQ1VZ4fpFPyVjwsmrlfo8XQKFIGJTm7gKel_yQDFfkV9',
        date_of_birth: '22-03-1999',
        phone: 1234567890,
        id : 4
    }]
}]);