initialize game 

    set score to Player: 0 , Computer: 0 

begin with function called `computerPlay` that randomly returns either Rock Paper or Scissors

create a list containing Rock, Paper, and Scissors

    ['Rock', 'Paper', 'Scissors']

store this random choice from the function in a variable

    let = computerSelection

_____
create a function that plays a single round of Rock Paper Scissors

include two parameters

    function (playerSelction,computerSelection)

**determine a way to identify player selection**

3 buttons for player to select from

    ROCK , PAPER , SCISSORS

    create eventListener for button 'onclick' to choose

set this choice in a variable

    let = playerSelection

    show results of winner

write a function that identifies the winner (`if else`)

    `Paper > Rock` 

    `Rock > Scissors`

    `Scissors > Paper`

return a string that declares the winner of the round

    'You win!'      OR

    'It's a tie!'   OR

    'You Lose!'

___

After Player or Computer reaches 5, signal game over
    
    when Player or Computer Score = 5;
    
    alert ('GAME OVER')

Restart game

    Show button to reset game to 0

with button 'onclick' run function to reset game

    clear winner declaration
    
    set score to Player: 0 , Computer: 0

    