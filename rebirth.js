function msoulgain() {
	if (energy.gte(Decimal.pow(10,80))) {
		return Decimal.sub(energy.log10(),70).div(10).mul(cp.add(1).pow(0.3));
	}
	return new Decimal(0);
}

function csoulgain() {
	if (blackenergy().gte(Decimal.pow(10,5))) {
		return Decimal.add(blackenergy().div(Decimal.pow(10,5)).log2(),1).mul(cp.add(1).pow(0.3));
	}
	return new Decimal(0);
}

function tsoulgain() {
	if (pp.gte(Decimal.pow(10,4))) {
		return Decimal.add(pp.div(Decimal.pow(10,4)).log2(),2).div(2).mul(cp.add(1).pow(0.3));
	}
	return new Decimal(0);
}

function ssoulgain() {
	return softcappedenergy.pow(0.5).div(1000).mul(cp.add(1).pow(0.3));
}

function totalsoul() {
	var res = new Decimal(0);
	for (var i=0; i<4; i++) {
		res = res.add(soul[i]);
	}
	return res;
}

function msouleff() {
	return soul[0].add(1).pow(gift[0]+1);
}

function csouleff() {
	return Decimal.div(soul[1].add(1).log(2-gift[1]*0.1),20).add(1);
}

function tsouleff() {
	return soul[2].mul(1+gift[2]*0.1).pow(0.5).mul(0.1).add(1);
}

function ssouleff() {
	return soul[3].add(1).pow(0.2).sub(1).mul(gift[3]+1);
}

function totalsouleff() {
	return totalsoul().mul(0.1).add(1);
}

function rebirthmilestone() {
	return Decimal.min(6,totalsoul().mul(0.1).floor());
}

function giftcost(kind) {
	if(kind == 0) {
		return Decimal.pow(5,gift[0]);
	}
	if(kind == 1) {
		return Decimal.pow(10,gift[1]+1);
	}
	if(kind == 2) {
		return Decimal.pow(gift[2]+1,gift[2]+1);
	}
	if(kind == 3) {
		return Decimal.pow(2,Decimal.pow(2,gift[3]));
	}
}

function buygift(kind) {
	if (soul[kind].gte(giftcost(kind)) && (kind != 2 || gift[2] < 5)) {
		soul[kind] = soul[kind].sub(giftcost(kind));
		gift[kind]++;
		rebirthoverwrite();
	}
}

function resetofrebirth() {
	pp = new Decimal(0);
	for (var j=0; j<10; j++) {
		if (!(rebirthmilestone().gte(4+j))) {
			p_upg[j] = 0;
		}
	}
	nowchallenge = [0,0,0,0,0,0,0,0,0,0];
	if (!(rebirthmilestone().gte(3))) {
		maxchallengecomp = 0;
	}
	nextchallenge = [0,0,0,0,0,0,0,0,0,0];
	milestone = [0,0,0,0,0,0,0,0,0,0];
	for (var i=0; i<20; i++) {
		maxenergyincolor[i] = Decimal.pow(10,colorenergyreqpow[i]);
	}
	softcappedenergy = new Decimal(0);
	resetofprestige()
}

function gorebirth() {
	if (msoulgain().add(csoulgain()).add(tsoulgain()).gte(0.5)) {
		soul[0] = soul[0].add(msoulgain());
		soul[1] = soul[1].add(csoulgain());
		soul[2] = soul[2].add(tsoulgain());
		soul[3] = soul[3].add(ssoulgain());
		resetofrebirth();
		rebirthoverwrite();
	}
}

var soul = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];

const rebirthmilestoneexp = ["milestone01 (req:10 total soul) reward:you keep energy upgrade except automation</br>",
"milestone02 (req:20 total soul) reward:1 free buffer</br>",
"milestone03 (req:30 total soul) reward:you keep best challenge difficulty</br>",
"milestone04 (req:40 total soul) reward:you keep prestige upgrade 01</br>",
"milestone05 (req:50 total soul) reward:you keep prestige upgrade 02</br>",
"milestone06 (req:60 total soul) reward:you keep prestige upgrade 03</br>",
""];


var gift = [0,0,0,0,0];