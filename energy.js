function producercost(i){
	var x=0;
	if(i==0) x=1;
	return new Decimal(10).pow(boughtproducer[i].add(1-x).mul(Math.pow(2,i)));
}

function buffercost() {
	return new Decimal(10).pow(5).pow((buffer+1)**2);
}

function buyproducer(level){
	if (!(producercost(level).gt(energy)) && level <= 3-nowchallenge[2] && (boughtproducer[level].eq(0) || nowchallenge[3] == 0)) {
		energy = energy.sub(producercost(level));
		producer[level] = producer[level].add(1);
		boughtproducer[level] = boughtproducer[level].add(1);
	}
	energyoverwrite();
}

function buymaxproducer(level){
	if (level <= 3-nowchallenge[2] && (boughtproducer[level].eq(0) || nowchallenge[3] == 0)) {
		var temp=new Decimal(energy.log10());
		temp = temp.div(Decimal.pow(2,level)).floor();
		if (level == 0) {
			temp = temp.add(1);
		}
		if (nowchallenge[3] == 1) {
			temp = Decimal.min(temp,1);
		}
		if (temp.gt(boughtproducer[level])) {
			producer[level] = producer[level].add(temp.sub(boughtproducer[level]));
			boughtproducer[level] = temp;
		}
	}
}

function buybuffer(){
	if (!(buffercost().gt(energy))) {
		energy = energy.sub(buffercost());
		buffer++;
	}
	energyoverwrite();
}

function buyupg(i){
	if (!(upgcost[unboughtupg[i]].gt(energy))) {
		upgrade[unboughtupg[i]] = 1;
		energy = energy.sub(upgcost[unboughtupg[i]]);
		var z = unboughtupg[2];
		for (var j=i; j<2; j++) {
			unboughtupg[j] = unboughtupg[j+1];
		}
		unboughtupg[2] = z+1;
	}
	energyoverwrite();
}

function buyauto(){
	if (energy.gt(Decimal.pow(10,10*(upgrade[20]+1))) && upgrade[20] <= 4) {
		upgrade[20]++;
		energy = energy.sub(Decimal.pow(10,10*upgrade[20]));
	}
	energyoverwrite();
}

function blackenergy(){
	var x = new Decimal(1);
	for (var i=0; i<20; i++) {
		x = x.mul(colorenergy(i).add(1));
	}
	return x.sub(1);
}

function blackenergyeff(){
	return blackenergy().add(1).pow(0.3);
}

function colorenergy(kind){
	if (kind == 2) return Decimal.sub(maxenergyincolor[kind].log10(),colorenergyreqpow[kind]).mul(colorenergygain[kind]).mul(csouleff());
	return Decimal.sub(maxenergyincolor[kind].log10(),colorenergyreqpow[kind]).mul(colorenergygain[kind]).mul(colorenergyeff(2)).mul(csouleff());
}

function colorenergyeff(kind){
	if (kind == 3) return colorenergy(kind).add(1).pow(colorenergyeffexponent[kind]).sub(1);
	return colorenergy(kind).add(1).pow(colorenergyeffexponent[kind]);
}

function reloadcolorenergy() {
	if (upgrade[3] >= 1 || blackenergy().gt(0.001)) {
		maxenergyincolor[0] = Decimal.max(energy,maxenergyincolor[0]);
		if (nowchallenge[0] >= 2) {
			maxenergyincolor[1] = Decimal.max(energy,maxenergyincolor[1]);
		}
		if (nowchallenge[2] >= 1) {
			maxenergyincolor[2] = Decimal.max(energy,maxenergyincolor[2]);
		}
		if (nowchallenge[3] * nowchallenge[4] >= 1) {
			maxenergyincolor[3] = Decimal.max(energy,maxenergyincolor[3]);
		}
	}
}

function softcappedenergypersec() {
	if (upgrade[4] == 1) {
		return softcappedeff(1).mul(softcappedeff(2));
	}
	else {
		return new Decimal(0);
	}
}

function softcappedeff(i) {
	if(i == 1) {
		if (production.gte(Decimal.pow(10,100))) {
			return Decimal.sub(production.log10(),100);
		}
		return new Decimal(0);
	}
	if(i == 2) {
		var x = Decimal.pow(pp,0.2+milestonenum()/100);
		if (x.gte(10)) {
			return x.div(5).log2();
		}
		return new Decimal(1);
	}
}

function producesoftcappedenergy() {
	softcappedenergy = softcappedenergy.add(softcappedenergypersec());
}

var energy = new Decimal(1);
var producer = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];
var boughtproducer = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];
var buffer = 0;
var upgrade = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var unboughtupg = [0,1,2];

var multipler = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];


const upgcost = [new Decimal("1e10"),new Decimal("1e12"),new Decimal("1e14"),new Decimal("1e30"),new Decimal("1e105"),
new Decimal("1e2500"),new Decimal("1e25000"),new Decimal("1e250000"),new Decimal("1e250000"),new Decimal("1e250000"),
new Decimal("1e250000"),new Decimal("1e250000"),new Decimal("1e250000"),new Decimal("1e250000"),new Decimal("1e250000"),
new Decimal("1e250000"),new Decimal("1e250000"),new Decimal("1e250000"),new Decimal("1e250000"),new Decimal("1e250000")]
const upgexplanation = ["upg01  all producer are x2",
"upg02  producer^4 boost energy gain",
"upg03  multi per bought producer are x1.5 instead x1.3",
"upg04  unlock color energy",
"upg05  unlock <font color='#888888'>(softcapped)</font> energy",
"upg06  just useless",
"upg07  just useless",
"upg08  just useless",
"upg09  just useless",
"upg10  just useless",
"upg11  just useless",
"upg12  just useless",
,
,
,
,
,
,
,
,
"upg00  unlock automation"]


const colorenergyreqpow = [30,10,24,16,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0];
const colorenergygain = [0.4,0.4,0.5,0.5,0.5,
0.5,0.5,0.5,0.5,0.5,
0.5,0.5,0.5,0.5,0.5,
0.5,0.5,0.5,0.5,0.5];

const colorenergyeffexponent = [2.5,0.3,0.1,0.3,0,
0,0,0,0,0,
0,0,0,0,0,
0,0,0,0,0];


var maxenergyincolor = [,,,,,
,,,,,
,,,,,
,,,,];
for (var i=0; i<20; i++) {
	maxenergyincolor[i] = Decimal.pow(10,colorenergyreqpow[i]);
}

var production = new Decimal(0);
var softcappedenergy = new Decimal(0);