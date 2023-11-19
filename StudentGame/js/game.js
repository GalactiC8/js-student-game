function isGameOver () {
    return student.life <= 0 || rooms[roomId].actions.length === 0;
}

// function changeMorality(morality) {
//     if 
// }
// function changeLife(cost) {
//     if (cost) {
//         student.life -= student.morality <= 0 ?
//         cost * 2
//     }
// }

function restart () {
    document.getElementById('studentLife').innerHTML = "Ваша жизнь: " + 0;
    document.getElementById('roomDescription').innerHTML = 'Вы погибли';
    document.getElementById('roomTitle').innerHTML = 'Игра окончена';
    var button = document.createElement('button')
    button.innerHTML = 'Попробуешь ещё раз?';
    button.addEventListener('click', function () {
        student.life = 100;
        roomId = 'start';
        gotoRoom()
    });
    document.getElementById('actions').appendChild(button);
}

function gotoRoom () {
    var room = rooms[roomId];
    document.getElementById('roomTitle').innerHTML = room.title;
    document.getElementById('roomImage').src = room.image;
    document.getElementById('roomDescription').innerHTML = room.description;
    document.getElementById('studentMoney').innerHTML = "Деньги: " + student.money;
    document.getElementById('studentLife').innerHTML = "Жизнь: " + student.life;
    document.getElementById('actions').innerHTML = '';
    if (isGameOver()) {
        restart();
        return;
    }
    for (var i = 0; i < room.actions.length; i++) {
    (function(i) {
        var action = room.actions[i];
        var button = document.createElement('button')
        button.innerHTML = action.title;
        button.addEventListener('click', function () {
            // changeMorality(action.moralityCost);
            // changeLife(action.cost);
            roomId = action.id;
            student.life -= room.actions[i].cost;
            if (room.actions[i].delete) {
                room.actions.splice(i,1);
            }
            gotoRoom();
        });
        document.getElementById('actions').appendChild(button);
        })(i);
    }
    if (room.canFoundMoney) {
        var money = 50 + Math.round(Math.random() * 100);
        var button = document.createElement('button');
        button.innerHTML = 'Украсть чирик';
        button.addEventListener('click', function () {
            student.money += money;
            document.getElementById('studentMoney').innerHTML = "Деньги: " + student.money;
            document.getElementById('actions').removeChild(button);
        });
        document.getElementById('actions').appendChild(button);
    }
    if (room.canHeal) {
        var life = 30;
        var button = document.createElement('button');
        button.innerHTML = 'Плотно покушать';
        button.addEventListener('click', function () {
            student.life += life;
            document.getElementById('studentLife').innerHTML = "Жизнь: " + student.life;
            document.getElementById('actions').removeChild(button);
        });
        document.getElementById('actions').appendChild(button);
    }
    // if (room.canPayMoney) {
    //     var button = document.createElement('button');
    //     document.getElementById('actions').appendChild(button);
    //     button.innerHTML = 'Заплатить за выход';
    //     button.addEventListener('click', function (money) {
    //     });
    // }
    if (room.spendMoney) {
        var input = document.createElement('input');
        var button = document.createElement('button');
        button.addEventListener('click', function () {
            var money = input.value - 0;
            var action = spendMoney(money);
            if (action){
                room.actions.push(action);
                gotoRoom();
            }
        });
    }
}