function msoulgain() {
	if (energy.gte(Decimal.pow(10,80))) {
		return Decimal.sub(energy.log10(),70).div(10);
	}
	return new Decimal(0);
}

function csoulgain() {
	if (blackenergy().gte(Decimal.pow(10,5))) {
		return Decimal.add(blackenergy().div(Decimal.pow(10,5)).log2(),1);
	}
	return new Decimal(0);
}

function tsoulgain() {
	if (pp.gte(Decimal.pow(10,4))) {
		return Decimal.add(pp.div(Decimal.pow(10,4)).log2(),2).div(2);
	}
	return new Decimal(0);
}

function totalsoul() {
	var res = new Decimal(0);
	for (var i=0; i<3; i++) {
		res = res.add(soul[i]);
	}
	return res;
}

function msouleff() {
	return soul[0].add(1);
}

function csouleff() {
	return Decimal.div(soul[1].add(1).log2(),20).add(1);
}

function tsouleff() {
	return soul[2].pow(0.5).mul(0.1).add(1);
}

function totalsouleff() {
	return totalsoul().mul(0.1).add(1);
}

function resetofrebirth() {
	pp = new Decimal(0);
	p_upg = [0,0,0,0,0,0,0,0,0,0];
	nowchallenge = [0,0,0,0,0,0,0,0,0,0];
	maxchallengecomp = 0;
	nextchallenge = [0,0,0,0,0,0,0,0,0,0];
	milestone = [0,0,0,0,0,0,0,0,0,0];
	for (var i=0; i<20; i++) {
		maxenergyincolor[i] = Decimal.pow(10,colorenergyreqpow[i]);
	}
	resetofprestige()
}

function gorebirth() {
	if (msoulgain().add(csoulgain()).add(tsoulgain()).gte(0.5)) {
		soul[0] = soul[0].add(msoulgain());
		soul[1] = soul[1].add(csoulgain());
		soul[2] = soul[2].add(tsoulgain());
		resetofrebirth();
		rebirthoverwrite();
	}
}

var soul = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];