var course = {
	"coursename":"Queen Elizabeth Pitch and Putt",
	"players":["Ed","Ryan","Mike","Sam"],
	"holes":[
		{"hole":1,"yd":75,"par":4,"playerscores":[0,0,0,0]},
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

	$("#frontnine").append('<tr><th>hole</th><th>yd</th><th>par</th><th>' + 
		course.players[0] + '</th><th>' + 
		course.players[1] + '</th><th>' + 
		course.players[2] + '</th><th>' + 
		course.players[3] + '</th></tr>');

	for (i=0; i<course.holes.length/2; i++) {

		var scoreform = course.holes[i];

		$("#frontnine").append('<tr><td>' + course.holes[i].hole + '</td><td>' + 
			course.holes[i].yd + '</td><td>' + course.holes[i].par + 
			'</td><td><a id="player_0_hole_' + i + '" href="#popupBasic" data-rel="popup" class="ui-btn ui-corner-all ui-shadow ui-btn-inline playerscore" data-transition="pop">' + scoreform.playerscores[0] + '</a>' +
			'</td><td><a id="player_1_hole_' + i + '" href="#popupBasic" data-rel="popup" class="ui-btn ui-corner-all ui-shadow ui-btn-inline playerscore" data-transition="pop">' + scoreform.playerscores[1] + '</a>' +
			'</td><td><a id="player_2_hole_' + i + '" href="#popupBasic" data-rel="popup" class="ui-btn ui-corner-all ui-shadow ui-btn-inline playerscore" data-transition="pop">' + scoreform.playerscores[2] + '</a>' +
			'</td><td><a id="player_3_hole_' + i + '" href="#popupBasic" data-rel="popup" class="ui-btn ui-corner-all ui-shadow ui-btn-inline playerscore" data-transition="pop">' + scoreform.playerscores[3] + '</a></td></tr>');

	}

	updatetotals();
	/*
	End Front 9 scorecard
	*/

}

$(".playerscore").click(function () {
	// alert("on click");
	scoreid = $(this).attr("id");

	// alert(scoreid);




});


	$("#scoreselector").change(function() {
	    var score = $(this).val(); 

	    var playerindex = String(scoreid.split("_")[1]);
	    var holeindex = String(scoreid.split("_")[3]);
		// alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);
		// alert("new score: " + score);

	    course.holes[holeindex].playerscores[playerindex] = score;

	    // alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);


	    updatetotals();
	    updateholescore(scoreid, score);
	    $(".defaultselection").attr("selected", "selected");

	});

function updateholescore(holeid, score){
	$("#" + holeid).html(score);
}

function updatetotals(){

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


	$("#frontninetotals").html('<tr><td></td>9<td>' + 
		course.fronttotal.yd + '</td><td>' + course.fronttotal.par + '</td><td>' + 
		course.fronttotal.playerscores[0] + '</td><td>' + course.fronttotal.playerscores[1] + '</td><td>' + 
		course.fronttotal.playerscores[2] + '</td><td>' + course.fronttotal.playerscores[3] + '</td></tr>');
}
