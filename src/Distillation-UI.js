define("amber-distillation/Distillation-UI", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber/web/Web"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Distillation-UI');
$core.packages["Distillation-UI"].innerEval = function (expr) { return eval(expr); };
$core.packages["Distillation-UI"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["Distillation-UI"].transport = {"type":"amd","amdNamespace":"amber-distillation"};

$core.addClass('EditableTable', $globals.Widget, ['data'], 'Distillation-UI');
$core.addMethod(
$core.method({
selector: "addTable:",
protocol: 'adding',
fn: function (aId){
var self=this;
function $Handsontable(){return $globals.Handsontable||(typeof Handsontable=="undefined"?nil:Handsontable)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Handsontable())._newValue_value_($recv(document)._getElementById_(aId),$globals.HashedCollection._newFromPairs_(["data",self["@data"],"colHeaders",["Наименование", "Мольная доля", "Температура кипения, К", "Мольная теплота парообразования, кДж/моль", "Летучесть"],"contextMenu",$globals.HashedCollection._newFromPairs_(["items",$globals.HashedCollection._newFromPairs_(["row_above",$globals.HashedCollection._newFromPairs_(["name","Вставить строку перед этой"]),"row_below",$globals.HashedCollection._newFromPairs_(["name","Вставить строку после этой"]),"hsep1","---------","remove_row",$globals.HashedCollection._newFromPairs_(["name","Удалить строку"])])]),"className","htCenter","rowHeaders",true,"columns",[$globals.HashedCollection._newFromPairs_(["type","text"]),$globals.HashedCollection._newFromPairs_(["type","numeric"]),$globals.HashedCollection._newFromPairs_(["type","numeric"]),$globals.HashedCollection._newFromPairs_(["type","numeric"]),$globals.HashedCollection._newFromPairs_(["type","numeric"])]]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTable:",{aId:aId},$globals.EditableTable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aId"],
source: "addTable: aId\x0a\x09Handsontable newValue: (document getElementById: aId)\x0a\x09\x09value: #{\x0a\x09\x09\x09'data' -> data.\x0a\x09\x09\x09'colHeaders' -> #(\x0a\x09\x09\x09\x09'Наименование'\x0a\x09\x09\x09\x09'Мольная доля'\x0a\x09\x09\x09\x09'Температура кипения, К'\x0a\x09\x09\x09\x09'Мольная теплота парообразования, кДж/моль'\x0a\x09\x09\x09\x09'Летучесть'\x0a\x09\x09\x09).\x0a\x09\x09\x09'contextMenu' -> #{\x0a\x09\x09\x09\x09'items' -> #{\x0a\x09\x09\x09\x09\x09'row_above' -> #{\x0a\x09\x09\x09\x09\x09\x09'name' -> 'Вставить строку перед этой'\x0a\x09\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09\x09'row_below' -> #{\x0a\x09\x09\x09\x09\x09\x09'name' -> 'Вставить строку после этой'\x0a\x09\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09\x09'hsep1' -> '---------'.\x0a\x09\x09\x09\x09\x09'remove_row' -> #{\x0a\x09\x09\x09\x09\x09\x09'name' -> 'Удалить строку'\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}.\x0a\x09\x09\x09'className' -> 'htCenter'.\x0a\x09\x09\x09'rowHeaders' -> true.\x0a\x09\x09\x09'columns' -> {\x0a\x09\x09\x09\x09#{\x0a\x09\x09\x09\x09\x09'type' -> 'text'\x0a\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09#{\x0a\x09\x09\x09\x09\x09'type' -> 'numeric'\x0a\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09#{\x0a\x09\x09\x09\x09\x09'type' -> 'numeric'\x0a\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09#{\x0a\x09\x09\x09\x09\x09'type' -> 'numeric'\x0a\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09#{\x0a\x09\x09\x09\x09\x09'type' -> 'numeric'\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}",
referencedClasses: ["Handsontable"],
//>>excludeEnd("ide");
messageSends: ["newValue:value:", "getElementById:"]
}),
$globals.EditableTable);

$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@data"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x09^ data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.EditableTable);

$core.addMethod(
$core.method({
selector: "data:",
protocol: 'accessing',
fn: function (aData){
var self=this;
self["@data"]=aData;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aData"],
source: "data: aData\x0a\x09data := aData",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.EditableTable);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.EditableTable.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@data"]=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.EditableTable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09data := {}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.EditableTable);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var id;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
id=$recv(uuid)._value();
$recv($recv(html)._div())._id_(id);
self._addTable_(id);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,id:id},$globals.EditableTable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| id |\x0a\x09id := uuid value.\x0a\x09html div id: id.\x0a\x09self addTable: id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "id:", "div", "addTable:"]
}),
$globals.EditableTable);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aData){
var self=this;
function $EditableTable(){return $globals.EditableTable||(typeof EditableTable=="undefined"?nil:EditableTable)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($EditableTable())._new())._data_(aData);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aData:aData},$globals.EditableTable.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aData"],
source: "on: aData\x0a\x09^(EditableTable new data: aData)",
referencedClasses: ["EditableTable"],
//>>excludeEnd("ide");
messageSends: ["data:", "new"]
}),
$globals.EditableTable.klass);


