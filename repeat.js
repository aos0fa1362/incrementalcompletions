(function update() {
	console.log(new Date())
	setTimeout(update, 1000);

	for (var i=0; i<4; i++) {
		multipler[i] = Decimal.pow(1.3+0.2*upgrade[2],boughtproducer[i]);
		if (nowchallenge[4] == 0) {
			multipler[i] = multipler[i].mul(Decimal.pow(ssouleff().add(i+2),bonusbuffer().add(buffer)));
		}
		else {
			multipler[i] = multipler[i].mul(Decimal.pow(i+2,-1));
		}
		multipler[i] = multipler[i].mul(upgrade[0]+1);
		multipler[i] = multipler[i].mul(blackenergyeff());
		multipler[i] = multipler[i].mul(totalsouleff());
		multipler[i] = multipler[i].mul(cp.add(1));
	}

	multipler[0] = multipler[0].mul(Decimal.pow(producer[3].add(1),upgrade[1]));
	multipler[0] = multipler[0].mul(Decimal.pow(maxchallengecomp ** 3 + 2,p_upg[0]));
	multipler[0] = multipler[0].mul(Decimal.pow(pp.add(1),p_upg[1]));
	multipler[0] = multipler[0].mul(colorenergyeff(0));
	multipler[0] = multipler[0].mul(msouleff());
	multipler[0] = multipler[0].div(Decimal.pow(100,nowchallenge[0]**2));

	production = Decimal.mul(producer[0],multipler[0]);
	
	if (!(production.gt(Decimal.pow(10,100)))) {
		energy = energy.add(production);
		overwrite('energysoftcap?','') ;
	}
	else {
		energy = energy.add(production.div(Decimal.pow(10,100)).pow(Decimal.min(Decimal.div(corruptsoul.add(1).log2(),1000),0.5).add(0.5)).mul(Decimal.pow(10,100)));
		overwrite('energysoftcap?','<font color="#888888">(softcapped)</font>') ;
		producesoftcappedenergy();
	}
	
	for (var i=1; i<4; i++) {
		producer[i-1] = producer[i-1].add(Decimal.mul(producer[i],multipler[i]));
	}
	for (var i=0; i<Number(Decimal.min(cp.pow(0.5).floor(),4)); i++) {
		buymaxproducer(i);
	}
	for (var i=0; i<Math.min(4,upgrade[20]); i++) {
		buyproducer(i);
	}
	if (upgrade[20] == 5) {
		buybuffer();
	}
	
	reloadcolorenergy();

	energyoverwrite();
})()