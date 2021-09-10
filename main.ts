let x = 1;
basic.forever(() => {
    input.onButtonPressed(Button.A,() => {
        x++;
    });
    input.onButtonPressed(Button.B, () =>{
        x--;
    });
    if(x < 1){
        x = 1;
    }
    else if(x == 1){
        basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    }
    else if(x==2){
        basic.showLeds(`
        . # # # .
        . . . . #
        . . . # .
        . . # . .
        . # # # #
        `)
    }
    else if(x==3){
        basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    }
    else if(x == 4){
        basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . . # . .
        . . # . .     
        `)
    }
    else if(x == 5){
        basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        . . . . #
        # # # # .
        `)
    }
}
)