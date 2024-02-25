const snake = {
    speed: 10,
    x: 100,
    y: 100,
    user: document.getElementById("snake"),
}

snake.user.style.top = snake.y + 'px'
snake.user.style.left = snake.x + 'px'

Go()












function Go (){
    document.addEventListener('keydown', function(event) {

        if(event.code == 'KeyW'){
            snake.y = snake.y - snake.speed
            snake.user.style.top = snake.y + 'px'
        }
    
    });
    document.addEventListener('keydown', function(event) {
        if(event.code == 'KeyS'){
            snake.y = snake.y + snake.speed
            snake.user.style.top = snake.y + 'px'
        }
    });
    document.addEventListener('keydown', function(event) {
        if(event.code == 'KeyA'){
            snake.x = snake.x - snake.speed
            snake.user.style.left = snake.x + 'px'
        }
    });
    document.addEventListener('keydown', function(event) {
        if(event.code == 'KeyD'){
            snake.x = snake.x + snake.speed
            snake.user.style.left = snake.x + 'px'
        }
    });
}