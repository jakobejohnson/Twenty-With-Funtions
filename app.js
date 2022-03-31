var computer = 0
var player = 0

function program() {


        var name = prompt("This is the Twenty Game, the point of the game is to see who gets to 20 first. please state your name.")
        return name
    }


    function greeting(a) {
        alert(`Nice to meet you, ${a} `)
    }

    //user function

    function randomNumber() {

        var player = 0

        do{

            var ran = Math.floor(Math.random() * 10) + 1
    
            player = player + ran 
    
            alert(`player new number is ${ran}.\n\n\n player new total is ${player}`)
    
            var p = prompt(`Wanna go again? type "n" if want to stop. type "y" if you want to continue`)
    
    
        } while (p != 'n' )

        return ran
    }

    //computer function

    function computerNumber() {

        var computer = 0

        do{

            var ran = randomNumber()
    
            computer = computer + ran 
    
            alert(`computer new number is ${ran}.\n\n\n computer new total is ${computer}`)
    
        } while ( computer < 16 )

        return computer
    }

    if ((player > computer) || (computer <= 20) || (human <= 20)){
        console.log("player wins!")
    } else if ((computer > player) || (computer <= 20) || (human <= 20)){
        console.log("computer wins!")
    } else if ((computer == player) || (computer <= 20) || (human <= 20)){
        console.log("tie!")
    }


    var q = prompt("Wanna play again? type 1 to play again")

    if (q == "1") {
        greeting(program())
        computerNumber(randomNumber())
    } else {
        alert("Thanks for playing!")
    }



