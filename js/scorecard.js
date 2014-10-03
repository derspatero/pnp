var course = {
	"coursename":"Queen Elizabeth Pitch and Putt",
	"players":["Ed","Ryan","Mike","Sam"],
	"holes":[
		{"hole":1,"yd":75,"par":4,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":2,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":3,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":4,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":5,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":6,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":7,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":8,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":9,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":10,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":11,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":12,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":13,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":14,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":15,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":16,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":17,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0},
		{"hole":18,"yd":75,"par":3,"player1":0,"player2":0,"player3":0,"player4":0}
	],
	"fronttotal":{"yd":0,"par":0,"player1":0,"player2":0,"player3":0,"player4":0},
	"backtotal":{"yd":0,"par":0,"player1":0,"player2":0,"player3":0,"player4":0},
	"total":{"yd":0,"par":0,"player1":0,"player2":0,"player3":0,"player4":0}
}

/*
Front 9 scorecard
*/

$("h1").html(course.coursename);

$("#frontnine").append('<tr><th>hole</th><th>yd</th><th>par</th><th>' + 
	course.players[0] + '</th><th>' + 
	course.players[1] + '</th><th>' + 
	course.players[2] + '</th><th>' + 
	course.players[3] + '</th></tr>');

for (i=0; i<course.holes.length/2; i++) {

	var scoreform = '<label for="select-native-2"></label><select name="select-native-2" id="select-native-2">';
	for (j=0; j<=parseInt(course.holes[i].par); j++) {
		scoreform += '<option value="' + j + '">' + j + '</option>';
	}	
	// scoreform += '<option value="0">0</option>';
	// scoreform += '<option value="1">1</option>';
	// scoreform += '<option value="2">2</option>';
	// scoreform += '<option value="3">3</option>';
	// scoreform += '<option value="4">4</option>';
	// scoreform += '<option value="5">5</option>';
	// scoreform += '<option value="6">6</option>';
	// scoreform += '<option value="7">7</option>';
	// scoreform += '<option value="8">8</option>';
	// scoreform += '<option value="9">9</option>';
	// scoreform += '<option value="10">10</option>';
	scoreform += '</select>';

	$("#frontnine").append('<tr><td>' + course.holes[i].hole + '</td><td>' + 
		course.holes[i].yd + '</td><td>' + course.holes[i].par + 
		// '</td><td class="playerscore">' + course.holes[i].player1 + 
		// '</td><td class="playerscore">' + course.holes[i].player2 + 
		// '</td><td class="playerscore">' + course.holes[i].player3 + 
		// '</td><td class="playerscore">' + course.holes[i].player4 + '</td></tr>');
		'</td><td class="playerscore" id="player1hole' + i + '">' + scoreform + 
		'</td><td class="playerscore" id="player2hole' + i + '">' + scoreform + 
		'</td><td class="playerscore" id="player3hole' + i + '">' + scoreform + 
		'</td><td class="playerscore" id="player4hole' + i + '">' + scoreform + '</td></tr>');
	course.fronttotal.yd += parseInt(course.holes[i].yd);
	course.fronttotal.par += parseInt(course.holes[i].par);
	course.fronttotal.player1 += parseInt(course.holes[i].player1);
	course.fronttotal.player2 += parseInt(course.holes[i].player2);
	course.fronttotal.player3 += parseInt(course.holes[i].player3);
	course.fronttotal.player4 += parseInt(course.holes[i].player4);



}

$("#frontnine").append('<tr><td></td><td>' + 
	course.fronttotal.yd + '</td><td>' + course.fronttotal.par + '</td><td>' + 
	course.fronttotal.player1 + '</td><td>' + course.fronttotal.player2 + '</td><td>' + 
	course.fronttotal.player3 + '</td><td>' + course.fronttotal.player4 + '</td></tr>');

/*
End Front 9 scorecard
*/

/*
Back 9 scorecard
*/

$("h1").html(course.coursename);

$("#backnine").append('<tr><th>hole</th><th>yd</th><th>par</th><th>' + 
	course.players[0] + '</th><th>' + 
	course.players[1] + '</th><th>' + 
	course.players[2] + '</th><th>' + 
	course.players[3] + '</th></tr>');

for (i=course.holes.length/2; i<course.holes.length; i++) {
	$("#backnine").append('<tr><td>' + course.holes[i].hole + '</td><td>' + 
		course.holes[i].yd + '</td><td>' + course.holes[i].par + 
		// '</td><td class="playerscore">' + course.holes[i].player1 + 
		// '</td><td class="playerscore">' + course.holes[i].player2 + 
		// '</td><td class="playerscore">' + course.holes[i].player3 + 
		// '</td><td class="playerscore">' + course.holes[i].player4 + '</td></tr>');
		'</td><td class="playerscore" id="player1hole' + i + '">' + scoreform + 
		'</td><td class="playerscore" id="player2hole' + i + '">' + scoreform + 
		'</td><td class="playerscore" id="player3hole' + i + '">' + scoreform + 
		'</td><td class="playerscore" id="player4hole' + i + '">' + scoreform + '</td></tr>');
	course.backtotal.yd += parseInt(course.holes[i].yd);
	course.backtotal.par += parseInt(course.holes[i].par);
	course.backtotal.player1 += parseInt(course.holes[i].player1);
	course.backtotal.player2 += parseInt(course.holes[i].player2);
	course.backtotal.player3 += parseInt(course.holes[i].player3);
	course.backtotal.player4 += parseInt(course.holes[i].player4);
}

course.total.yd = course.fronttotal.yd + course.backtotal.yd;
course.total.par = course.fronttotal.par + course.backtotal.par;
course.total.player1 = course.fronttotal.player1 + course.backtotal.player1;
course.total.player2 = course.fronttotal.player2 + course.backtotal.player2;
course.total.player3 = course.fronttotal.player3 + course.backtotal.player3;
course.total.player4 = course.fronttotal.player4 + course.backtotal.player4;

$("#backnine").append('<tr><td>IN</td><td>' + 
	course.backtotal.yd + '</td><td>' + course.backtotal.par + '</td><td>' + 
	course.backtotal.player1 + '</td><td>' + course.backtotal.player2 + '</td><td>' + 
	course.backtotal.player3 + '</td><td>' + course.backtotal.player4 + '</td></tr>');

$("#backnine").append('<tr><td>OUT</td><td>' + 
	course.fronttotal.yd + '</td><td>' + course.fronttotal.par + '</td><td>' + 
	course.fronttotal.player1 + '</td><td>' + course.fronttotal.player2 + '</td><td>' + 
	course.fronttotal.player3 + '</td><td>' + course.fronttotal.player4 + '</td></tr>');

$("#backnine").append('<tr><td>TOTAL</td><td>' + 
	course.total.yd + '</td><td>' + course.total.par + '</td><td>' + 
	course.total.player1 + '</td><td>' + course.total.player2 + '</td><td>' + 
	course.total.player3 + '</td><td>' + course.total.player4 + '</td></tr>');

/*
End back 9 scorecard
*/

$(".playerscore").select(function() {
	event
});