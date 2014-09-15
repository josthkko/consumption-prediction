require("sunrise.min.js")
//eval(breakpoint)
var sunangles = require("sunangle.js")
var vis = require('visualization.js');
var analytics = require('analytics');

//---------------------------------------------- stream aggregate for a week --------------------------------------
function getCurrentAgg() {    
    var res = Training.getStreamAggr("weekAgg");
    console.log(JSON.stringify(res));
    return res;
}
function sumArray(arr1, arr2) {
    var newArr = [];
    if(arr1.length == arr2.length){
        for(var i = 0; i < arr1.length; i++){
            newArr.push(arr1[i] + arr2[i]);
        }
    }
    else
        newArr = arr2;
    return newArr
}
//divide every element by number
function divArray(arr, num) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] / num);
    }
    return newArr
}
//calculatge avg of array
function avgOfArray(arr){
    var len = arr.length
    var Sum = 0
    for(var l = 0; l < len; l++){
        Sum += arr[l]
    } 
    return Sum/len
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

/*
console.start()
*/
function normalize(ftrVec, divideBy, min){
    min = typeof min !== 'undefined' ? min : 0;
    if(divideBy instanceof Array){
        for(var n = 0; n < ftrVec.length; n++){
            //ftrVec[n] = ftrVec[n] / divideBy[n];
            ftrVec[n] = ((ftrVec[n] - min) / (divideBy[n] - min) - 0.5) * 2;
        }     
    }
    else{
        for(var n = 0; n < ftrVec.length; n++){
            //ftrVec[n] = ftrVec[n] / divideBy;
            ftrVec[n] = ((ftrVec[n] - min ) / (divideBy - min) - 0.5) * 2;
        }       
    }
    return ftrVec;
}
function denormalize(ftrVec, multBy, min){
    min = typeof min !== 'undefined' ? min : 0;
    if(multBy instanceof Array){
        for(var n = 0; n < ftrVec.length; n++){
            ftrVec[n] = (ftrVec[n] / 2 + 0.5 ) * (multBy[n] - min) + min;
        }     
    }
    else{
        for(var n = 0; n < ftrVec.length; n++){
            ftrVec[n] = (ftrVec[n] / 2 + 0.5 ) * (multBy - min) + min;
        }       
    }
    return ftrVec;
}

function get_ordered_randomv(min, max, n){
    var array = new Array()
    for(i  = min; i <= max; i++){
        array.push(i);
    }
    array = shuffleArray(array);
    array = array.slice(0,n);
    array.sort();

    return array
}

/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//console.start()
http.onGet("data", function (req, resp) {
    printj(req)
    return http.jsonp(req, resp, "viz.highchartsTSConverter(buffer)");
})

//---------------------------------------------------------------------------------------------------------------- CONSUMPTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var consMeas = qm.store("ConsMeasAvg")
console.log("##############################")
var FS1 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"}
]);
var FS2 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n4"}
]);
var FS3 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n4"},
    {type:"numeric", source: "ConsMeasAvg", field:"n5"}
]);
var FS4 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n6"},
    {type:"numeric", source: "ConsMeasAvg", field:"n7"},
    {type:"numeric", source: "ConsMeasAvg", field:"n8"},
    {type:"numeric", source: "ConsMeasAvg", field:"n9"},
    {type:"numeric", source: "ConsMeasAvg", field:"n10"},
    {type:"numeric", source: "ConsMeasAvg", field:"n11"},
    {type:"numeric", source: "ConsMeasAvg", field:"n12"}
]);
var FS5 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n4"},
    {type:"numeric", source: "ConsMeasAvg", field:"n13"},
    {type:"numeric", source: "ConsMeasAvg", field:"n14"},
    {type:"numeric", source: "ConsMeasAvg", field:"n15"},
    {type:"numeric", source: "ConsMeasAvg", field:"n16"},
    {type:"numeric", source: "ConsMeasAvg", field:"n17"},
    {type:"numeric", source: "ConsMeasAvg", field:"n18"},
    {type:"numeric", source: "ConsMeasAvg", field:"n19"},
    {type:"numeric", source: "ConsMeasAvg", field:"n20"},
    {type:"numeric", source: "ConsMeasAvg", field:"n21"},
    {type:"numeric", source: "ConsMeasAvg", field:"n22"},
    {type:"numeric", source: "ConsMeasAvg", field:"n23"},
    {type:"numeric", source: "ConsMeasAvg", field:"n24"}
]);
var FS6 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n4"},
    {type:"numeric", source: "ConsMeasAvg", field:"n5"},
    {type:"numeric", source: "ConsMeasAvg", field:"n13"},
    {type:"numeric", source: "ConsMeasAvg", field:"n14"},
    {type:"numeric", source: "ConsMeasAvg", field:"n15"},
    {type:"numeric", source: "ConsMeasAvg", field:"n16"},
    {type:"numeric", source: "ConsMeasAvg", field:"n17"},
    {type:"numeric", source: "ConsMeasAvg", field:"n18"},
    {type:"numeric", source: "ConsMeasAvg", field:"n19"},
    {type:"numeric", source: "ConsMeasAvg", field:"n20"},
    {type:"numeric", source: "ConsMeasAvg", field:"n21"},
    {type:"numeric", source: "ConsMeasAvg", field:"n22"},
    {type:"numeric", source: "ConsMeasAvg", field:"n23"},
    {type:"numeric", source: "ConsMeasAvg", field:"n24"}
]);
var FS7 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n6"},
    {type:"numeric", source: "ConsMeasAvg", field:"n7"},
    {type:"numeric", source: "ConsMeasAvg", field:"n8"},
    {type:"numeric", source: "ConsMeasAvg", field:"n9"},
    {type:"numeric", source: "ConsMeasAvg", field:"n10"},
    {type:"numeric", source: "ConsMeasAvg", field:"n11"},
    {type:"numeric", source: "ConsMeasAvg", field:"n12"},
    {type:"numeric", source: "ConsMeasAvg", field:"n13"},
    {type:"numeric", source: "ConsMeasAvg", field:"n14"},
    {type:"numeric", source: "ConsMeasAvg", field:"n15"},
    {type:"numeric", source: "ConsMeasAvg", field:"n16"},
    {type:"numeric", source: "ConsMeasAvg", field:"n17"},
    {type:"numeric", source: "ConsMeasAvg", field:"n18"},
    {type:"numeric", source: "ConsMeasAvg", field:"n19"},
    {type:"numeric", source: "ConsMeasAvg", field:"n20"},
    {type:"numeric", source: "ConsMeasAvg", field:"n21"},
    {type:"numeric", source: "ConsMeasAvg", field:"n22"},
    {type:"numeric", source: "ConsMeasAvg", field:"n23"},
    {type:"numeric", source: "ConsMeasAvg", field:"n24"}
]);
var FS8 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n4"},
    {type:"numeric", source: "ConsMeasAvg", field:"n25"}
]);
var FS9 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n4"},
    {type:"numeric", source: "ConsMeasAvg", field:"n5"},
    {type:"numeric", source: "ConsMeasAvg", field:"n25"}
]);
var FS10 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n6"},
    {type:"numeric", source: "ConsMeasAvg", field:"n7"},
    {type:"numeric", source: "ConsMeasAvg", field:"n8"},
    {type:"numeric", source: "ConsMeasAvg", field:"n9"},
    {type:"numeric", source: "ConsMeasAvg", field:"n10"},
    {type:"numeric", source: "ConsMeasAvg", field:"n11"},
    {type:"numeric", source: "ConsMeasAvg", field:"n12"},
    {type:"numeric", source: "ConsMeasAvg", field:"n25"}
]);
var FS11 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n4"},
    {type:"numeric", source: "ConsMeasAvg", field:"n26"},
    {type:"numeric", source: "ConsMeasAvg", field:"n27"},
    {type:"numeric", source: "ConsMeasAvg", field:"n28"},
    {type:"numeric", source: "ConsMeasAvg", field:"n29"}
]);
var FS12 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n4"},
    {type:"numeric", source: "ConsMeasAvg", field:"n5"},
    {type:"numeric", source: "ConsMeasAvg", field:"n26"},
    {type:"numeric", source: "ConsMeasAvg", field:"n27"},
    {type:"numeric", source: "ConsMeasAvg", field:"n28"},
    {type:"numeric", source: "ConsMeasAvg", field:"n29"}
]);
var FS13 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n6"},
    {type:"numeric", source: "ConsMeasAvg", field:"n7"},
    {type:"numeric", source: "ConsMeasAvg", field:"n8"},
    {type:"numeric", source: "ConsMeasAvg", field:"n9"},
    {type:"numeric", source: "ConsMeasAvg", field:"n10"},
    {type:"numeric", source: "ConsMeasAvg", field:"n11"},
    {type:"numeric", source: "ConsMeasAvg", field:"n12"},
    {type:"numeric", source: "ConsMeasAvg", field:"n26"},
    {type:"numeric", source: "ConsMeasAvg", field:"n27"},
    {type:"numeric", source: "ConsMeasAvg", field:"n28"},
    {type:"numeric", source: "ConsMeasAvg", field:"n29"}
]);
var FS14 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n13"},
    {type:"numeric", source: "ConsMeasAvg", field:"n14"},
    {type:"numeric", source: "ConsMeasAvg", field:"n15"},
    {type:"numeric", source: "ConsMeasAvg", field:"n16"},
    {type:"numeric", source: "ConsMeasAvg", field:"n17"},
    {type:"numeric", source: "ConsMeasAvg", field:"n18"},
    {type:"numeric", source: "ConsMeasAvg", field:"n19"},
    {type:"numeric", source: "ConsMeasAvg", field:"n20"},
    {type:"numeric", source: "ConsMeasAvg", field:"n21"},
    {type:"numeric", source: "ConsMeasAvg", field:"n22"},
    {type:"numeric", source: "ConsMeasAvg", field:"n23"},
    {type:"numeric", source: "ConsMeasAvg", field:"n24"}
]);
var FS15 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n25"}
]);
var FS16 = analytics.newFeatureSpace([
    {type:"numeric", source: "ConsMeasAvg", field:"crnt"},
    {type:"numeric", source: "ConsMeasAvg", field:"n26"},
    {type:"numeric", source: "ConsMeasAvg", field:"n27"},
    {type:"numeric", source: "ConsMeasAvg", field:"n28"},
    {type:"numeric", source: "ConsMeasAvg", field:"n29"}
]);

