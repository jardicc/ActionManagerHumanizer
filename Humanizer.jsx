/**
* @@@BUILDINFO@@@ Humanizer.jsx 0.3 Wed Dec 27 2017 20:23:52 GMT+0100
*/

/*
	Humanizer
	Copyright 2017 Jaroslav Bereza - j@bereza.cz - www.bereza.cz/ps

	The MIT License
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
	associated documentation files (the "Software"), to deal in the Software without restriction, including 
	without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
	copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
	following conditions:

	The above copyright notice and this permission notice shall be included in all copies 
	or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
	LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
	WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	Changelog:
	==========
	0.3 - ads AM code to humanizer code conversion
		- ads option for code formating
	0.2 - ads getObject and playObject
		- new example how to use this tool
	0.1 - initial release
*/

/*
	JSON
	Public Domain.
	NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	See http://www.JSON.org/js.html
*/
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

if (typeof Humanizer !== "object") {
    Humanizer = {
		version: 1
	};
}

(function () {

	const ID = {
		object: stringIDToTypeID("object"),
		convertJSONdescriptor: stringIDToTypeID("convertJSONdescriptor"),
		json: stringIDToTypeID( "json" )
	}
	
	////////////////////////
	// Helpers
	////////////////////////
	
	// str = JSON string ; spacesIndentation = integer, number of spaces
	Humanizer.formatJSONString = function(str, spacesIndentation){
		return JSON.stringify(JSON.parse(str), null, spacesIndentation);
	}
	
	Humanizer._getBestNameFromID = function(id){
		var bestName = app.typeIDToStringID(id);
		if(bestName === ""){
			bestName = app.typeIDToCharID(id);
		}
		return bestName;
	}
	
	/* With this we do not care about charID, stringID or typeID. Use whatever you want. */
	Humanizer._resolveID = function (id){
		if (id.constructor == Number) {
			return id;
		} else if(id.constructor == String){
			if(id.length > 0){
				if(id.length === 4){
					try { 
						var typeID = charIDToTypeID(id);
						if(typeIDToStringID(typeID) === ""){
							return stringIDToTypeID(id); 
						}
						return typeID
					} 
					catch (e) { return stringIDToTypeID(id); }
				}
				return stringIDToTypeID(id);
			}
		}

		Error.runtimeError(19, id);  // Bad Argument
		return undefined;
	}


	////////////////////////
	// Elementar functions
	////////////////////////

	Humanizer.descriptorToJsonString = function (descriptor){
		if(!descriptor) {
			return new ActionDescriptor();
		}
		var result;
		var convertDesc = new ActionDescriptor();
		convertDesc.putObject( ID.object, ID.object, descriptor );
		var jsonDesc = executeAction( ID.convertJSONdescriptor, convertDesc, DialogModes.NO );
		result = jsonDesc.getString(ID.json);
		return result;
	}

	Humanizer.jsonStringToObject = function (jsonString){
		var result = JSON.parse(jsonString);
		return result;
	}

	Humanizer.objectToJsonString = function (object, spacesIndentation){
		var result = JSON.stringify(object, null, spacesIndentation);
		return result;
	}

	Humanizer.jsonStringToDescriptor = function (jsonString){
		var jsonDesc = new ActionDescriptor();
		var key, convertedDesc;
		
		jsonDesc.putString( ID.json , jsonString);
		convertedDesc = executeAction( ID.convertJSONdescriptor, jsonDesc, DialogModes.NO );
		key = convertedDesc.getKey(0);
		convertedDesc = convertedDesc.getObjectValue(key);
		
		return [key,convertedDesc];
	}

	Humanizer.playObject = function(actionID, object, playDialogModes){
		playDialogModes = playDialogModes || DialogModes.NO;
		object = Humanizer.objectToDescriptor(object)[1];
		var returnedDesc = app.executeAction(Humanizer._resolveID(actionID), object, playDialogModes);
		var result = Humanizer.descriptorToObject(returnedDesc);
		return result;
	}

	Humanizer.playObjectReturnDesc = function(actionID, object, dialogMode){
		dialogMode = dialogMode || DialogModes.NO;
		object = Humanizer.objectToDescriptor(object)[1];
		return app.executeAction(Humanizer._resolveID(actionID), object, dialogMode);
	}

	Humanizer.amCodeToHumanizedCode = function(code, spacesIndentation){
		code = code.replace(/executeAction/g,'customHumanizerExecuteAction');
		code = code.replace(/app.executeAction/g,'customHumanizerExecuteAction');
		return eval(code);
		
		function customHumanizerExecuteAction(actionID, amDescriptor, playDialogModes){
			actionID = Humanizer._getBestNameFromID(actionID);
			var descObj = Humanizer.descriptorToJsonString(amDescriptor);
			if(spacesIndentation){
				descObj = Humanizer.formatJSONString(descObj, spacesIndentation);
			}
			if(!playDialogModes){
				playDialogModes = DialogModes.NO;
			}
			var humanizerCode = """var descriptor = """+descObj+""";\n"""+
			"Humanizer.playObject('"+actionID+"',descriptor,"+playDialogModes.toString()+" );";
			
			return humanizerCode;
		}
	}
	
	//////////////////////
	// Shortcut functions
	//////////////////////

	Humanizer.descriptorToObject = function (descriptor){
		return Humanizer.jsonStringToObject(Humanizer.descriptorToJsonString(descriptor));
	}

	Humanizer.objectToDescriptor = function (object, spacesIndentation){
		return Humanizer.jsonStringToDescriptor(Humanizer.objectToJsonString(object, spacesIndentation));
	}

	Humanizer.getObject = function(referenceObject){
		if(!referenceObject){Error.runtimeError(19, id);  /* Bad Argument*/}		
		return Humanizer.playObject("get", referenceObject, DialogModes.NO)
	}

	Humanizer.getDescriptor = function(referenceObject){
		if(!referenceObject){Error.runtimeError(19, id);  /* Bad Argument*/}		
		return Humanizer.playObjectReturnDesc("get", referenceObject, DialogModes.NO)
	}
}());
