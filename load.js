if (!isNaN(localStorage.energy)) {
	energy = Number(localStorage.energy);
}

var temp = JSON.parse(localStorage.producer);
for (var i=0; i<10; i++) {
	if (!isNaN(temp[i])) {
		producer[i] = Number(temp[i]);
	}
}
temp = JSON.parse(localStorage.boughtproducer);
for (var i=0; i<10; i++) {
	if (!isNaN(temp[i])) {
		boughtproducer[i] = Number(temp[i]);
	}
}
if (!isNaN(localStorage.buffer)) {
	buffer = Number(localStorage.buffer);
}
temp = JSON.parse(localStorage.upgrade);
for (var i=0; i<21; i++) {
	if (!isNaN(temp[i])) {
		upgrade[i] = Number(temp[i]);
	}
}
temp = JSON.parse(localStorage.unboughtupg);
for (var i=0; i<3; i++) {
	if (!isNaN(temp[i])) {
		unboughtupg[i] = Number(temp[i]);
	}
}
if (!isNaN(localStorage.pp)) {
	pp = Number(localStorage.pp);
}
temp = JSON.parse(localStorage.p_upg);
for (var i=0; i<10; i++) {
	if (!isNaN(temp[i])) {
		p_upg[i] = Number(temp[i]);
	}
}
temp = JSON.parse(localStorage.nowchallenge);
for (var i=0; i<10; i++) {
	if (!isNaN(temp[i])) {
		nowchallenge[i] = Number(temp[i]);
	}
}
temp = JSON.parse(localStorage.nextchallenge);
for (var i=0; i<10; i++) {
	if (!isNaN(temp[i])) {
		nextchallenge[i] = Number(temp[i]);
	}
}
if (!isNaN(localStorage.maxchallengecomp)) {
	maxchallengecomp = Number(localStorage.maxchallengecomp);
}
temp = JSON.parse(localStorage.maxenergyincolor);
for (var i=0; i<20; i++) {
	if (!isNaN(temp[i])) {
		maxenergyincolor[i] = Number(temp[i]);
	}
}
temp = JSON.parse(localStorage.milestone);
for (var i=0; i<10; i++) {
	if (!isNaN(temp[i])) {
		milestone[i] = Number(temp[i]);
	}
}

prestigeoverwrite();