//var mongoURL = "mongodb://localhost:27017/sensor_db";
//var mongo = require("./mongo");

//render signup page
function signup(req,res) {
	res.render("signup");
}

//render login page
function login(req,res) {
	res.render("login");
}

//render devInfo (user dashboard) page
function getDevInfoPage(req,res) {
	res.render("devInfo");
}

//render layoutInfo page
function getLayoutInfoPage(req,res) {
	res.render("layoutInfo");
}

//render materialInfo page
function getMaterialInfoPage(req,res) {
	res.render("materialInfo");
}

//render DTCInfo page
function getDTCInfoPage(req,res) {
	res.render("dtcInfo");
}

function displayReport(req,res) {
	res.render("reportPage");
}

function getAdminDashInfoPage(req,res){
	res.render("adminDash");
}

function getHighchartsAInfoPage(req,res){
	res.render("highchartsA");
}

function getHighchartsBInfoPage(req,res){
	res.render("highchartsB");
}

function storeDevInfo(req,res) {
	var customerName, surveyNumber, address, district, cityTown, village, section, csd;
	customerName = req.param("customerName");
	surveyNumber = req.param("surveyNumber");
	address = req.param("address");
	district = req.param("district");
	cityTown = req.param("cityTown");
	village = req.param("village");
	section = req.param("section");
	csd = req.param("csd");
	
	var json_responses = {};

	req.session.customerName = customerName;
	req.session.surveyNumber = surveyNumber;
	req.session.address = address;
	req.session.district = district;
	req.session.cityTown = cityTown;
	req.session.village = village;
	req.session.section = section;
	req.session.csd = csd;
	
	console.log("******************");
	console.log(req.session.customerName);
	console.log(req.session.surveyNumber);
	console.log(req.session.address);
	console.log(req.session.district);
	console.log(req.session.cityTown);
	console.log(req.session.village);
	console.log(req.session.section);
	console.log(req.session.csd);
	console.log("*****************");
	
	
	json_responses.statusCode = 200;
	res.send(json_responses);
	
}

function storeLayoutInfo(req,res) {
	var layout, number, newLayout, newNumber, customLayout, customNumber, htLength, ltLength, htDeadends, ltDeadends;
		
	layout = req.param("layout");
	number = req.param("number");
	newLayout = req.param("newLayout");
	newNumber = req.param("newNumber");
	customLayout = req.param("customLayout");
	customNumber = req.param("customNumber");
	htLength = req.param("htLength");
	ltLength = req.param("ltLength");
	htDeadends = req.param("htDeadends");
	ltDeadends = req.param("ltDeadends");
	
	var json_responses = {};

	req.session.layout = layout;
	req.session.number = number;
	req.session.newLayout = newLayout;
	req.session.newNumber = newNumber;
	req.session.customLayout = customLayout;
	req.session.customNumber = customNumber;
	req.session.htLength = htLength;
	req.session.ltLength = ltLength;
	req.session.htDeadends = htDeadends;
	req.session.ltDeadends = ltDeadends;
	
	console.log("****************** After Material Info Values *******************");
	console.log(req.session.customerName);
	console.log(req.session.surveyNumber);
	console.log(req.session.address);
	console.log(req.session.district);
	console.log(req.session.cityTown);
	console.log(req.session.village);
	console.log(req.session.section);
	console.log(req.session.csd);
	console.log(req.session.layout);
	console.log(req.session.number);
	console.log(req.session.newLayout);
	console.log(req.session.newNumber);
	console.log(req.session.customLayout);
	console.log(req.session.customNumber);
	console.log(req.session.htLength);
	console.log(req.session.ltLength);
	console.log(req.session.htDeadends);
	console.log(req.session.ltDeadends);
	console.log("****************** After Material Info Values *******************");
	
	json_responses.statusCode = 200;
	res.send(json_responses);
	
}

function storeDtcInfo(req,res){
	var dtc;
	
	dtc = req.param("dtc");
	
	var json_responses = {};

	req.session.dtc = dtc;
	
	console.log(req.session.customerName);
	console.log(req.session.surveyNumber);
	console.log(req.session.address);
	console.log(req.session.district);
	console.log(req.session.cityTown);
	console.log(req.session.village);
	console.log(req.session.section);
	console.log(req.session.csd);
	console.log(req.session.layout);
	console.log(req.session.number);
	console.log(req.session.newLayout);
	console.log(req.session.newNumber);
	console.log(req.session.customLayout);
	console.log(req.session.customNumber);
	console.log(req.session.htLength);
	console.log(req.session.ltLength);
	console.log(req.session.htDeadends);
	console.log(req.session.ltDeadends);
	console.log(req.session.dtc);
	
	json_responses.customerName = req.session.customerName;
	json_responses.surveyNumber = req.session.surveyNumber;
	json_responses.address = req.session.address;
	json_responses.district = req.session.district;
	json_responses.cityTown = req.session.cityTown;
	json_responses.village = req.session.village;
	json_responses.section = req.session.section;
	json_responses.csd = req.session.csd;
	json_responses.layout = req.session.layout;
	json_responses.number = req.session.number;
	json_responses.newLayout = req.session.newLayout;
	json_responses.newNumber = req.session.newNumber;
	json_responses.customLayout = req.session.customLayout;
	json_responses.customNumber = req.session.customNumber;
	json_responses.htLength = req.session.htLength;
	json_responses.ltLength = req.session.ltLength;
	json_responses.htDeadends = req.session.htDeadends;
	json_responses.ltDeadends = req.session.ltDeadends;
	json_responses.dtc = req.session.dtc;
	json_responses.status = 200;
	
	res.send(json_responses);	
}

//logging out of system
function logout(req,res) {
	req.session.destroy();
	res.render("index");
}

function closeReport(req,res) {
	req.session.destroy();
	res.render("devInfo");
}

exports.getAdminDashInfoPage = getAdminDashInfoPage;
exports.getHighchartsAInfoPage = getHighchartsAInfoPage;
exports.getHighchartsBInfoPage = getHighchartsBInfoPage;
exports.closeReport = closeReport;
exports.displayReport = displayReport;
exports.storeDtcInfo = storeDtcInfo;
exports.getDevInfoPage = getDevInfoPage;
exports.getLayoutInfoPage = getLayoutInfoPage;
exports.getMaterialInfoPage = getMaterialInfoPage;
exports.getDTCInfoPage = getDTCInfoPage;
exports.signup= signup;
exports.login= login;
exports.logout = logout;
exports.storeDevInfo = storeDevInfo;
exports.storeLayoutInfo = storeLayoutInfo;
