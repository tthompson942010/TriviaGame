var formOne = [
	// 'Question1': 
	{
		"question": "What vault did the the Sole Survivor wake up in at the beginning of Fallout 4?",
		"answerOptions":
	 	[
			{"answer": "Vault 136"},
			{"answer": "Vault 52"},
			{"answer": "Vault 186"},
			//correct answer
			{"answer": "Vault 111"}
		]
	},
	// 'Question2': 
	{
		"question": "Where did Fallout 3 take place?",
		"answerOptions":
		[
			{'answer': "Boston"},
			{'answer': "New York"},
			{'answer': "Tokyo"},
			//correct answer
			{'answer':"Washington DC"}
		]
	},
	// 'Question3':
	 {
		"question": "Who shot the Courier at the beginning of Fallout: NV?",
		"answerOptions":
		[
			{'answer': "His Mother"},
			{'answer': "Who?"},
			//correct answer
			{'answer': "Benny"},
			{'answer': "Moira"}
		]
	}
]

$(document).ready(function(){
	function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
	}

	function printForm(array) {
		var n = 0
		for (var i = 0; i < array.length; i++){
			var downADiv = $('#Fallout').children().eq(n);
			downADiv.html('<p>' + array[i].answer + '</p>');
			console.log(downADiv.text());
			n++;
		};	
	};

	function WriteQuestion(x) {
		$('#questDisplay').html('<p>' + formOne[x].question +'</p>');
	


	};

	$('#startGame').click(function(){
		shuffleArray(formOne[2].answerOptions);
		shuffleArray(formOne[1].answerOptions);
		shuffleArray(formOne[0].answerOptions);
		shuffleArray(formOne);
		$('#answerList').show();
		printForm(formOne[2].answerOptions);

		console.log(formOne[2]);
		$('#startScreen').hide();
		$('#questDisplay').show();
		WriteQuestion(2);

	})

	$('.fallButton').hover(function(){
		$(this).toggleClass('hoverAnswer')
	});

	$useranswer = $('.answerChoice')
	$useranswer.click(function(){
		var Answer = $(this).text()
			$('#questDisplay').hide()
			$('#answerList').hide()
			// $('#faLogo').hide()
		if (Answer == "Vault 111" || Answer == "Benny" || Answer == "Washington DC"){
			
			$('#correctScreen').show()
			if(Answer == "Vault 111"){
				$('#correctImage').html($("<img src= 'assets/images/vault111.gif'>").css("width","500px"));
			}
			else if(Answer == "Benny"){
				$('#correctImage').html($("<img src= 'https://66.media.tumblr.com/0c695d8cb5a5f9786ab4ed5ba1015a73/tumblr_mtpmh2zWVO1s7wrwho1_400.gif'>").css("width","500px"));
			}
			else {
				$('#correctImage').html($("<img src= 'http://i.imgur.com/L81eXXS.gif'>").css("width","500px"));
			}
		}
		else {
			$('#wrongScreen').show()
				$('#wrongImage').html($("<img src= 'http://67.media.tumblr.com/a9563157944b1073bd25978e8fa91d02/tumblr_nwycenWAyI1rknp28o1_500.gif'>").css("width","500px"));
		}

	})

});