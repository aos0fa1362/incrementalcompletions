function movetab(value){
	document.getElementById(tablist[nowtab]).style.display = "none" ;
	document.getElementById(tablist[value]).style.display = "block" ;
	nowtab = value;
}

function overwrite(id,value){
	document.getElementById(id).innerHTML = value ;
}

function energyoverwrite() {
	overwrite('energy1',energy.toPrecision(4)) ;
	overwrite('producercost1',producercost(0).toExponential(3)) ;
	overwrite('producernum1',producer[0].toExponential(3)) ;
	overwrite('producer2cost1',producercost(1).toExponential(3)) ;
	overwrite('producer2num1',producer[1].toExponential(3)) ;
	overwrite('producer3cost1',producercost(2).toExponential(3)) ;
	overwrite('producer3num1',producer[2].toExponential(3)) ;
	overwrite('producer4cost1',producercost(3).toExponential(3)) ;
	overwrite('producer4num1',producer[3].toExponential(3)) ;
	overwrite('buffercost1',buffercost().toExponential(3)) ;
	overwrite('buffernum1',buffer) ;
	overwrite('upg1',upgexplanation[unboughtupg[0]]) ;
	overwrite('upgcost1',upgcost[unboughtupg[0]].toExponential(3)) ;
	overwrite('upg2',upgexplanation[unboughtupg[1]]) ;
	overwrite('upgcost2',upgcost[unboughtupg[1]].toExponential(3)) ;
	overwrite('upg3',upgexplanation[unboughtupg[2]]) ;
	overwrite('upgcost3',upgcost[unboughtupg[2]].toExponential(3)) ;
	overwrite('upg4',upgexplanation[20]) ;
	overwrite('upgcost4',Math.pow(10,10*(upgrade[20]+1)).toExponential(3)) ;
	overwrite('blackenergy1',blackenergy().toPrecision(4)) ;
	overwrite('redenergy1',colorenergy(0).toPrecision(4)) ;
	overwrite('blueenergy1',colorenergy(1).toPrecision(4)) ;
	overwrite('greenenergy1',colorenergy(2).toPrecision(4)) ;
	overwrite('yellowenergy1',colorenergy(3).toPrecision(4)) ;
	overwrite('maxenergyinred1',maxenergyincolor[0].toPrecision(4)) ;
	overwrite('maxenergyinblue1',maxenergyincolor[1].toPrecision(4)) ;
	overwrite('maxenergyingreen1',maxenergyincolor[2].toPrecision(4)) ;
	overwrite('maxenergyinyellow1',maxenergyincolor[3].toPrecision(4)) ;
	overwrite('blackenergyeff1',blackenergyeff().toPrecision(4)) ;
	overwrite('redenergyeff1',colorenergyeff(0).toPrecision(4)) ;
	overwrite('blueenergyeff1',colorenergyeff(1).toPrecision(4)) ;
	overwrite('greenenergyeff1',colorenergyeff(2).toPrecision(4)) ;
	overwrite('yellowenergyeff1',colorenergyeff(3).toPrecision(4)) ;
}

function prestigeoverwrite() {
	energyoverwrite();
	overwrite('pp1',pp.toPrecision(4)) ;
	overwrite('ppgain1',ppgain().toPrecision(4)) ;
	if (bonusbuffer() == 0) {
		overwrite('bonusbuffernum1',"") ;
	}
	else {
		overwrite('bonusbuffernum1',"+"+bonusbuffer().toPrecision(3)) ;
	}
	overwrite('bonusbuffernum2',(bonusbuffer()-colorenergyeff(3)).toPrecision(3)) ;
	overwrite('ppreq1',ppreq().toExponential(3)) ;
	overwrite('ppgainprediction1',ppgainprediction().toPrecision(4)) ;
	overwrite('nextchallenge1',nextchallengenum()) ;
	overwrite('bestchallenge1',maxchallengecomp) ;
	overwrite('c1num1',nextchallenge[0]) ;
	overwrite('c2num1',nextchallenge[1]) ;
	overwrite('c3num1',nextchallenge[2]) ;
	overwrite('c4num1',nextchallenge[3]) ;
	overwrite('c5num1',nextchallenge[4]) ;
	overwrite('c1eff1',Math.pow(10,2*(nextchallenge[0]**2)).toExponential(0)) ;
	overwrite('c2eff1',Math.pow(10,3*(nextchallenge[1]**2)).toExponential(0)) ;
	overwrite('c3eff1',4-nextchallenge[2]) ;
	if (p_upg[0] == 0) {
		overwrite('isboughtp_upg1',"") ;
	}
	else {
		overwrite('isboughtp_upg1',"bought!")
	}
	if (p_upg[1] == 0) {
		overwrite('isboughtp_upg2',"") ;
	}
	else {
		overwrite('isboughtp_upg2',"bought!")
	}
	if (p_upg[2] == 0) {
		overwrite('isboughtp_upg3',"") ;
	}
	else {
		overwrite('isboughtp_upg3',"bought!")
	}
	overwrite('milestone1',milestonenum()) ;
	overwrite('milestoneeff1',milestonenum()/100) ;
	overwrite('milestone1exp',milestoneexplanation[0][milestone[0]]) ;
	overwrite('milestone2exp',milestoneexplanation[1][milestone[1]]) ;
	overwrite('milestone3exp',milestoneexplanation[2][milestone[2]]) ;
	overwrite('milestone4exp',milestoneexplanation[3][milestone[3]]) ;
	overwrite('milestone5exp',milestoneexplanation[4][milestone[4]]) ;
}

function checkunlock() {
	if (energy >= Math.pow(10,14) || pp >= 1) {
		document.getElementById("prestigebutton").style.display = "inline" ;
		prestigeoverwrite();
	}
	if (upgrade[3] >= 1 || blackenergy() > 0.001) {
		document.getElementById("colorenergy").style.display = "block" ;
		prestigeoverwrite();
	}
}

function save() {
	localStorage.energy = energy;
	localStorage.producer = JSON.stringify(producer);
	localStorage.boughtproducer = JSON.stringify(boughtproducer);
	localStorage.buffer = buffer;
	localStorage.upgrade = JSON.stringify(upgrade);
	localStorage.unboughtupg = JSON.stringify(unboughtupg);
	localStorage.pp = pp;
	localStorage.p_upg = JSON.stringify(p_upg);
	localStorage.nowchallenge = JSON.stringify(nowchallenge);
	localStorage.nextchallenge = JSON.stringify(nextchallenge);
	localStorage.maxchallengecomp = maxchallengecomp;
	localStorage.maxenergyincolor = JSON.stringify(maxenergyincolor);
	localStorage.milestone = JSON.stringify(milestone);
	//localStorage.clear();
}

var nowtab = 0
var tablist = ["energylayer",
"prestigelayer"]