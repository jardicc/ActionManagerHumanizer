# ActionManagerHumanizer
This tool will reveal for you occult mystery of Photoshop ActionDescriptors and will transform them into well known JSON strings and JS objects. You can change regular JS object as normal humans usually do and then transform it into ActionDescriptor with whom only masters are familiar


## Warning
Your development will be faster. But your script won't be fast as it would be in pure Action Manager code.
Photoshop CC 2015.5 and higher

## Example - How to read current layer properties
```javascript
#include Humanizer.jsx

var referenceObject = {
	"null": {
		"_enum": "ordinal",
		"_ref": "layer",
		"_value": "targetEnum"
	}
};
var layerProperties = Humanizer.getObject(referenceObject);
```
## Example - How to read single layer property (faster)
```javascript
#include Humanizer.jsx

var referenceObject = {
	"null": {
		"_ref": [
			{
				"_property": "layerID",
				"_ref": "property"
			}
			,{
				"_enum": "ordinal",
				"_ref": "layer",
				"_value": "targetEnum"
			}
		]
	}
};
alert("LayerID is: " + Humanizer.getObject(referenceObject).layerID);
```

## Example - How to read get property and set modified property
This will randomize text layer color.
```javascript
#include Humanizer.jsx

// first we create reference for getting textKey property only
var referenceObject = {
	"null": {
		"_ref": [
		
			// which property we want
			{
				"_property": "textKey",
				"_ref": "property"
			}
			
			// selected layer
			,{
				"_enum": "ordinal",
				"_ref": "layer",
				"_value": "targetEnum"
			}
		]
	}
};
// Here is our text definition. 
var textKey = Humanizer.getObject(referenceObject).textKey;
// At this point we can simply read and change values same way as in normal JS object!

// Get color property of first style range
var color = textKey.textStyleRange[0].textStyle.color;									

// randomize color channels
color.red = Math.floor(Math.random() * 255);  	
color.grain = Math.floor(Math.random() * 255);  // adobe did mistake. grain = green
color.blue = Math.floor(Math.random() * 255);

var objectToPlay = {

	// this is reference. We are saying that we are targeting selected layer
	"null": { 
		"_enum": "ordinal",
		"_ref": "textLayer",
		"_value": "targetEnum"
	},
	
	// here is our modified text definion
	"to": textKey 
}

// here we run our modified object with desired layer reference
// "set" is name for action. It means set Action Descriptor
Humanizer.playObject ("set", objectToPlay); 
```
## How to convert action manager script listener code into playable humanized code
```
#include Humanizer.jsx

// standard Script Listener vomits. Triple quote is valid in JSX but not in JS. So I turned JS highlight off.
var code = """ 
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc1202 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref392 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref392.putClass( idcontentLayer );
    desc1202.putReference( idnull, ref392 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc1203 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
            var desc1204 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
                var desc1205 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc1205.putDouble( idRd, 240.000001 );
                var idGrn = charIDToTypeID( "Grn " );
                desc1205.putDouble( idGrn, 21.649806 );
                var idBl = charIDToTypeID( "Bl  " );
                desc1205.putDouble( idBl, 21.649806 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc1204.putObject( idClr, idRGBC, desc1205 );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc1203.putObject( idType, idsolidColorLayer, desc1204 );
        var idShp = charIDToTypeID( "Shp " );
            var desc1206 = new ActionDescriptor();
            var idunitValueQuadVersion = stringIDToTypeID( "unitValueQuadVersion" );
            desc1206.putInteger( idunitValueQuadVersion, 1 );
            var idTop = charIDToTypeID( "Top " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1206.putUnitDouble( idTop, idPxl, 14.000000 );
            var idLeft = charIDToTypeID( "Left" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1206.putUnitDouble( idLeft, idPxl, 16.000000 );
            var idBtom = charIDToTypeID( "Btom" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1206.putUnitDouble( idBtom, idPxl, 53.000000 );
            var idRght = charIDToTypeID( "Rght" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1206.putUnitDouble( idRght, idPxl, 73.000000 );
            var idtopRight = stringIDToTypeID( "topRight" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1206.putUnitDouble( idtopRight, idPxl, 0.000000 );
            var idtopLeft = stringIDToTypeID( "topLeft" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1206.putUnitDouble( idtopLeft, idPxl, 0.000000 );
            var idbottomLeft = stringIDToTypeID( "bottomLeft" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1206.putUnitDouble( idbottomLeft, idPxl, 0.000000 );
            var idbottomRight = stringIDToTypeID( "bottomRight" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1206.putUnitDouble( idbottomRight, idPxl, 0.000000 );
        var idRctn = charIDToTypeID( "Rctn" );
        desc1203.putObject( idShp, idRctn, desc1206 );
        var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
            var desc1207 = new ActionDescriptor();
            var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" );
            desc1207.putInteger( idstrokeStyleVersion, 2 );
            var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" );
            desc1207.putBoolean( idstrokeEnabled, false );
            var idfillEnabled = stringIDToTypeID( "fillEnabled" );
            desc1207.putBoolean( idfillEnabled, true );
            var idstrokeStyleLineWidth = stringIDToTypeID( "strokeStyleLineWidth" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc1207.putUnitDouble( idstrokeStyleLineWidth, idPxl, 2.000000 );
            var idstrokeStyleLineDashOffset = stringIDToTypeID( "strokeStyleLineDashOffset" );
            var idPnt = charIDToTypeID( "#Pnt" );
            desc1207.putUnitDouble( idstrokeStyleLineDashOffset, idPnt, 0.000000 );
            var idstrokeStyleMiterLimit = stringIDToTypeID( "strokeStyleMiterLimit" );
            desc1207.putDouble( idstrokeStyleMiterLimit, 100.000000 );
            var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
            var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
            var idstrokeStyleButtCap = stringIDToTypeID( "strokeStyleButtCap" );
            desc1207.putEnumerated( idstrokeStyleLineCapType, idstrokeStyleLineCapType, idstrokeStyleButtCap );
            var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
            var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
            var idstrokeStyleMiterJoin = stringIDToTypeID( "strokeStyleMiterJoin" );
            desc1207.putEnumerated( idstrokeStyleLineJoinType, idstrokeStyleLineJoinType, idstrokeStyleMiterJoin );
            var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
            var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
            var idstrokeStyleAlignInside = stringIDToTypeID( "strokeStyleAlignInside" );
            desc1207.putEnumerated( idstrokeStyleLineAlignment, idstrokeStyleLineAlignment, idstrokeStyleAlignInside );
            var idstrokeStyleScaleLock = stringIDToTypeID( "strokeStyleScaleLock" );
            desc1207.putBoolean( idstrokeStyleScaleLock, false );
            var idstrokeStyleStrokeAdjust = stringIDToTypeID( "strokeStyleStrokeAdjust" );
            desc1207.putBoolean( idstrokeStyleStrokeAdjust, false );
            var idstrokeStyleLineDashSet = stringIDToTypeID( "strokeStyleLineDashSet" );
                var list175 = new ActionList();
            desc1207.putList( idstrokeStyleLineDashSet, list175 );
            var idstrokeStyleBlendMode = stringIDToTypeID( "strokeStyleBlendMode" );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idNrml = charIDToTypeID( "Nrml" );
            desc1207.putEnumerated( idstrokeStyleBlendMode, idBlnM, idNrml );
            var idstrokeStyleOpacity = stringIDToTypeID( "strokeStyleOpacity" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc1207.putUnitDouble( idstrokeStyleOpacity, idPrc, 100.000000 );
            var idstrokeStyleContent = stringIDToTypeID( "strokeStyleContent" );
                var desc1208 = new ActionDescriptor();
                var idClr = charIDToTypeID( "Clr " );
                    var desc1209 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc1209.putDouble( idRd, 255.000000 );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc1209.putDouble( idGrn, 255.000000 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc1209.putDouble( idBl, 255.000000 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc1208.putObject( idClr, idRGBC, desc1209 );
            var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
            desc1207.putObject( idstrokeStyleContent, idsolidColorLayer, desc1208 );
            var idstrokeStyleResolution = stringIDToTypeID( "strokeStyleResolution" );
            desc1207.putDouble( idstrokeStyleResolution, 72.000000 );
        var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
        desc1203.putObject( idstrokeStyle, idstrokeStyle, desc1207 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc1202.putObject( idUsng, idcontentLayer, desc1203 );
    var idLyrI = charIDToTypeID( "LyrI" );
    desc1202.putInteger( idLyrI, 8 );
executeAction( idMk, desc1202, DialogModes.NO );
"""

// conversion of AM Code string into Humanizer code string
// if you want wait a bit longer, you can add code indentation. 4 = number of spaces
var resultCode = Humanizer.amCodeToHumanizedCode(code,4);

// show result string in Extend Script Toolkit console. Just for copy/paste purpose
$.writeln(resultCode);

// execute Humanized code string. Just demonstration that it works.
eval(resultCode)
```
 
