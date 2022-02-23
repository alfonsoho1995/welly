function fibonacci(position) {
    if (position == 0) {
        return 0;
    }
    else if (position <= 2) {
        return 1;
    } else {
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}

for (var i = 0; i < 5; i++) {
    console.log(fibonacci(i));
}