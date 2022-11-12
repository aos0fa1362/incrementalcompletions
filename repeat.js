(function update() {
	console.log(new Date())
	setTimeout(update, 1000);

	for (var i=0; i<4; i++) {
		multipler[i] = Math.pow(1.3+0.2*upgrade[2],boughtproducer[i]);
		if (nowchallenge[4] == 0) {
			multipler[i] *= Math.pow(i+2,buffer+bonusbuffer());
		}
		else {
			multipler[i] *= Math.pow(i+2,-1)
		}
		multipler[i] *= upgrade[0]+1;
	}

	multipler[0] *= Math.pow(producer[3]+1,upgrade[1]);
	multipler[0] *= Math.pow(maxchallengecomp ** 3 + 2,p_upg[0]);
	multipler[0] *= Math.pow(pp+1,p_upg[1]);
	multipler[0] /= Math.pow(10,2*(nowchallenge[0]**2));

	energy += producer[0] * multipler[0];
	for (var i=1; i<4; i++) {
		producer[i-1] += producer[i] * multipler[i];
	}
	for (var i=0; i<Math.min(4,upgrade[20]); i++) {
		buyproducer(i);
	}
	if (upgrade[20] == 5) {
		buybuffer();
	}

	save();
	energyoverwrite();
	checkunlock();
})()