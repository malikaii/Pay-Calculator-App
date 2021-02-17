

function recordAnswers(){
    
    document.getElementById('button').addEventListener('click', (e) => {
        e.preventDefault();
        var first_answer = document.getElementById('answer').value;
        var second_answer = document.getElementById('answer2').value;
        var third_answer = document.getElementById('answer3').value;
        var fourth_answer = document.getElementById('answer4').value;

        if(third_answer == "yes" || third_answer == "Yes"){
            second_answer = Number(second_answer) + 1;
        }

        var pay = first_answer*second_answer*fourth_answer;

        document.getElementById('payamount').innerHTML = "Your average pay before taxes is: $" + pay;
    })

}

recordAnswers();


