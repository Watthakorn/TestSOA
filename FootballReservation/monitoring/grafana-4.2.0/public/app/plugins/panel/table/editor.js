/*! grafana - v4.2.0 - 2017-03-22
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","angular","./transformers","app/core/utils/kbn"],function(a,b){"use strict";function c(a,b){return{restrict:"E",scope:!0,templateUrl:"public/app/plugins/panel/table/editor.html",controller:h}}c.$inject=["$q","uiSegmentSrv"];b&&b.id;a("tablePanelEditor",c);var d,e,f,g,h;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){h=function(){function a(a,b,c){var e=this;this.$q=b,this.uiSegmentSrv=c,a.editor=this,this.panelCtrl=a.ctrl,this.panel=this.panelCtrl.panel,this.transformers=f.transformers,this.unitFormats=g.default.getUnitFormats(),this.colorModes=[{text:"Disabled",value:null},{text:"Cell",value:"cell"},{text:"Value",value:"value"},{text:"Row",value:"row"}],this.columnTypes=[{text:"Number",value:"number"},{text:"String",value:"string"},{text:"Date",value:"date"},{text:"Hidden",value:"hidden"}],this.fontSizes=["80%","90%","100%","110%","120%","130%","150%","160%","180%","200%","220%","250%"],this.dateFormats=[{text:"YYYY-MM-DD HH:mm:ss",value:"YYYY-MM-DD HH:mm:ss"},{text:"MM/DD/YY h:mm:ss a",value:"MM/DD/YY h:mm:ss a"},{text:"MMMM D, YYYY LT",value:"MMMM D, YYYY LT"}],this.addColumnSegment=c.newPlusButton(),this.getColumnNames=function(){return e.panelCtrl.table?d.default.map(e.panelCtrl.table.columns,function(a){return a.text}):[]}}return a.$inject=["$scope","$q","uiSegmentSrv"],a.prototype.getColumnOptions=function(){var a=this;if(!this.panelCtrl.dataRaw)return this.$q.when([]);var b=this.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw),c=d.default.map(b,function(b){return a.uiSegmentSrv.newSegment({value:b.text})});return this.$q.when(c)},a.prototype.addColumn=function(){var a=f.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw),b=d.default.find(a,{text:this.addColumnSegment.value});b&&(this.panel.columns.push(b),this.render());var c=this.uiSegmentSrv.newPlusButton();this.addColumnSegment.html=c.html,this.addColumnSegment.value=c.value},a.prototype.transformChanged=function(){this.panel.columns=[],this.render()},a.prototype.render=function(){this.panelCtrl.render()},a.prototype.removeColumn=function(a){this.panel.columns=d.default.without(this.panel.columns,a),this.panelCtrl.render()},a.prototype.setUnitFormat=function(a,b){a.unit=b.value,this.panelCtrl.render()},a.prototype.addColumnStyle=function(){var a={unit:"short",type:"number",decimals:2,colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],colorMode:null,pattern:"/.*/",dateFormat:"YYYY-MM-DD HH:mm:ss",thresholds:[]};this.panel.styles.push(e.default.copy(a))},a.prototype.removeColumnStyle=function(a){this.panel.styles=d.default.without(this.panel.styles,a)},a.prototype.invertColorOrder=function(a){var b=this.panel.styles[a].colors,c=b[0];b[0]=b[2],b[2]=c,this.panelCtrl.render()},a}(),a("TablePanelEditorCtrl",h)}}});