const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs")
const pageHead = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Tormi Viirg, veebiprogrammeerimine 2023</title>\n</head>\n<body>':
const pageFoot =
http.createServer(function(req, res){
	console.log(url.parse(req.url, true));
	let currentURL = url.parse(req.url, true);
	if(currentURL.pathname === "/"){
		//määrame tagastavate andmete päise, t on veebileht
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('<p><a href="addName">Lisame nime!</p>');
		res.write(pageFoot);
		res.write('\n\t<img src="public/banner/banner.png" alt =">"Lehe bänner">\n');
		res.write('<h1>Tormi Viirg </h1><p>See leht on loodud <a href="https://www.tlu.ee" target="_blank">TLÜ Digitehnoloogiate</a> instituudis õppetöö raames!</p><hr><p> Ärge siia kirjutatut liiga hoolikalt vaadake, kunagi ei ea mida leida võib. <p> Now, are there any other horrors you wish to try and insert into my system, or is your electronic butchery done?<p><hr><p>Kursus, mille raames see travestia loodi  on veebiprogrammeerimine.</body></html>')
		return res.end();
	} 
	else if (currentURL.pathname === "/addName"){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('<h2>Palun lisa siia oma nimi</h2>');
		res.write(pageFoot);
		return res.end();
	}
	else if (currentURL.pathname === "/banner.png"){
		console.log("Tahan pilti!!!");
		let filePath = path.join(__dirname, "public", "banner/banner.png");
		fs.readFile(filePath, (err, data)=>{
			if(err){
				throw err;
			}
			else {
				res.writeHead(200,{"Content-Type": "image/png"});
				res.end(data);
			}
		});
	}
}).listen(5207)