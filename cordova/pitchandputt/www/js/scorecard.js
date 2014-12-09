var course = {
	"coursename":"Pitch and Putt",
	"players":["P1","P2","P3","P4"],
	"holes":[
		{"hole":1,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":2,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":3,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":4,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":5,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":6,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":7,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":8,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":9,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":10,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":11,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":12,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":13,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":14,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":15,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":16,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":17,"yd":75,"par":3,"playerscores":[0,0,0,0]},
		{"hole":18,"yd":75,"par":3,"playerscores":[0,0,0,0]},
	],
	"fronttotal":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
	"backtotal":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
	"total":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
}

var scoreformbutton = 'href="#popup" class="ui-btn ui-shadow ui-corner-all playerscore" data-rel="dialog" data-transition="pop"';

var scoreid;



/*
Front 9 scorecard
*/

$("h1").html(course.coursename);
createScoreCard();

function createScoreCard() {
	// var player0scores;
	// var player1scores;
	// var player2scores;
	// var player3scores;


	$("#frontnine").html("");
	$("#backnine").html("");

	$("#frontnine").append('<tr><th>hole</th><th>' + 
		// 'yd</th><th>' +
		// 'par</th><th>' + 
		course.players[0] + '</th><th>' + 
		course.players[1] + '</th><th>' + 
		course.players[2] + '</th><th>' + 
		course.players[3] + '</th></tr>');

	for (i=0; i<course.holes.length/2; i++) {

		var scoreform = course.holes[i];

		$("#frontnine").append('<tr><td>' + course.holes[i].hole + 
			// '</td><td>' + course.holes[i].yd + 
			// '</td><td>' + course.holes[i].par + 
			'</td><td><a id="player_0_hole_' + i + '" ' + scoreformbutton + '>' + scoreform.playerscores[0] + '</a>' +
			'</td><td><a id="player_1_hole_' + i + '" ' + scoreformbutton + '>' + scoreform.playerscores[1] + '</a>' +
			'</td><td><a id="player_2_hole_' + i + '" ' + scoreformbutton + '>' + scoreform.playerscores[2] + '</a>' +
			'</td><td><a id="player_3_hole_' + i + '" ' + scoreformbutton + '>' + scoreform.playerscores[3] + '</a></td></tr>');

	}

	updatefronttotals();

	/*
	End Front 9 scorecard
	*/


	/*
	Start Back 9 scorecard
	*/


	$("#backnine").append('<tr><th>hole</th><th>' + 
		// 'yd</th><th>' +
		// 'par</th><th>' + 
		course.players[0] + '</th><th>' + 
		course.players[1] + '</th><th>' + 
		course.players[2] + '</th><th>' + 
		course.players[3] + '</th></tr>');

	for (i=9; i<course.holes.length; i++) {

		var scoreform = course.holes[i];

		$("#backnine").append('<tr><td>' + course.holes[i].hole + 
			// '</td><td>' + course.holes[i].yd + 
			// '</td><td>' + course.holes[i].par + 
			'</td><td><a id="player_0_hole_' + i + '" ' + scoreformbutton + '>' + scoreform.playerscores[0] + '</a>' +
			'</td><td><a id="player_1_hole_' + i + '" ' + scoreformbutton + '>' + scoreform.playerscores[1] + '</a>' +
			'</td><td><a id="player_2_hole_' + i + '" ' + scoreformbutton + '>' + scoreform.playerscores[2] + '</a>' +
			'</td><td><a id="player_3_hole_' + i + '" ' + scoreformbutton + '>' + scoreform.playerscores[3] + '</a></td></tr>');
	}

	updatebacktotals();

	/*
	End Back 9 scorecard
	*/


}

$(".playerscore").click(function () {
	// alert("on click");
	scoreid = $(this).attr("id");
	// alert("scoreid: " + scoreid);

	$("#scoreselector").html('<option value="1">1</option>' +
      '<option value="2">2</option>' + 
      '<option value="3" selected="selected">3</option>' +
      '<option value="4">4</option>' +
      '<option value="5">5</option>' + 
      '<option value="6">6</option>');

	if(scoreid.split("_")[3] < 9){
		$("#redirectbacktoscorecard").attr("href", "#one");
	}
	else {
		$("#redirectbacktoscorecard").attr("href", "#two");
	}



});


$("#redirectbacktoscorecard").click(function() {
    var score = $("#scoreselector").val(); 

    var playerindex = String(scoreid.split("_")[1]);
    var holeindex = String(scoreid.split("_")[3]);
	// alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);
	// alert("new score: " + score);

    course.holes[holeindex].playerscores[playerindex] = score;

    // alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);

    $("#scoreselector").html("");
    updatefronttotals();
    updatebacktotals();
    updateholescore(scoreid, score);

});

