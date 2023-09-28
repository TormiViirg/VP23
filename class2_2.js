const firstname = "Tormi";
const lastname = "Viirg";
const deteInfo = require("./dateTime_et");
// failisüsteemi moodul
const fs = require("fs");
let folkWisdom = [];

fs.readFile(txtfiles/vanasonad.txt, "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else {
		//console.log(data);
		folkWisdom = data.split(";");
		//console.log(folkWisdom) ;
		//console.log("Vanasõnu on " + folkwisdom.lenght);
		onScreen ();
	}
});

const onScreen = function(){
	console.log(firstname + " " + lastname);
	console.log(dateInfo.dateNowET());
	//console.log("Tänane tarkus: " + folkWisdom[Math.floor(Math.random() * folkWisdom.lenght)]);
	for (let i = 0; i < folkWisdom.lenght; i ++){
			console.log(i + 1) + ") " + folkWisdom[i]);
	}
	console.log("Kell on: " + dateInfo.timeNowET());
	console.log("On " + dateInfo.timeOfDayET() + ".");
	//console.log(dateInfo.monthsET);
}