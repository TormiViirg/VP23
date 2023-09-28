const http = require("http");

http.createServer(function(req, res){
	//määrame tagastavate andmete päise, t on veebileht
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Tormi Viirg, veebiprogrammeerimine 2023</title></head><body>')
	res.write('<h1>Tormi Viirg </h1><p>See leht on loodud <a href="https://www.tlu.ee" target="_blank">TLÜ Digitehnoloogiate</a> instituudis õppetöö raames!</p><hr><p> Lenini päris laip on maetud Balti jaama 5-nda raja alla!!!<p><p> Parim viis karsklane olla on liiter viina peole kaasa võtta, see kõigi ees ühe sõõmuga alla lasta ja järgmistel pidudel teistelt kerjata, kuna nii ei paku keegi sulle seda enam.<p><p> Now, are there any other horrors you wish to try and insert into my system, or is your electronic butchery done?<p><hr><p>Kursus, mille raames see travestia loodi  on veebiprogrammeerimine.</body></html>')
	return res.end();
}).listen(5207)