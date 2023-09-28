exports.dateNowET = Function(){
	//let timeNow = new Date();
	//let dateNow = timeNow.getDate();
	//let monthNow = timeNow.getMonth();
	//let yearNow = timeNow.getFullYear(); monthNamesET[0] monthNamesET[timeNow.getMonth ()]
	const monthNamesEE = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	let timeNow = new Date () ;
	return timeNow.getDate() + "."
	let completeDate = dateNow + ".0" + (monthNow + 1) + "." +yearNow);
	return completeDate;
}