$core.addClass('Footer', $globals.Widget, [], 'Distillation-UI');
$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._footer();
$recv($1)._class_("footer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("container");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_("Example");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Footer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html footer class: 'footer';\x0a\x09\x09with: [\x0a\x09\x09\x09html div class: 'container';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html p with: 'Example'\x0a\x09\x09\x09\x09]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "footer", "with:", "div", "p"]
}),
$globals.Footer);



$core.addClass('HomePage', $globals.Widget, ['subheader', 'col1text', 'col2text', 'col3text', 'col4text', 'page1'], 'Distillation-UI');
$core.addMethod(
$core.method({
selector: "column1On:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$1=$recv(html)._div();
$recv($1)._class_("col-xs-3");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._a();
$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._h4())._with_("Бинарная ректификация »");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv($2)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4="#main"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($4)._empty();
return $recv(self["@page1"])._appendToJQuery_("#main"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$5=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_(self["@col1text"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"column1On:",{html:html},$globals.HomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "column1On: html\x0a\x09html div class: 'col-xs-3';\x0a\x09\x09with: [ \x0a\x09\x09\x09html a with: [\x0a\x09\x09\x09\x09html h4 with: 'Бинарная ректификация »'\x0a\x09\x09\x09];\x0a\x09\x09\x09onClick: [\x0a\x09\x09\x09\x09'#main' asJQuery empty.\x0a\x09\x09\x09\x09page1 appendToJQuery: '#main' asJQuery\x0a\x09\x09\x09]\x0a\x09\x09];\x0a\x09\x09with: [\x0a\x09\x09\x09html p with: col1text\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "h4", "onClick:", "empty", "asJQuery", "appendToJQuery:", "p"]
}),
$globals.HomePage);

$core.addMethod(
$core.method({
selector: "column2On:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("col-xs-3");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._a())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._h4())._with_("Тернарная ректификация »");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_(self["@col2text"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"column2On:",{html:html},$globals.HomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "column2On: html\x0a\x09html div class: 'col-xs-3';\x0a\x09\x09with: [ \x0a\x09\x09\x09html a with: [\x0a\x09\x09\x09\x09html h4 with: 'Тернарная ректификация »' \x0a\x09\x09\x09]\x0a\x09\x09];\x0a\x09\x09with: [\x0a\x09\x09\x09html p with: col2text\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "h4", "p"]
}),
$globals.HomePage);

$core.addMethod(
$core.method({
selector: "column3On:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("col-xs-3");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._a())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._h4())._with_("Многокомпонентная ректификация: производительность »");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_(self["@col3text"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"column3On:",{html:html},$globals.HomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "column3On: html\x0a\x09html div class: 'col-xs-3';\x0a\x09\x09with: [ \x0a\x09\x09\x09html a with: [\x0a\x09\x09\x09\x09html h4 with: 'Многокомпонентная ректификация: производительность »' \x0a\x09\x09\x09]\x0a\x09\x09];\x0a\x09\x09with: [\x0a\x09\x09\x09html p with: col3text\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "h4", "p"]
}),
$globals.HomePage);

$core.addMethod(
$core.method({
selector: "column4On:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("col-xs-3");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._a())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._h4())._with_("Многокомпонентная ректификация: затраты »");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_(self["@col4text"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"column4On:",{html:html},$globals.HomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "column4On: html\x0a\x09html div class: 'col-xs-3';\x0a\x09\x09with: [ \x0a\x09\x09\x09html a with: [\x0a\x09\x09\x09\x09html h4 with: 'Многокомпонентная ректификация: затраты »'\x0a\x09\x09\x09]\x0a\x09\x09];\x0a\x09\x09with: [\x0a\x09\x09\x09html p with: col4text\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "h4", "p"]
}),
$globals.HomePage);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HomePage.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@subheader"]="Программный продукт позволяет строить области реализуемости различных процессов ректификации, находить\x0a\x09\x09оптимальный порядок разделения многокомпонентных смесей, вычислять максимальную производительность отдельной колонны\x0a\x09\x09и каскадов колонн, высчитывать минимальные затраты тепла на разделение при заданной производительности каскада.";
self["@col1text"]="Построение области реализуемых нагрузок колонны бинарной (квазибинарной ректификации)";
self["@col2text"]="Построение области реализуемых нагрузок и выбор порядка разделения трехкомпонентной смеси в каскаде\x0a\x09\x09из двух колонн бинарной ректификации";
self["@col3text"]="Расчет максимальной производительности и нахождение соответствующего порядка разделения многокомпонентной смеси";
self["@col4text"]="Расчет минимальных затрат теплоты и поиск соответствующего порядка разделения многокомпонентной смеси";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09subheader := 'Программный продукт позволяет строить области реализуемости различных процессов ректификации, находить\x0a\x09\x09оптимальный порядок разделения многокомпонентных смесей, вычислять максимальную производительность отдельной колонны\x0a\x09\x09и каскадов колонн, высчитывать минимальные затраты тепла на разделение при заданной производительности каскада.'.\x0a\x09\x09\x0a\x09col1text := 'Построение области реализуемых нагрузок колонны бинарной (квазибинарной ректификации)'.\x0a\x09\x0a\x09col2text := 'Построение области реализуемых нагрузок и выбор порядка разделения трехкомпонентной смеси в каскаде\x0a\x09\x09из двух колонн бинарной ректификации'.\x0a\x09\x09\x0a\x09col3text := 'Расчет максимальной производительности и нахождение соответствующего порядка разделения многокомпонентной смеси'.\x0a\x09\x0a\x09col4text := 'Расчет минимальных затрат теплоты и поиск соответствующего порядка разделения многокомпонентной смеси'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.HomePage);

$core.addMethod(
$core.method({
selector: "page1:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@page1"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "page1: anObject\x0a\x0a\x09page1 := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HomePage);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(html)._p())._with_(self["@subheader"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$1=$recv(html)._div();
$recv($1)._class_("container-fluid");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._rowOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html p with: subheader.\x0a\x09html div class: 'container-fluid';\x0a\x09\x09with: [ self rowOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "p", "class:", "div", "rowOn:"]
}),
$globals.HomePage);

$core.addMethod(
$core.method({
selector: "rowOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("row row-eq-height");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._column1On_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._column2On_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._column3On_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._column4On_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowOn:",{html:html},$globals.HomePage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "rowOn: html\x0a\x09html div class: 'row row-eq-height';\x0a\x09\x09with: [ self column1On: html ];\x0a\x09\x09with: [ self column2On: html ];\x0a\x09\x09with: [ self column3On: html ];\x0a\x09\x09with: [ self column4On: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "column1On:", "column2On:", "column3On:", "column4On:"]
}),
$globals.HomePage);



$core.addClass('MainWindow', $globals.Widget, ['navbar', 'homepage', 'page1', 'footer'], 'Distillation-UI');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $NavBar(){return $globals.NavBar||(typeof NavBar=="undefined"?nil:NavBar)}
function $Footer(){return $globals.Footer||(typeof Footer=="undefined"?nil:Footer)}
function $HomePage(){return $globals.HomePage||(typeof HomePage=="undefined"?nil:HomePage)}
function $Page1(){return $globals.Page1||(typeof Page1=="undefined"?nil:Page1)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MainWindow.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@navbar"]=$recv($NavBar())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@footer"]=$recv($Footer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self["@homepage"]=$recv($HomePage())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
self["@page1"]=$recv($Page1())._new();
$recv(self["@navbar"])._homepage_(self["@homepage"]);
$recv(self["@homepage"])._page1_(self["@page1"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MainWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09navbar := NavBar new.\x0a\x09footer := Footer new.\x0a\x09\x0a\x09homepage := HomePage new.\x0a\x09\x0a\x09page1 := Page1 new.\x0a\x09\x0a\x09navbar homepage: homepage.\x0a\x09\x0a\x09homepage page1: page1",
referencedClasses: ["NavBar", "Footer", "HomePage", "Page1"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "homepage:", "page1:"]
}),
$globals.MainWindow);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@navbar"])._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderOn:"]=1;
//>>excludeEnd("ctx");
$1=$recv(html)._div();
$recv($1)._id_("main");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@homepage"])._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["renderOn:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@footer"])._renderOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.MainWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09navbar renderOn: html.\x0a\x09html div id: 'main';\x0a\x09\x09with: [ homepage renderOn: html ].\x0a\x09footer renderOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "id:", "div", "with:"]
}),
$globals.MainWindow);