var FSVec = [
    FS1,
    FS2,
    FS3,
    FS4,
    FS5,
    FS6,
    FS7,
    FS8,
    FS9,
    FS10,
    FS11,
    FS12,
    FS13,
    FS14,
    FS15,
    FS16
]

var cLearnRate = 0.01
var cMomentum = 0.06

var NNs = [
        analytics.newNN({"layout": [FSVec[0].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[1].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[2].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[3].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[4].dim, 9,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[5].dim, 9,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[6].dim, 9,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[7].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[8].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[9].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[10].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[11].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[12].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[13].dim, 9,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[14].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum}),
        analytics.newNN({"layout": [FSVec[15].dim, 3,1], "tFuncHidden":"tanHyper", "tFuncOut":"linear", "learnRate":cLearnRate, "momentum":cMomentum})
    ]

dims = NNs.length

consCount = 0
aeSum = Array.apply(null, new Array(dims)).map(Number.prototype.valueOf,0);
seSum = Array.apply(null, new Array(dims)).map(Number.prototype.valueOf,0);
mae = Array(dims)
mse = Array(dims)
inVec = Array(dims)
predVec = Array(dims)
oldVec = Array(dims)
ae = Array(dims)
se = Array(dims)
consMeas.addTrigger({
    onAdd: function (val) {
        for ( var i = 0 ; i < FSVec.length ; i++ ){
            inVec[i] = normalize(FSVec[i].ftrVec(val), 6)
            predVec[i] = NNs[i].predict(inVec[i])

            if (val.$id > 5) {
                pastMeas = consMeas[val.$id - 6]
                oldVec[i] = normalize(FSVec[i].ftrVec(pastMeas), 6)
                NNs[i].learn(oldVec[i], inVec[i])
            }
            
            ae[i] = Math.abs(predVec[i][0] - val.crnt6ahead)
            se[i] = Math.pow(ae[i] , 2)
            
            if (val.$id > 5000) {
                consCount++
                aeSum[i] += ae[i]
                seSum[i] += se[i]
                mae[i] = aeSum[i]/consCount
                mse[i] = seSum[i]/consCount
                //eval(breakpoint)
            }else{
                mae[i] = 0
                mse[i] = 0
            }
        }
        
        consMeas.add({ 
            $id: val.$id, 
            crnt_pred1: predVec[0][0], 
            crnt_pred2: predVec[1][0], 
            crnt_pred3: predVec[2][0], 
            crnt_pred4: predVec[3][0], 
            crnt_pred5: predVec[4][0], 
            crnt_pred6: predVec[5][0], 
            crnt_pred7: predVec[6][0], 
            crnt_pred8: predVec[7][0], 
            crnt_pred9: predVec[8][0], 
            crnt_pred10: predVec[9][0], 
            crnt_pred11: predVec[10][0], 
            crnt_pred12: predVec[11][0], 
            crnt_pred13: predVec[12][0], 
            crnt_pred14: predVec[13][0], 
            crnt_pred15: predVec[14][0], 
            crnt_pred16: predVec[15][0], 
            mae1: mae[0],
            mae2: mae[1],
            mae3: mae[2],
            mae4: mae[3],
            mae5: mae[4],
            mae6: mae[5],
            mae7: mae[6],
            mae8: mae[7],
            mae9: mae[8],
            mae10: mae[9],
            mae11: mae[10],
            mae12: mae[11],
            mae13: mae[12],
            mae14: mae[13],
            mae15: mae[14],
            mae16: mae[15],
            mse1: mse[0],
            mse2: mse[1],
            mse3: mse[2],
            mse4: mse[3],
            mse5: mse[4],
            mse6: mse[5],
            mse7: mse[6],
            mse8: mse[7],
            mse9: mse[8],
            mse10: mse[9],
            mse11: mse[10],
            mse12: mse[11],
            mse13: mse[12],
            mse14: mse[13],
            mse15: mse[14],
            mse16: mse[15]
        });
    }
});

qm.load.jsonFile(consMeas, "sandbox/input.json");

data = consMeas.tail(200)
var fields = [
    consMeas.field("mse1"),
    consMeas.field("mse2"),
    consMeas.field("mse3"),
    consMeas.field("mse4"),
    consMeas.field("mse5"),
    consMeas.field("mse6"),
    consMeas.field("mse7"),
    consMeas.field("mse8"),
    consMeas.field("mse9"),
    consMeas.field("mse10"),
    consMeas.field("mse11"),
    consMeas.field("mse12"),
    consMeas.field("mse13"),
    consMeas.field("mse14"),
    consMeas.field("mse15"),
    consMeas.field("mse16")
]
objJson = vis.highchartsConverter(fields, data.toJSON());
//console.log(JSON.stringify(objJson));

vis.drawHighChartsTimeSeries(objJson, "./chart.html", { title: { text: "Testing testing.." }, chart: { type: 'spline', zoomType: 'x' }, });
console.log("&&& --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("&&& " + JSON.stringify(consMeas.tail(1)));
eval(breakpoint)