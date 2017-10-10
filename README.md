# ActionManagerHumanizer
This tool will reveal for you occult mystery of Photoshop ActionDescriptors and will transform them into well known JSON strings and JS objects. You can change regular JS object as normal humans usually do and then transform it into ActionDescriptor with whom only masters are familiar

## Example
```javascript
#include Humanizer-0.1.jsx

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
