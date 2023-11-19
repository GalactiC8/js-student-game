var student = {
    life: 100,
    money: 0
};

var rooms = {
    start: {
        title: 'Комната в общаге',
        description: 'Тут начинается твой путь студента',
        image: 'img/obshaga.jpg',
        actions: [
            {
                title: 'В окно',
                id: 'window',
                cost: 5
            },
            {
                title: 'В коридор',
                id: 'hall',
                cost: 5
            },
        ]
    },
    window: {
        title: 'окно',
        description: 'Вы не выдержали студенческую жизнь',
        image: 'img/window.jpg',
        actions: []
    },
    hall: {
        title: 'Коридор',
        description: 'Куда направиться дальше?',
        image: 'img/hall.jpg',
        actions: [
            {
                title: 'В комнату',
                id: 'start',
                cost: 5
            },
            {
                title: 'В туалет',
                id: 'toilet',
                cost: 5
            },
            {
                title: 'На кухню',
                id: 'kitchen',
                cost: 0
            },
            {
                title: 'К вахтёру',
                id: 'watchman',
                cost: 5
            }
        ]
    },
    toilet: {
        title: 'Туалет',
        description: 'Вдруг кто оставил здесь деньги?',
        image: 'img/toilet.jpg',
        canFoundMoney: true,
        actions: [
            {
                title: 'В Коридор',
                id: 'hall',
                cost: 5
            }
        ]
    },
    watchman: {
        title: 'Вахтёр',
        description: 'Просто так мимо него не пройти :)',
        image: 'img/watchman.jpg',
        // canPayMoney: true,
        actions: [
            {
                title: 'Коридор',
                id: 'hall',
                cost: 5
            },
            {
                title: 'Красное/Белое',
                id: 'RW',
                cost: 5
            }
        ]
    },
    RW: {
        title: 'К/Б',
        description: 'Загадочное место',
        image: 'img/RW.jpg',
        actions: [
            {
                title: 'К вахтёру',
                id: 'watchman',
                cost: 5 
            }
        ],
        spendMoney: function(money) {
            student.money -= money;
            student.life += Math.random() * money - money / 2;
            if (money >= 50) {
                return {
                title:'Выход на свободу',
                id:'window',
                cost: 1,
                delete: true
                }
            }
        }
    },
    kitchen: {
        title: 'Кухня',
        description: 'Тут можно восполнить свою жизнь',
        image: 'img/kitchen.jpg',
        canHeal: true,
        actions: [
            {
                title: 'В Коридор',
                id: 'hall',
                cost: 5
            }
        ]
    }
}

var roomId = 'start';
