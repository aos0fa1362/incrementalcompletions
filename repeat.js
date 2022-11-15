(function update() {
	console.log(new Date())
	setTimeout(update, 1000);

	for (var i=0; i<4; i++) {
		multipler[i] = Decimal.pow(1.3+0.2*upgrade[2],boughtproducer[i]);
		if (nowchallenge[4] == 0) {
			multipler[i] = multipler[i].mul(Decimal.pow(i+2,bonusbuffer().add(buffer)));
		}
		else {
			multipler[i] = multipler[i].mul(Decimal.pow(i+2,-1));
		}
		multipler[i] = multipler[i].mul(upgrade[0]+1);
		multipler[i] = multipler[i].mul(blackenergyeff());
	}

	multipler[0] = multipler[0].mul(Decimal.pow(producer[3].add(1),upgrade[1]));
	multipler[0] = multipler[0].mul(Decimal.pow(maxchallengecomp ** 3 + 2,p_upg[0]));
	multipler[0] = multipler[0].mul(Decimal.pow(pp.add(1),p_upg[1]));
	multipler[0] = multipler[0].mul(colorenergyeff(0));
	multipler[0] = multipler[0].div(Decimal.pow(100,nowchallenge[0]**2));
	
	if (!(Decimal.mul(producer[0],multipler[0]).gt(Decimal.pow(10,100)))) {
		energy = energy.add(Decimal.mul(producer[0],multipler[0]));
	}
	else {
		energy = energy.add(Decimal.mul(producer[0],multipler[0]).pow(0.5).mul(Decimal.pow(10,50)));
		overwrite('energysoftcap?','<font color="#888888">(softcapped)</font>') ;
	}
	
	for (var i=1; i<4; i++) {
		producer[i-1] = producer[i-1].add(Decimal.mul(producer[i],multipler[i]));
	}
	for (var i=0; i<Math.min(4,upgrade[20]); i++) {
		buyproducer(i);
	}
	if (upgrade[20] == 5) {
		buybuffer();
	}
	
	reloadcolorenergy();

	save();
	checkunlock();
	energyoverwrite();
})()