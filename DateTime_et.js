const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

dateNowET = function() {
	let timeNow = new Date () ;
	return timeNow.getDate() + "." + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear() ;
}

const timeNowET = function(){
	let timeNow = new Date();
	return timeNow.getHours() + ":0" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}


const timeOfDayET = function (){
	let dayPart = "suvaline aeg";
	const hourNow = new Date () .getHours();
	if (hourNow > 6 && hournow <= 11){
		dayPart = "hommik"
	}
	if (hourNow > 12 && hournow < 14){
		dayPart = "keskpäev"
	}
	if (hourNow > 14 && hournow < 18){
		dayPart = "pärastlõuna"
	}
	if (hourNow >= 18){
		dayPart = "Õhtu"
	}
	return dayPart;
}

module.exports = {dateNowET: dateNowET, timeNowET: timeNowET, monthsNowET: monthNamesET, timeOfDayET: timeOfDayET};
