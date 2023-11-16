function resetofcorrupt() {
	if (cp.gte(3)) {
		soul = [Decimal.min(20,cp.div(3).add(1).log(2)),Decimal.min(20,cp.div(3).add(1).log(2)),Decimal.min(20,cp.div(3).add(1).log(2)),new Decimal(0),new Decimal(0)];
	}
	else {
		soul = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)];
	}
	gift = [0,0,0,0,0];
	resetofrebirth();
}

function gocorrupt() {
	if (maxchallengecomp >= 8) {
		cp = cp.add((maxchallengecomp - 7) ** 2);
		corruptsoul = corruptsoul.add(totalsoul());
		resetofcorrupt();
		corruptoverwrite();
	}
}

function corruptmile2level() {
	if (cp.gte(2)) {
		return Number(Decimal.min(Decimal.add(cp.div(2).log(10),1).floor(),3));
	}
	return 0;
}
var cp = new Decimal(0);
var corruptsoul = new Decimal(0);

const corruptmilestone = ["","milestone 01^1 (next:4 <font color='#770000'>cp</font>) autobuy max producer^1 without cost",
"milestone 01^2 (next:9 <font color='#770000'>cp</font>) autobuy max producer^2 without cost",
"milestone 01^3 (next:16 <font color='#770000'>cp</font>) autobuy max producer^3 without cost",
"milestone 01^4 autobuy max producer^4 without cost","","","milestone 02^1 (next:20 <font color='#770000'>cp</font>) 2 free Buffer","milestone 02^2 (next:200 <font color='#770000'>cp</font>) 4 free Buffer","milestone 02^3 6 free Buffer"];