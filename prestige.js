function ppreq() {
	return Math.pow(10,16+3*(nowchallenge[1]**2));
}

function bonusbuffer() {
	var x = Math.pow(pp,0.2+milestonenum()/100);
	if(x >= 10) x = Math.pow(10,Math.pow(Math.log10(x),0.5));
	return x+colorenergyeff(3);
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
	return x*colorenergyeff(1);
}

function ppgainprediction() {
	var x=1;
	for (var k=0; k<10; k++) {
		x *= (Math.pow(nextchallenge[k],1+0.1*p_upg[2]) + 1);
	}
	return x*colorenergyeff(1);
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
		checkmilestone()

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

function milestonenum() {
	var temp = 0;
	for (var i=0; i<10; i++) {
		temp += milestone[i];
	}
	return temp;
}

function checkmilestone() {
	milestone[0] = Math.max(milestone[0],Math.floor(nowchallenge[0]/2+0.1));
	milestone[1] = Math.max(milestone[1],Math.floor(nowchallenge[1]/2+0.1));
	milestone[2] = Math.max(milestone[2],Math.floor(nowchallenge[2]+0.1));
	milestone[3] = Math.max(milestone[3],Math.floor(nowchallenge[3]*nowchallenge[4]+0.1));
	milestone[4] = Math.max(milestone[4],Math.min(nowchallenge[0],nowchallenge[1],nowchallenge[2],nowchallenge[3],nowchallenge[4]));
}

var pp = 0;

var p_upg = [0,0,0,0,0,0,0,0,0,0];
const p_upgcost = [1,100,10000,0,0,0,0,0,0,0];

var nowchallenge = [0,0,0,0,0,0,0,0,0,0];
var nextchallenge = [0,0,0,0,0,0,0,0,0,0];
const maxchallenge = [8,8,3,1,1,0,0,0,0,0];
var maxchallengecomp = 0;
var milestone = [0,0,0,0,0,0,0,0,0,0];

const milestoneexplanation = [["Lv1 C1*2","Lv2 C1*4","Lv3 C1*6","Lv4 C1*8","completed!"],
["Lv1 C2*2","Lv2 C2*4","Lv3 C2*6","Lv4 C2*8","completed!"],
["Lv1 C3*1","Lv2 C3*2","Lv3 C3*3","completed!"],
["Lv1 C4*1+C5*1","completed!"],
["Lv1 (C1-C5)*1","Lv2 (C1-C5)*2","Lv3 (C1-C5)*3","Lv4 (C1-C5)*4","Lv5 (C1-C5)*5","Lv6 (C1-C5)*6","Lv7 (C1-C5)*7","Lv8 (C1-C5)*8","completed!"]];



