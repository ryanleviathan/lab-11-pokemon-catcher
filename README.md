# lab-11-pokemon-catcher

Main page:
    -Title on main page as header
        -'Welcome! It's time to build your Pokemon team!'
    -3 radio buttons displaying 3 randomly generated/non-matching Pokemon
        -underneath each Pokemon: 'Times Encountered: ', 'Times Captured: '
    -'Next Encounter' button
        -On click: repeats onLoad sequence, counts down pokeball inventory
    -'Pokeballs left: ' (cap at 20 throws)
        -@ 'Pokeballs left: 0', 'Results' button appears, 'Next Encounter' button disappears

Results page:
    -Title: 'Results of your adventure!'
    -Each potential Pokemon in a list
        -Picture of Pokemon
        -Name of Pokemon
        -Times encountered
        -Times captured
    -'New Game' button
        -Brings you back to main page
        -resets
            -let Pokeballs = 20;
            -let Times Encountered = 0;
            -let Times Captured = 0;
    -'All Time' sections showing all time data for each Pokemon