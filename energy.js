function producercost(i){
	var x=0;
	if(i==0) x=1;
	return Math.pow(10,(boughtproducer[i]+1-x)*Math.pow(2,i));
}

function buffercost() {
	return Math.pow(100000,(buffer+1)**2);
}

function buyproducer(level){
	if (producercost(level) <= energy && level <= 3-nowchallenge[2] && (producer[level] == 0 || nowchallenge[3] == 0)) {
		energy -= producercost(level);
		producer[level]++;
		boughtproducer[level]++
	}
	energyoverwrite();
}

function buybuffer(){
	if (buffercost() <= energy) {
		energy -= buffercost;
		buffer++;
	}
	energyoverwrite();
}

function buyupg(i){
	if (upgcost[unboughtupg[i]] <= energy) {
		upgrade[unboughtupg[i]] = 1;
		energy -= upgcost[unboughtupg[i]];
		var z = unboughtupg[2];
		for (var j=i; j<2; j++) {
			unboughtupg[j] = unboughtupg[j+1];
		}
		unboughtupg[2] = z+1;
	}
	energyoverwrite();
}

function buyauto(){
	if (Math.pow(10,10*(upgrade[20]+1)) <= energy && upgrade[20] <= 4) {
		upgrade[20]++;
		energy -= Math.pow(10,10*upgrade[20]);
	}
	energyoverwrite();
}

var energy = 1;
var producer = [0,0,0,0,0,0,0,0,0,0];
var boughtproducer = [0,0,0,0,0,0,0,0,0,0];

var buffer = 0;

var upgrade = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var unboughtupg = [0,1,2];
const upgcost = [Math.pow(10,10),Math.pow(10,12),Math.pow(10,14),Math.pow(10,250),Math.pow(10,250),Math.pow(10,250)]
const upgexplanation = ["upg01  all producer are x2",
"upg02  producer^4 boost energy gain",
"upg03  multi per bought producer are x1.5 instead x1.3",
"upg04  just useless",
"upg05  just useless",
"upg06  just useless",
,
,
,
,
,
,
,
,
,
,
,
,
,
,
"upg00  unlock automation"]

var multipler = [0,0,0,0]


