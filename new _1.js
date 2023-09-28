exports.dateNowET = Function(){
	let timeNow = new Date();
	let hoursNow = timeNow.getHours();
	let minutesNow = timeNow.getMinutes();
	let secondsNow = timeNow.getseconds();
	let completeDate = hoursNow + "." + minutesNow + "." +secondsNow);
	return completeDate;
}