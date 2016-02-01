define("amber-distillation/Distillation", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Distillation');
$core.packages["Distillation"].innerEval = function (expr) { return eval(expr); };
$core.packages["Distillation"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["Distillation"].transport = {"type":"amd","amdNamespace":"amber-distillation"};

$core.addClass('Component', $globals.Object, ['name', 'x', 'T', 'r', 'alpha'], 'Distillation');
$core.addMethod(
$core.method({
selector: "T",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@T"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "T\x0a\x09^ T",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "T:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@T"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "T: anObject\x0a\x09T := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "alpha",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@alpha"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alpha\x0a\x09^ alpha",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "alpha:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@alpha"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "alpha: anObject\x0a\x09alpha := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@name"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@name"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "name: anObject\x0a\x09name := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "r",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@r"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "r\x0a\x09^ r",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "r:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@r"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "r: anObject\x0a\x09r := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "x",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@x"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);

$core.addMethod(
$core.method({
selector: "x:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@x"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "x: anObject\x0a\x09x := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Component);



$core.addClass('Distillation', $globals.Object, [], 'Distillation');

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
function $MainWindow(){return $globals.MainWindow||(typeof MainWindow=="undefined"?nil:MainWindow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($MainWindow())._new())._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Distillation.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09MainWindow new appendToJQuery: 'body' asJQuery",
referencedClasses: ["MainWindow"],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.Distillation.klass);


$core.addClass('Mixture', $globals.Object, ['components'], 'Distillation');
$core.addMethod(
$core.method({
selector: "gibbsEnergyAt:",
protocol: 'as yet unclassified',
fn: function (i){
var self=this;
var xF,TD;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$4,$7,$6,$3,$1;
xF=(0);
TD=$recv($recv(self["@components"])._at_(i))._T();
$recv($recv(self["@components"])._copyFrom_to_((1),i))._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
xF=$recv(xF).__plus($recv(e)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return xF;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=(-8.31).__star(TD);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$5=$recv(xF)._ln();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ln"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__star(xF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$7=(1).__minus(xF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__star($recv((1).__minus(xF))._ln());
$3=$recv($4).__plus($6);
$1=$recv($2).__star($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gibbsEnergyAt:",{i:i,xF:xF,TD:TD},$globals.Mixture)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i"],
source: "gibbsEnergyAt: i\x0a\x09| xF TD |\x0a\x09xF := 0.\x0a\x09TD := (components at: i) T.\x0a\x09(components copyFrom: 1 to: i) collect: [:e | xF := (xF + e x)].\x0a\x09^ -8.31 * TD * (((xF ln) * xF) + ((1 - xF) * ((1 - xF) ln)))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["T", "at:", "collect:", "copyFrom:to:", "+", "x", "*", "ln", "-"]
}),
$globals.Mixture);

$core.addMethod(
$core.method({
selector: "gibbsEnergyAt:xB:xD:",
protocol: 'as yet unclassified',
fn: function (i,xB,xD){
var self=this;
var xF,TD,eps,ln1,ln2,ln3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$8,$7,$5,$10,$9,$12,$14,$13,$11,$16,$15,$18,$20,$19,$17,$22,$25,$26,$24,$23,$21;
xF=(0);
TD=$recv($recv(self["@components"])._at_(i))._T();
$recv($recv(self["@components"])._copyFrom_to_((1),i))._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
xF=$recv(xF).__plus($recv(e)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return xF;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(xF).__minus(xB);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$2=$recv(xD).__minus(xB);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
eps=$recv($1).__slash($2);
$4=$recv(xF)._ln();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ln"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star(xF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$6=(1).__minus(xF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$8=(1).__minus(xF);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._ln();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ln"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__star($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
ln1=$recv($3).__plus($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$10=$recv(xB)._ln();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ln"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__star(xB);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$12=(1).__minus(xB);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=5;
//>>excludeEnd("ctx");
$14=(1).__minus(xB);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=6;
//>>excludeEnd("ctx");
$13=$recv($14)._ln();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ln"]=4;
//>>excludeEnd("ctx");
$11=$recv($12).__star($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
ln2=$recv($9).__plus($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$16=$recv(xD)._ln();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ln"]=5;
//>>excludeEnd("ctx");
$15=$recv($16).__star(xD);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
$18=(1).__minus(xD);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=7;
//>>excludeEnd("ctx");
$20=(1).__minus(xD);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=8;
//>>excludeEnd("ctx");
$19=$recv($20)._ln();
$17=$recv($18).__star($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
ln3=$recv($15).__plus($17);
$22=(-8.31).__star(TD);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=8;
//>>excludeEnd("ctx");
$25=ln1;
$26=$recv((1).__minus(eps)).__star(ln2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=9;
//>>excludeEnd("ctx");
$24=$recv($25).__minus($26);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=10;
//>>excludeEnd("ctx");
$23=$recv($24).__minus($recv(eps).__star(ln3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=9;
//>>excludeEnd("ctx");
$21=$recv($22).__star($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
return $21;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gibbsEnergyAt:xB:xD:",{i:i,xB:xB,xD:xD,xF:xF,TD:TD,eps:eps,ln1:ln1,ln2:ln2,ln3:ln3},$globals.Mixture)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i", "xB", "xD"],
source: "gibbsEnergyAt: i xB: xB xD: xD\x0a\x09| xF TD eps ln1 ln2 ln3 |\x0a\x09xF := 0.\x0a\x09TD := (components at: i) T.\x0a\x09(components copyFrom: 1 to: i) collect: [:e | xF := (xF + e x)].\x0a\x09eps := (xF - xB) / (xD - xB).\x0a\x09ln1 := ((xF ln) * xF) + ((1 - xF) * ((1 - xF) ln)).\x0a\x09ln2 := ((xB ln) * xB) + ((1 - xB) * ((1 - xB) ln)).\x0a\x09ln3 := ((xD ln) * xD) + ((1 - xD) * ((1 - xD) ln)).\x0a\x09^ -8.31 * TD * (ln1 - ((1 - eps) * ln2) - (eps * ln3))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["T", "at:", "collect:", "copyFrom:to:", "+", "x", "/", "-", "*", "ln"]
}),
$globals.Mixture);

$core.addMethod(
$core.method({
selector: "of",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@components"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "of\x0a\x09^ components",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mixture);

$core.addMethod(
$core.method({
selector: "of:",
protocol: 'accessing',
fn: function (aComponents){
var self=this;
self["@components"]=aComponents;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aComponents"],
source: "of: aComponents\x0a\x09components := aComponents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mixture);

$core.addMethod(
$core.method({
selector: "revEff:",
protocol: 'as yet unclassified',
fn: function (i){
var self=this;
var TB,TD,AG;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@components"])._at_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
TD=$recv($1)._T();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["T"]=1;
//>>excludeEnd("ctx");
TB=$recv($recv(self["@components"])._at_($recv(i).__plus((1))))._T();
AG=self._gibbsEnergyAt_(i);
$2=$recv($recv(TB).__minus(TD)).__slash($recv(TB).__star(AG));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"revEff:",{i:i,TB:TB,TD:TD,AG:AG},$globals.Mixture)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i"],
source: "revEff: i\x0a\x09| TB TD AG |\x0a\x09TD := (components at: i) T.\x0a\x09TB := (components at: (i + 1)) T.\x0a\x09AG := self gibbsEnergyAt: i.\x0a\x09^ (TB - TD) / (TB * AG)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["T", "at:", "+", "gibbsEnergyAt:", "/", "-", "*"]
}),
$globals.Mixture);

$core.addMethod(
$core.method({
selector: "revEff:xB:xD:",
protocol: 'as yet unclassified',
fn: function (i,xB,xD){
var self=this;
var TB,TD,AG;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@components"])._at_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
TD=$recv($1)._T();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["T"]=1;
//>>excludeEnd("ctx");
TB=$recv($recv(self["@components"])._at_($recv(i).__plus((1))))._T();
AG=self._gibbsEnergyAt_xB_xD_(i,xB,xD);
$2=$recv($recv(TB).__minus(TD)).__slash($recv(TB).__star(AG));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"revEff:xB:xD:",{i:i,xB:xB,xD:xD,TB:TB,TD:TD,AG:AG},$globals.Mixture)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i", "xB", "xD"],
source: "revEff: i xB: xB xD: xD\x0a\x09| TB TD AG |\x0a\x09TD := (components at: i) T.\x0a\x09TB := (components at: (i + 1)) T.\x0a\x09AG := self gibbsEnergyAt: i xB: xB xD: xD.\x0a\x09^ (TB - TD) / (TB * AG)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["T", "at:", "+", "gibbsEnergyAt:xB:xD:", "/", "-", "*"]
}),
$globals.Mixture);


});