### And here is how our output looks like:
```javascript
Humanizer.playObject('make',descriptor,DialogModes.NO );
Result: [object Object]
var descriptor = {
    "_obj": "object",
    "layerID": 8,
    "null": {
        "_ref": "contentLayer"
    },
    "using": {
        "_obj": "contentLayer",
        "shape": {
            "_obj": "rectangle",
            "bottom": {
                "_unit": "pixelsUnit",
                "_value": 53
            },
            "bottomLeft": {
                "_unit": "pixelsUnit",
                "_value": 0
            },
            "bottomRight": {
                "_unit": "pixelsUnit",
                "_value": 0
            },
            "left": {
                "_unit": "pixelsUnit",
                "_value": 16
            },
            "right": {
                "_unit": "pixelsUnit",
                "_value": 73
            },
            "top": {
                "_unit": "pixelsUnit",
                "_value": 14
            },
            "topLeft": {
                "_unit": "pixelsUnit",
                "_value": 0
            },
            "topRight": {
                "_unit": "pixelsUnit",
                "_value": 0
            },
            "unitValueQuadVersion": 1
        },
        "strokeStyle": {
            "_obj": "strokeStyle",
            "fillEnabled": true,
            "strokeEnabled": false,
            "strokeStyleBlendMode": {
                "_enum": "blendMode",
                "_value": "normal"
            },
            "strokeStyleContent": {
                "_obj": "solidColorLayer",
                "color": {
                    "_obj": "RGBColor",
                    "blue": 255,
                    "grain": 255,
                    "red": 255
                }
            },
            "strokeStyleLineAlignment": {
                "_enum": "strokeStyleLineAlignment",
                "_value": "strokeStyleAlignInside"
            },
            "strokeStyleLineCapType": {
                "_enum": "strokeStyleLineCapType",
                "_value": "strokeStyleButtCap"
            },
            "strokeStyleLineDashOffset": {
                "_unit": "pointsUnit",
                "_value": 0
            },
            "strokeStyleLineDashSet": [
                
            ],
            "strokeStyleLineJoinType": {
                "_enum": "strokeStyleLineJoinType",
                "_value": "strokeStyleMiterJoin"
            },
            "strokeStyleLineWidth": {
                "_unit": "pixelsUnit",
                "_value": 2
            },
            "strokeStyleMiterLimit": 100,
            "strokeStyleOpacity": {
                "_unit": "percentUnit",
                "_value": 100
            },
            "strokeStyleResolution": 72,
            "strokeStyleScaleLock": false,
            "strokeStyleStrokeAdjust": false,
            "strokeStyleVersion": 2
        },
        "type": {
            "_obj": "solidColorLayer",
            "color": {
                "_obj": "RGBColor",
                "blue": 21.649806,
                "grain": 21.649806,
                "red": 240.000001
            }
        }
    }
};
Humanizer.playObject('make',descriptor,DialogModes.NO );
```

