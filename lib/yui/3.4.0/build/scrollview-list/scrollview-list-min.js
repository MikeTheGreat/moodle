/*
YUI 3.4.0 (build 3928)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("scrollview-list",function(a){var b=a.ClassNameManager.getClassName,d="scrollview",c=b(d,"list"),g=b(d,"item"),h="contentBox",e="rendered",i="renderUI",j="host";function f(){f.superclass.constructor.apply(this,arguments);}f.NAME="pluginList";f.NS="list";f.ATTRS={isAttached:{value:false,validator:a.Lang.isBoolean}};a.namespace("Plugin").ScrollViewList=a.extend(f,a.Plugin.Base,{initializer:function(){this._host=this.get(j);this.afterHostMethod("renderUI",this._addClassesToList);if(this._host.get(e)){this._addClassesToList();}},_addClassesToList:function(){if(!this.get("isAttached")){var l=this._host.get(h),m,k;if(l.hasChildNodes()){m=l.all("> ul");k=l.all("> ul > li");m.each(function(n){n.addClass(c);});k.each(function(n){n.addClass(g);});this.set("isAttached",true);}}}});},"3.4.0",{skinnable:true,requires:["plugin"]});