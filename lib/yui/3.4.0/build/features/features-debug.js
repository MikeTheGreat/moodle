/*
YUI 3.4.0 (build 3928)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add('features', function(Y) {

var feature_tests = {};

Y.mix(Y.namespace('Features'), {

    tests: feature_tests,

    add: function(cat, name, o) {
        feature_tests[cat] = feature_tests[cat] || {};
        feature_tests[cat][name] = o;
    },

    all: function(cat, args) {
        var cat_o = feature_tests[cat],
            // results = {};
            result = [];
        if (cat_o) {
            Y.Object.each(cat_o, function(v, k) {
                result.push(k + ':' + (Y.Features.test(cat, k, args) ? 1 : 0));
            });
        }

        return (result.length) ? result.join(';') : '';
    },

    test: function(cat, name, args) {
        args = args || [];
        var result, ua, test,
            cat_o = feature_tests[cat],
            feature = cat_o && cat_o[name];

        if (!feature) {
            Y.log('Feature test ' + cat + ', ' + name + ' not found');
        } else {

            result = feature.result;

            if (Y.Lang.isUndefined(result)) {

                ua = feature.ua;
                if (ua) {
                    result = (Y.UA[ua]);
                }

                test = feature.test;
                if (test && ((!ua) || result)) {
                    result = test.apply(Y, args);
                }

                feature.result = result;
            }
        }

        return result;
    }
});

// Y.Features.add("load", "1", {});
// Y.Features.test("load", "1");
// caps=1:1;2:0;3:1;

/* This file is auto-generated by src/loader/scripts/meta_join.py */
var add = Y.Features.add;
// graphics-canvas-default
add('load', '0', {
    "name": "graphics-canvas-default", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
		canvas = DOCUMENT && DOCUMENT.createElement("canvas");
	return (DOCUMENT && !DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (canvas && canvas.getContext && canvas.getContext("2d")));
}, 
    "trigger": "graphics"
});
// autocomplete-list-keys
add('load', '1', {
    "name": "autocomplete-list-keys", 
    "test": function (Y) {
    // Only add keyboard support to autocomplete-list if this doesn't appear to
    // be an iOS or Android-based mobile device.
    //
    // There's currently no feasible way to actually detect whether a device has
    // a hardware keyboard, so this sniff will have to do. It can easily be
    // overridden by manually loading the autocomplete-list-keys module.
    //
    // Worth noting: even though iOS supports bluetooth keyboards, Mobile Safari
    // doesn't fire the keyboard events used by AutoCompleteList, so there's
    // no point loading the -keys module even when a bluetooth keyboard may be
    // available.
    return !(Y.UA.ios || Y.UA.android);
}, 
    "trigger": "autocomplete-list"
});
// graphics-svg
add('load', '2', {
    "name": "graphics-svg", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc;
	return (DOCUMENT && DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
}, 
    "trigger": "graphics"
});
// history-hash-ie
add('load', '3', {
    "name": "history-hash-ie", 
    "test": function (Y) {
    var docMode = Y.config.doc && Y.config.doc.documentMode;

    return Y.UA.ie && (!('onhashchange' in Y.config.win) ||
            !docMode || docMode < 8);
}, 
    "trigger": "history-hash"
});
// graphics-vml-default
add('load', '4', {
    "name": "graphics-vml-default", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
		canvas = DOCUMENT && DOCUMENT.createElement("canvas");
    return (DOCUMENT && !DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!canvas || !canvas.getContext || !canvas.getContext("2d")));
}, 
    "trigger": "graphics"
});
// graphics-svg-default
add('load', '5', {
    "name": "graphics-svg-default", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc;
	return (DOCUMENT && DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
}, 
    "trigger": "graphics"
});
// widget-base-ie
add('load', '6', {
    "name": "widget-base-ie", 
    "trigger": "widget-base", 
    "ua": "ie"
});
// transition-timer
add('load', '7', {
    "name": "transition-timer", 
    "test": function (Y) {
    var DOCUMENT = Y.config.doc,
        node = (DOCUMENT) ? DOCUMENT.documentElement: null,
        ret = true;

    if (node && node.style) {
        ret = !('MozTransition' in node.style || 'WebkitTransition' in node.style);
    } 

    return ret;
}, 
    "trigger": "transition"
});
// dom-style-ie
add('load', '8', {
    "name": "dom-style-ie", 
    "test": function (Y) {

    var testFeature = Y.Features.test,
        addFeature = Y.Features.add,
        WINDOW = Y.config.win,
        DOCUMENT = Y.config.doc,
        DOCUMENT_ELEMENT = 'documentElement',
        ret = false;

    addFeature('style', 'computedStyle', {
        test: function() {
            return WINDOW && 'getComputedStyle' in WINDOW;
        }
    });

    addFeature('style', 'opacity', {
        test: function() {
            return DOCUMENT && 'opacity' in DOCUMENT[DOCUMENT_ELEMENT].style;
        }
    });

    ret =  (!testFeature('style', 'opacity') &&
            !testFeature('style', 'computedStyle'));

    return ret;
}, 
    "trigger": "dom-style"
});
// selector-css2
add('load', '9', {
    "name": "selector-css2", 
    "test": function (Y) {
    var DOCUMENT = Y.config.doc,
        ret = DOCUMENT && !('querySelectorAll' in DOCUMENT);

    return ret;
}, 
    "trigger": "selector"
});
// event-base-ie
add('load', '10', {
    "name": "event-base-ie", 
    "test": function(Y) {
    var imp = Y.config.doc && Y.config.doc.implementation;
    return (imp && (!imp.hasFeature('Events', '2.0')));
}, 
    "trigger": "node-base"
});
// dd-gestures
add('load', '11', {
    "name": "dd-gestures", 
    "test": function(Y) {
    return (Y.config.win && ('ontouchstart' in Y.config.win && !Y.UA.chrome));
}, 
    "trigger": "dd-drag"
});
// scrollview-base-ie
add('load', '12', {
    "name": "scrollview-base-ie", 
    "trigger": "scrollview-base", 
    "ua": "ie"
});
// graphics-canvas
add('load', '13', {
    "name": "graphics-canvas", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
		canvas = DOCUMENT && DOCUMENT.createElement("canvas");
	return (DOCUMENT && !DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (canvas && canvas.getContext && canvas.getContext("2d")));
}, 
    "trigger": "graphics"
});
// graphics-vml
add('load', '14', {
    "name": "graphics-vml", 
    "test": function(Y) {
    var DOCUMENT = Y.config.doc,
		canvas = DOCUMENT && DOCUMENT.createElement("canvas");
    return (DOCUMENT && !DOCUMENT.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!canvas || !canvas.getContext || !canvas.getContext("2d")));
}, 
    "trigger": "graphics"
});


}, '3.4.0' ,{requires:['yui-base']});
