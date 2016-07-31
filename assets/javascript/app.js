var formOne = [
	// 'Question1': 
	{
		"question": "What vault did the the Sole Survivor wake up in at the beginning of Fallout 4?",
		"correctgif": "assets/images/vault111.gif",
		"answerOptions":
	 	[
			{"answer": "Vault 136"},
			{"answer": "Vault 52"},
			{"answer": "Vault 186"},
			//correct answer
			{"answer": "Vault 111"},
			{"correctanswer": "Vault 111"},
		]
	},
	// 'Question2': 
	{
		"question": "Where did Fallout 3 take place?",
		"correctgif": "assets/images/thumbsUp.gif",
		"answerOptions":
		[
			{'answer': "Boston"},
			{'answer': "New York"},
			{'answer': "Tokyo"},
			//correct answer
			{'answer':"Washington DC"},
			{'correctanswer':"Washington DC"}
		]
	},
	// 'Question3':
	 {
		"question": "Who shot the Courier at the beginning of Fallout: NV?",
		"correctgif": "assets/images/benny.gif",
		"answerOptions":
		[
			{'answer': "His Mother"},
			{'answer': "Who?"},
			//correct answer
			{'answer': "Benny"},
			{'answer': "Moira"},
			{'correctanswer': "Benny"},
		]
	}
]

var correctAns = 0
var incorrectAns = 0
$(document).ready(function(){

// //shuffles array indexes
// 	function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// 	}

// writing answer choices to answerList
	function printForm(array) {
		var n = 0
		for (var i = 0; i < array.length; i++){
			var downADiv = $('#Fallout').children().eq(n);
			downADiv.html('<p>' + array[i].answer + '</p>');
			console.log(downADiv.text());
			n++;
		};	
	};

//writing question to questDisplay
	function WriteQuestion(x) {
		$('#questDisplay').html('<p>' + formOne[x].question +'</p>');
	}
// var time;
// 	function countDown(){
//         secondsLeft--;
//         $("#timer").html(secondsLeft);
//         if (secondsLeft < 1) {
//             // console.log("TIME");
//             clearInterval(time);
//             $("#questDisplay").html("Out of time!");
//             $('#questDisplay').append("<h2>" + "The correct answer is " + )
//             $("#answerList").hide();
//             $("#answers").html("<h2>The Correct Answer was: " + randomObject.answer + "</h2><br><img src='assets/images/" + randomObject.gif[0] + "'>");
//             $("#answers").show();
            
//             unAnswered++;
//             // console.log(unAnswered);
//             count++;
            
//             if(count >= objectArray.length){
                
//                 setTimeout(finishGame, 3000);
//             }
//             else{
            
                
//                 setTimeout(fillWords, 3000);
//             };
//         };
//     };//TIMER END
	function gameStart(a) {
		$('#startScreen').hide()
		$('#questDisplay').show()
		$('#answerList').show()
		printForm(formOne[a].answerOptions)
		WriteQuestion(a)
		$('#timer').show()
	

	};
// hover over buttons
	$('.fallButton').hover(function(){
		$(this).toggleClass('hoverAnswer')
		});

// Start button functions
	//Shuffles question order
	//Shuffles answer order in each question
	//prints index[2] question/answers to proper forms
	$('#startGame').click(function(){
	gameStart(2)
	})



// // choosing an answer, compare to correct answer list
	$useranswer = $('.answerChoice')
	$useranswer.click(function(){
		var Answer = $(this).text()
			$('#questDisplay').hide()
			$('#answerList').hide()
			if(Answer == )
			// $('#faLogo').hide()
// 		if (Answer == "Vault 111" || Answer == "Benny" || Answer == "Washington DC"){
			
// 			$('#correctScreen').show()
// 			if(Answer == "Vault 111"){
// 				$('#correctImage').html($("<img src= 'assets/images/vault111.gif'>").css("width","500px"));
// 			}
// 			else if(Answer == "Benny"){
// 				$('#correctImage').html($("<img src= 'assets/images/benny.gif'>").css("width","500px"));
// 			}
// 			else {
// 				$('#correctImage').html($("<img src= 'assets/images/thumbsUp.gif'>").css("width","500px"));
// 			}
// 		}
// 		else {
// 			$('#wrongScreen').show()
// 				$('#wrongImage').html($("<img src= 'assets/images/bloodyMess.gif'>").css("width","500px"));
// 		}
// 		setTimeout()
// 	})

});