## Another Example for randomize text color
```javascript
#include Humanizer.jsx

// first we load selected textLayer ActionDescriptor
var ref2 = new ActionReference();

// we care only about textKey property, we don't need more and it's better for performance
ref2.putProperty(stringIDToTypeID('property'), stringIDToTypeID('textKey'));

// we want only selected layer
ref2.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );

// so we know what we want and now it's time to get it
var desc = executeActionGet(ref2);  

// here we want demystify descriptor
var textKey = Humanizer.descriptorToObject(desc).textKey;

// get color property of first style range
// at this point we can simply read and change values same way as in normal JS object!
var color = textKey.textStyleRange[0].textStyle.color;									

// randomize color channels
	color.red = Math.floor(Math.random() * 255);  	
	color.grain = Math.floor(Math.random() * 255);  // adobe did mistake. grain = green
	color.blue = Math.floor(Math.random() * 255);
									
// convert back to occult mystery ActionDescriptor									
var textDesc = Humanizer.objectToDescriptor(textKey)[1];

// we put our descriptor into this descriptor. This container will have additional data about our target
var descSetD = new ActionDescriptor();

var ref = new ActionReference();

// we want change selected text layer... that's our target
ref.putEnumerated( charIDToTypeID( "TxLr" ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );

// here we adding reference into actionDescriptor container... executeAction doesn't like pure reference
descSetD.putReference( charIDToTypeID( "null" ), ref );

// here we define for which property we want set descriptor
descSetD.putObject( charIDToTypeID( "T   " ), charIDToTypeID( "TxLr" ), textDesc ); // <- here is our magic modified descriptor

// action name is set descriptor and second parameter contains how and where
executeAction( charIDToTypeID( "setd" ), descSetD, DialogModes.NO );
```

## Known issues
- "_path" on Windows should have four backslashes "\\\\"
- "_path" on Mac should have single forwardslash "/"
- "_path" on Mac in Photoshop CC 2015.5 doesn't even works