$core.addClass('NavBar', $globals.Widget, ['homepage'], 'Distillation-UI');
$core.addMethod(
$core.method({
selector: "containerFluidOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("container-fluid");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._navbarHeaderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._navbarOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"containerFluidOn:",{html:html},$globals.NavBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "containerFluidOn: html\x0a\x09html div class: 'container-fluid';\x0a\x09\x09with: [ self navbarHeaderOn: html ];\x0a\x09\x09with: [ self navbarOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "navbarHeaderOn:", "navbarOn:"]
}),
$globals.NavBar);

$core.addMethod(
$core.method({
selector: "homepage",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@homepage"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "homepage\x0a\x09^ homepage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NavBar);

$core.addMethod(
$core.method({
selector: "homepage:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@homepage"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "homepage: anObject\x0a\x09homepage := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NavBar);

$core.addMethod(
$core.method({
selector: "navbarHeaderOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("navbar-header");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._a();
$recv($3)._class_("navbar-brand");
$recv($3)._href_("#");
$recv($3)._with_("Ректификация");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5="#main"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($5)._empty();
return $recv(self["@homepage"])._appendToJQuery_("#main"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navbarHeaderOn:",{html:html},$globals.NavBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "navbarHeaderOn: html\x0a\x09html div class: 'navbar-header';\x0a\x09\x09with: [\x0a\x09\x09\x09html a class: 'navbar-brand';\x0a\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09with: 'Ректификация';\x0a\x09\x09\x09\x09onClick: [\x0a\x09\x09\x09\x09\x09'#main' asJQuery empty.\x0a\x09\x09\x09\x09\x09homepage appendToJQuery: '#main' asJQuery\x0a\x09\x09\x09\x09]\x0a\x09\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "href:", "onClick:", "empty", "asJQuery", "appendToJQuery:"]
}),
$globals.NavBar);

$core.addMethod(
$core.method({
selector: "navbarHelpOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._a();
$recv($1)._href_("#");
$2=$recv($1)._with_("Руководство");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navbarHelpOn:",{html:html},$globals.NavBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "navbarHelpOn: html\x0a\x09html li with: [ html a href: '#'; with: 'Руководство' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "li", "href:", "a"]
}),
$globals.NavBar);

$core.addMethod(
$core.method({
selector: "navbarHomeOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._a();
$recv($1)._href_("#");
$recv($1)._with_("Главная");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3="#main"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($3)._empty();
return $recv(self["@homepage"])._appendToJQuery_("#main"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navbarHomeOn:",{html:html},$globals.NavBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "navbarHomeOn: html\x0a\x09html li with: [ \x0a\x09\x09html a href: '#';\x0a\x09\x09\x09with: 'Главная';\x0a\x09\x09\x09onClick: [\x0a\x09\x09\x09\x09\x09'#main' asJQuery empty.\x0a\x09\x09\x09\x09\x09homepage appendToJQuery: '#main' asJQuery\x0a\x09\x09\x09\x09]\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "li", "href:", "a", "onClick:", "empty", "asJQuery", "appendToJQuery:"]
}),
$globals.NavBar);

$core.addMethod(
$core.method({
selector: "navbarOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._ul();
$recv($1)._class_("nav navbar-nav");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._navbarHomeOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._navbarHelpOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navbarOn:",{html:html},$globals.NavBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "navbarOn: html\x0a\x09html ul class: 'nav navbar-nav';\x0a\x09\x09with: [ self navbarHomeOn: html ];\x0a\x09\x09with: [ self navbarHelpOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "with:", "navbarHomeOn:", "navbarHelpOn:"]
}),
$globals.NavBar);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._nav();
$recv($1)._class_("navbar navbar-default");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._containerFluidOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.NavBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html nav class: 'navbar navbar-default'; with: [ self containerFluidOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "nav", "with:", "containerFluidOn:"]
}),
$globals.NavBar);



$core.addClass('Page1', $globals.Widget, ['table1', 'tab1Desc', 'tab2Desc', 'table2', 'tab3Desc', 'table3'], 'Distillation-UI');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $EditableTable(){return $globals.EditableTable||(typeof EditableTable=="undefined"?nil:EditableTable)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Page1.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@tab1Desc"]="Введите данные о составе смеси, разделяемой в колонне. Коэффициенты летучести будут нормированы относительно самого\x0a\x09\x09низкокипящего компонента, для которого значение данного коэффициента будет принято за единицу.";
self["@tab2Desc"]="Введите данные о составе верхнего продукта в таблицу 2.";
self["@tab3Desc"]="Введите данные о составе нижнего продукта в таблицу 3.";
self["@table1"]=$recv($EditableTable())._on_([[],[]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:"]=1;
//>>excludeEnd("ctx");
self["@table2"]=$recv($EditableTable())._on_([[]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:"]=2;
//>>excludeEnd("ctx");
self["@table3"]=$recv($EditableTable())._on_([[]]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Page1)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09tab1Desc := 'Введите данные о составе смеси, разделяемой в колонне. Коэффициенты летучести будут нормированы относительно самого\x0a\x09\x09низкокипящего компонента, для которого значение данного коэффициента будет принято за единицу.'.\x0a\x09tab2Desc := 'Введите данные о составе верхнего продукта в таблицу 2.'.\x0a\x09tab3Desc := 'Введите данные о составе нижнего продукта в таблицу 3.'.\x0a\x0a\x09table1 := EditableTable on: { { } . { } }.\x0a\x09table2 := EditableTable on: { { } }.\x0a\x09table3 := EditableTable on: { { } }",
referencedClasses: ["EditableTable"],
//>>excludeEnd("ide");
messageSends: ["initialize", "on:"]
}),
$globals.Page1);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var tr1,layout;
function $Plotly(){return $globals.Plotly||(typeof Plotly=="undefined"?nil:Plotly)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
$1=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_(self["@tab1Desc"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv(self["@table1"])._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderOn:"]=1;
//>>excludeEnd("ctx");
$2=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=2;
//>>excludeEnd("ctx");
$recv($2)._with_("Таблица 1. Состав входной смеси");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv($2)._style_("font-style: italic;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$4=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=3;
//>>excludeEnd("ctx");
$recv($4)._with_(self["@tab2Desc"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$recv(self["@table2"])._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderOn:"]=2;
//>>excludeEnd("ctx");
$5=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=4;
//>>excludeEnd("ctx");
$recv($5)._with_("Таблица 2. Состав верхнего продукта");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$6=$recv($5)._style_("font-style: italic;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=2;
//>>excludeEnd("ctx");
$7=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=5;
//>>excludeEnd("ctx");
$recv($7)._with_(self["@tab3Desc"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$recv(self["@table3"])._renderOn_(html);
$8=$recv(html)._p();
$recv($8)._with_("Таблица 3. Состав нижнего продукта");
$9=$recv($8)._style_("font-style: italic;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=3;
//>>excludeEnd("ctx");
$10=$recv(html)._div();
$recv($10)._id_("exa");
$11=$recv($10)._style_("width: 480px; height: 400px;");
tr1=$globals.HashedCollection._newFromPairs_(["x",[(1),(2),(3),(4)],"y",[(10),(15),(13),(17)],"mode","lines"]);
layout=$globals.HashedCollection._newFromPairs_(["title","Область реализуемости колонны бинарной ректификации","yaxis",$globals.HashedCollection._newFromPairs_(["title","g<sub>F</sub>, моль/с"]),"xaxis",$globals.HashedCollection._newFromPairs_(["title","q, кВт"])]);
$recv($Plotly())._newPlot_data_layout_("exa",[tr1],layout);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,tr1:tr1,layout:layout},$globals.Page1)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| tr1 layout |\x0a\x09html p with: tab1Desc.\x0a\x09table1 renderOn: html.\x0a\x09html p with: 'Таблица 1. Состав входной смеси'; style: 'font-style: italic;'.\x0a\x09html p with: tab2Desc.\x0a\x09table2 renderOn: html.\x0a\x09html p with: 'Таблица 2. Состав верхнего продукта'; style: 'font-style: italic;'.\x0a\x09html p with: tab3Desc.\x0a\x09table3 renderOn: html.\x0a\x09html p with: 'Таблица 3. Состав нижнего продукта'; style: 'font-style: italic;'.\x0a\x09html div id: 'exa'; style: 'width: 480px; height: 400px;'.\x0a\x09tr1 := #{\x0a\x09\x09'x' -> {1 . 2 . 3 .4}.\x0a\x09\x09'y' -> {10 . 15 . 13 . 17}.\x0a\x09\x09'mode' -> 'lines'\x0a\x09}.\x0a\x09layout := #{\x0a\x09\x09'title' -> 'Область реализуемости колонны бинарной ректификации'.\x0a\x09\x09'yaxis' -> #{\x0a\x09\x09\x09'title' -> 'g<sub>F</sub>, моль/с'\x0a\x09\x09}.\x0a\x09\x09'xaxis' -> #{\x0a\x09\x09\x09'title' -> 'q, кВт'\x0a\x09\x09}\x0a\x09}.\x0a\x09Plotly newPlot: 'exa' data: { tr1 } layout: layout\x0a\x09",
referencedClasses: ["Plotly"],
//>>excludeEnd("ide");
messageSends: ["with:", "p", "renderOn:", "style:", "id:", "div", "newPlot:data:layout:"]
}),
$globals.Page1);


});
