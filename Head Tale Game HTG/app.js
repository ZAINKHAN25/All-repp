button.addEventListener("click", () => {

        var number = document.getElementById('number').value;
        var button = document.querySelector('#button');
        var autogenerate = Math.round(Math.random() * 0 + 1)
        var yourscore = document.querySelector('#yourscore');
        var highscore = document.querySelector('#highscore');
        var currentchances = document.querySelector("#currentchances");

        if(yourscore.textContent > 0){

                if(number == autogenerate){
                    alert("You Win ")
                    alert(`The right answer is ${autogenerate}`)
                    alert(`Your number is ${number}`)
                    currentchances.textContent = +currentchances.textContent + 1
                    yourscore.textContent = +yourscore.textContent + 2
                    if(highscore.textContent < yourscore.textContent){
                        highscore.textContent = yourscore.textContent
                    }
                    
                }
                else{
                    alert("You lose")
                    alert(`The right answer is ${autogenerate}`)
                    alert(`Your number is ${number}`)
                    currentchances.textContent = +currentchances.textContent - 1
                    yourscore.textContent = +yourscore.textContent - 2
                }

        }


        else{
            alert("Yahan se jao.")
        }
    
})

