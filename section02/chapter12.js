function orderFood(callback) {
    setTimeout(() => {
        const food = '寿司';
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = '식은 ' + food;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const frozenFood = '냉동 ' + food;
        callback(frozenFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);
    });

    freezeFood(food, (frozenFood) => {
        console.log(frozenFood);
    });
});