function updateholescore(holeid, score){
	$("#" + holeid).html(score);
}

function updatebacktotals(){

	course.backtotal.yd = 0;
	course.backtotal.par = 0;
	course.backtotal.playerscores[0] = 0;
	course.backtotal.playerscores[1] = 0;
	course.backtotal.playerscores[2] = 0;
	course.backtotal.playerscores[3] = 0;

	course.total.yd = 0;
	course.total.par = 0;
	course.total.playerscores[0] = 0;
	course.total.playerscores[1] = 0;
	course.total.playerscores[2] = 0;
	course.total.playerscores[3] = 0;


	for (i=9; i<course.holes.length; i++) {
		course.backtotal.yd += parseInt(course.holes[i].yd);
		course.backtotal.par += parseInt(course.holes[i].par);
		course.backtotal.playerscores[0] += parseInt(course.holes[i].playerscores[0]);
		course.backtotal.playerscores[1] += parseInt(course.holes[i].playerscores[1]);
		course.backtotal.playerscores[2] += parseInt(course.holes[i].playerscores[2]);
		course.backtotal.playerscores[3] += parseInt(course.holes[i].playerscores[3]);
	}

	for (i=0; i<course.holes.length; i++) {
		course.total.yd += parseInt(course.holes[i].yd);
		course.total.par += parseInt(course.holes[i].par);
		course.total.playerscores[0] += parseInt(course.holes[i].playerscores[0]);
		course.total.playerscores[1] += parseInt(course.holes[i].playerscores[1]);
		course.total.playerscores[2] += parseInt(course.holes[i].playerscores[2]);
		course.total.playerscores[3] += parseInt(course.holes[i].playerscores[3]);
	}



	$("#backninetotals").html('<tr><td>Front</td><td>' + 
		// course.fronttotal.yd + '</td><td>' + 
		// course.fronttotal.par + '</td><td>' + 
		course.fronttotal.playerscores[0] + '</td><td>' + course.fronttotal.playerscores[1] + '</td><td>' + 
		course.fronttotal.playerscores[2] + '</td><td>' + course.fronttotal.playerscores[3] + '</td></tr>');


	$("#backninetotals").append('<tr><td>Back</td><td>' + 
		// course.backtotal.yd + '</td><td>' + 
		// course.backtotal.par + '</td><td>' + 
		course.backtotal.playerscores[0] + '</td><td>' + course.backtotal.playerscores[1] + '</td><td>' + 
		course.backtotal.playerscores[2] + '</td><td>' + course.backtotal.playerscores[3] + '</td></tr>');

	$("#backninetotals").append('<tr><td>Total</td><td>' + 
		// course.backtotal.yd + '</td><td>' + 
		// course.backtotal.par + '</td><td>' + 
		course.total.playerscores[0] + '</td><td>' + course.total.playerscores[1] + '</td><td>' + 
		course.total.playerscores[2] + '</td><td>' + course.total.playerscores[3] + '</td></tr>');

}

function updatefronttotals(){

	course.fronttotal.yd = 0;
	course.fronttotal.par = 0;
	course.fronttotal.playerscores[0] = 0;
	course.fronttotal.playerscores[1] = 0;
	course.fronttotal.playerscores[2] = 0;
	course.fronttotal.playerscores[3] = 0;

	for (i=0; i<course.holes.length/2; i++) {
		course.fronttotal.yd += parseInt(course.holes[i].yd);
		course.fronttotal.par += parseInt(course.holes[i].par);
		course.fronttotal.playerscores[0] += parseInt(course.holes[i].playerscores[0]);
		course.fronttotal.playerscores[1] += parseInt(course.holes[i].playerscores[1]);
		course.fronttotal.playerscores[2] += parseInt(course.holes[i].playerscores[2]);
		course.fronttotal.playerscores[3] += parseInt(course.holes[i].playerscores[3]);
	}

	$("#frontninetotals").html('<tr><td>Front</td><td>' + 
		// course.fronttotal.yd + '</td><td>' + 
		// course.fronttotal.par + '</td><td>' + 
		course.fronttotal.playerscores[0] + '</td><td>' + course.fronttotal.playerscores[1] + '</td><td>' + 
		course.fronttotal.playerscores[2] + '</td><td>' + course.fronttotal.playerscores[3] + '</td></tr>');
}
