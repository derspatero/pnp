var course = {}

var scoreformbutton = 'href="#popup" class="ui-btn ui-shadow ui-corner-all playerscore" data-rel="dialog" data-transition="pop"';

var scoreid;

var file_name = "scorecard.txt";		


function createblankscorecard(){
	course = {
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
	createScoreCard();
}

/*
Front 9 scorecard
*/



function createScoreCard() {

	$("h1").html(course.coursename);

	// var player0scores;
	// var player1scores;
	// var player2scores;
	// var player3scores;

	// alert("create score card");


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


/*
START event handlers
*/

$(".playerscore").click(function () {
	// alert("on click");
	scoreid = $(this).attr("id");
	// alert("scoreid: " + scoreid);

	var playernumber = scoreid.split("_")[1];
	var holenumber = scoreid.split("_")[3];

	$("#scoreelement").html("Select hole " + course.holes[holenumber].hole + " score for " + course.players[playernumber]);

	// $("#scoreselector").html('<option value="1">1</option>' +
 //      '<option value="2">2</option>' + 
 //      '<option value="3" selected="selected">3</option>' +
 //      '<option value="4">4</option>' +
 //      '<option value="5">5</option>' + 
 //      '<option value="6">6</option>');

	if(scoreid.split("_")[3] < 9){
		$("#redirectbacktoscorecard").attr("href", "#one");
	}
	else {
		$("#redirectbacktoscorecard").attr("href", "#two");
	}



});


$("#redirectbacktoscorecard").click(function() {
    var score = $("#scoreselector").val(); 

    // var score = $("#scoreselector :radio:checked").val();

    var playerindex = String(scoreid.split("_")[1]);
    var holeindex = String(scoreid.split("_")[3]);
	// alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);
	// alert("new score: " + score);

    course.holes[holeindex].playerscores[playerindex] = parseInt(score);

    // alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);

    // $("#scoreselector").html("");
    updatefronttotals();
    updatebacktotals();
    updateholescore(scoreid, score);
    savefile();

});

/*
END event handlers
*/



}



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

function savefile(){
    var textToWrite = JSON.stringify(course);
    writeFile(file_name, textToWrite);
}





var _fileSystemRoot;
var _pathToPackage = "Android/data/com.derspatero.scorecard/";


// Wait for device API libraries to load
//
document.addEventListener("deviceready",     
    function () {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 
            0, 
            function (fileSystem) {
                _fileSystemRoot = fileSystem.root;
                _fileSystemRoot.getDirectory(
                    _pathToPackage, 
                    {create: true, exclusive: false},
                    function(dir)   { /* SUCCESS CALLBACK CODE */ },
                    function(error) { /* FAILURE CALLBACK CODE */ }
                );
            }, 
            fail
        );
    }, 
    false
);

// device APIs are available
//

function writeFile(fileName, textToWrite) {
    _fileSystemRoot.getFile(_pathToPackage + '/' + fileName, 
        {create: true, exclusive: false}, 
        function (fileEntry) {
            fileEntry.createWriter(
                function (writer) {
                    writer.onwriteend = function(evt) {
                        // AndroidToast.showShortToast("contents of file " + _pathToPackage + '/' +  fileName + ": '" + textToWrite + "'");
                    };
                    writer.write(textToWrite);
                }, 
                fail
            );
        }, 
        fail
    );
}   

function fail(error) {
    console.log(error.code);
    alert("fail!: " + error);
}

function openFileFromDefaultLocation() {
    filename = _pathToPackage + file_name;  
    // alert("default path added: " + file_name);
    getFile(filename);
}

function getFile(filename) {
    _fileSystemRoot.getFile(
        filename, 
        null, 
        function (fileEntry) {
            fileEntry.file(
                function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function(evt) {
                        console.log("Read as text");
                        var jsonstring = evt.target.result;
                        // alert(jsonstring);
                        course = JSON.parse(jsonstring);
 	                  	// alert(JSON.stringify(course));
                    	createScoreCard();
                    };
                    reader.readAsText(file);
                }, 
                fail
            );
        }, 
        fail
    );
}


function showdirectory(displayId, fileDisplayId){
    openDirectory("", displayId, fileDisplayId);
}

function openDirectory(path, displayId, fileDisplayId) {
    _fileSystemRoot.getDirectory(path, {create: false, exclusive: false}, function (dirEntry) {
        var directoryReader = dirEntry.createReader();
        var onclickfunction;
        var patharray = path.split("/");
        var target = "";

// 
// Calculate and display parent path
//    
        for (var i = 0; i < patharray.length - 2; i++) {
            target += patharray[i] + "/";
        };
        
        $(displayId).html("<em>Folder: " + path + "</em><br /><hr>");

        if(path != ""){
            onclickfunction = "openDirectory('" + target + "','" + displayId + "','" + fileDisplayId + "')";
            $(displayId).append('<a id="parent_path">../  (parent folder)</a><br /><br />');
            $("#parent_path").attr("onclick",onclickfunction);
        }


//
// Display folder items
// 
        directoryReader.readEntries(function (entries) {
            for (var i=0; i<entries.length; i++) {
                console.log(entries[i].name);
                if (entries[i].isDirectory) {
                    target = path + entries[i].name + '/';
                    onclickfunction = "openDirectory('" + target + "','" + displayId + "','" + fileDisplayId + "')";
                     $(displayId).append('<a id="menu-folder-item-' + i + '">' + entries[i].name + '/</a><br /><br />');
                    $("#menu-folder-item-"+i).attr("onclick",onclickfunction);
                }
                else if (entries[i].isFile) {
                    var filename = entries[i].name;
                    onclickfunction = "getFile('" + path + filename + "','" + fileDisplayId + "')";
                    // alert(onclickfunction);
                    $(displayId).append('<a id="menu-file-item-' + i + '" class="menu-item-file">' + filename + '</a><br /><br />');
                    $("#menu-file-item-"+i).attr("onclick",onclickfunction);
            
                }    
            }
        },fail);
    }, fail);  
}








