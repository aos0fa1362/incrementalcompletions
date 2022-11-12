function ppreq() {
	return Math.pow(10,16+3*(nowchallenge[1]**2));
}

function bonusbuffer() {
	return Math.pow(pp,0.2);
}

function nowchallengenum() {
	var x=0;
	for (var i=0; i<10; i++) {
		x += nowchallenge[i];
	}
	return x;
}

function nextchallengenum() {
	var x=0;
	for (var i=0; i<10; i++) {
		x += nextchallenge[i];
	}
	return x;
}

function ppgain() {
	var x=1;
	for (var k=0; k<10; k++) {
		x *= (Math.pow(nowchallenge[k],1+0.1*p_upg[2]) + 1);
	}
	return x;
}

function ppgainprediction() {
	var x=1;
	for (var k=0; k<10; k++) {
		x *= (Math.pow(nextchallenge[k],1+0.1*p_upg[2]) + 1);
	}
	return x;
}

function resetofprestige() {
	energy = 1;
	producer = [0,0,0,0,0,0,0,0,0,0];
	boughtproducer = [0,0,0,0,0,0,0,0,0,0];
	buffer = 0;
	upgrade = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	unboughtupg = [0,1,2];
}

function goprestige() {
	if(energy >= ppreq()) {
		pp += ppgain();
		maxchallengecomp = Math.max(maxchallengecomp,nowchallengenum());

		resetofprestige();
		prestigeoverwrite();
		checkunlock();
	}
}

function buyp_upg(i) {
	if (pp >= p_upgcost[i] && p_upg[i] == 0) {
		p_upg[i] = 1;
		pp -= p_upgcost[i];
	}
	prestigeoverwrite();
}

function editchallenge(i,j) {
	nextchallenge[i] += j;
	nextchallenge[i] = Math.max(Math.min(maxchallenge[i],nextchallenge[i]),0);
	reloadchallengethings();
	prestigeoverwrite();
}

function reloadchallengethings() {
}

function enterchallenge() {
	goprestige();
	resetofprestige();
	for (var i=0; i<10; i++) {
		nowchallenge[i] = nextchallenge[i];
	}
	prestigeoverwrite();
	checkunlock();
}

function exitchallenge() {
	goprestige();
	resetofprestige();
	for (var i=0; i<10; i++) {
		nowchallenge[i] = 0;
	}
	prestigeoverwrite();
	checkunlock();
}

var pp = 0;

var p_upg = [0,0,0,0,0,0,0,0,0,0];
const p_upgcost = [1,100,10000,0,0,0,0,0,0,0];

var nowchallenge = [0,0,0,0,0,0,0,0,0,0];
var nextchallenge = [0,0,0,0,0,0,0,0,0,0];
const maxchallenge = [8,8,3,1,1,0,0,0,0,0];
var maxchallengecomp = 0;
