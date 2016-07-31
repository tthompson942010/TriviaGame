
$(document).ready(function(){

	function finalScreen(){
		$('#resetButton').show()
		$('#wrongScreen').hide()
		$('#correctScreen').hide()
		$('#answerList').hide()
		$('#questDisplay').show()
		var quest = $('#questDisplay')
		$('#timer').hide()
		quest.html('<h1>'+'GAME OVER'+'</h1>'+'<br>'+'<h3>'+'Right Answers: '+ rightAnswer + '<br>'+'Wrong Answers: '+wrongAnswer+'<h3>')

	}
	function resetGame(){
			 formOne = [
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
 rightAnswer = 0
 wrongAnswer = 0
 timer = 0
 selectInd = 0
	gameStart(selectInd)
	}
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

// Runs the initial functions on start click
	function gameStart() {
		$('#resetButton').hide()
		$('#correctScreen').hide();
		$('#wrongScreen').hide();
		$('#startScreen').hide();
		$('#questDisplay').show();
		$('#answerList').show();
		printForm(formOne[selectInd].answerOptions);
		WriteQuestion(selectInd);
		time = 10
		$('#timer').show()
		$('#timer').html(time)	
		chair = setInterval(countDown, 1000)
	};

// Timer function
	function countDown() {
		time --;
		$('#timer').html(time);	
		if (time < 1) {
			clearInterval(chair);
			$('#questDisplay').hide();
			$('#answerList').hide();
			$('#wrongScreen').show();
			wrongAnswer++;
			selectInd++;
			if (selectInd >= formOne.length){
				setTimeout(finalScreen, 3000)
			}
			else {
				setTimeout(gameStart, 3000)
			}

		}
	}

// hover over buttons
	$('.fallButton').hover(function(){
		$(this).toggleClass('hoverAnswer')
		});

	$('#startGame').click(function(){
		resetGame()
	});

	$('#resetButton').click(function(){
		resetGame()
	});


	$useranswer = $('.answerChoice')
		$useranswer.click(function(){
		var Answer = $(this).text()
			$('#questDisplay').hide()
			$('#answerList').hide()
			clearInterval(chair)
			if(Answer == formOne[selectInd].answerOptions[4].correctanswer){
				rightAnswer++;
				$('#correctScreen').show()
				$('#correctImage').html( '<img src="' + formOne[selectInd].correctgif +'">');
				$('#correctImage').addClass('faLogo')
			}
			else {
				wrongAnswer++;
				$('#wrongScreen').show()
				
			}
			selectInd++;
			if (selectInd >= formOne.length) {
				setTimeout(finalScreen, 3000)
			}

			else {
				setTimeout(gameStart, 3000)
			}

		});


});
