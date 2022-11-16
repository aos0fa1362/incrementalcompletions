function doload() {

	energy = new Decimal(1);
	if (!isNaN(localStorage.energy)) {
		energy = new Decimal(localStorage.energy);
	}
	
	producer = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];
	var temp = JSON.parse(localStorage.producer);
	for (var i=0; i<10; i++) {
		if (!isNaN(temp[i])) {
			producer[i] = new Decimal(temp[i]);
		}
	}
	boughtproducer = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];
	temp = JSON.parse(localStorage.boughtproducer);
	for (var i=0; i<10; i++) {
		if (!isNaN(temp[i])) {
			boughtproducer[i] = new Decimal(temp[i]);
		}
	}
	buffer = 0;
	if (!isNaN(localStorage.buffer)) {
		buffer = Number(localStorage.buffer);
	}
	upgrade = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	temp = JSON.parse(localStorage.upgrade);
	for (var i=0; i<21; i++) {
		if (!isNaN(temp[i])) {
			upgrade[i] = Number(temp[i]);
		}
	}
	unboughtupg = [0,1,2];
	temp = JSON.parse(localStorage.unboughtupg);
	for (var i=0; i<3; i++) {
		if (!isNaN(temp[i])) {
			unboughtupg[i] = Number(temp[i]);
		}
	}
	pp = new Decimal(0);
	if (!isNaN(localStorage.pp)) {
		pp = new Decimal(localStorage.pp);
	}
	p_upg = [0,0,0,0,0,0,0,0,0,0];
	temp = JSON.parse(localStorage.p_upg);
	for (var i=0; i<10; i++) {
		if (!isNaN(temp[i])) {
			p_upg[i] = Number(temp[i]);
		}
	}
	nowchallenge = [0,0,0,0,0,0,0,0,0,0];
	temp = JSON.parse(localStorage.nowchallenge);
	for (var i=0; i<10; i++) {
		if (!isNaN(temp[i])) {
			nowchallenge[i] = Number(temp[i]);
		}
	}
	maxchallengecomp = 0;
	if (!isNaN(localStorage.maxchallengecomp)) {
		maxchallengecomp = Number(localStorage.maxchallengecomp);
	}
	for (var i=0; i<20; i++) {
		maxenergyincolor[i] = Decimal.pow(10,colorenergyreqpow[i]);
	}
	temp = JSON.parse(localStorage.maxenergyincolor);
	for (var i=0; i<20; i++) {
		if (!isNaN(temp[i])) {
			maxenergyincolor[i] = new Decimal(temp[i]);
		}
	}
	milestone = [0,0,0,0,0,0,0,0,0,0];
	temp = JSON.parse(localStorage.milestone);
	for (var i=0; i<10; i++) {
		if (!isNaN(temp[i])) {
			milestone[i] = Number(temp[i]);
		}
	}
	soul = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];
	temp = JSON.parse(localStorage.soul);
	for (var i=0; i<5; i++) {
		if (!isNaN(temp[i])) {
			soul[i] = new Decimal(temp[i]);
		}
	}
	rebirthoverwrite();
}


doload();
