// const net = new brain.NeuralNetwork({hiddenLayers: [3] });

// const trainingData = [
// 	{input:[0,0], output: [0]},
// 	{input:[0,1], output: [1]},
// 	{input:[1,0], output: [1]},
// 	{input:[1,1], output: [0]},
// ];

// net.train(trainingData, {
// 	log : error => console.log(error),
// 	logPeriod:100
// });

// console.log(net.run([0,0]));

//============================================
// input & outputs
(inputs) => outputs;

// random.values
Math.random();

// activation "relu"
function relu(value){
	return value < 0 ? 0 : value;
}

// bonus material 
// https://en.wikipedia.org/wiki/Activation_function
/*
https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L227
https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L527
*/


// input: { red, green, blue }
// ouput: { light, neutral, dark }

const colors = [
    { green: 0.2, blue: 0.4 },
    { green: 0.4, blue: 0.6 },
    { red: 0.2, green: 0.8, blue: 0.8 },
    { green: 1, blue: 1 },
    { red: 0.8, green: 1, blue: 1 },
    { red: 1, green: 1, blue: 1 },
    { red: 1, green: 0.8, blue: 0.8 },
    { red: 1, green: 0.6, blue: 0.6 },
    { red: 1, green: 0.4, blue: 0.4 },
    { red: 1, green: 0.31, blue: 0.31 },
    { red: 0.8 },
    { red: 0.6, green: 0.2, blue: 0.2 }
];

const brightnesses = [
    { dark: 0.8 },
    { neutral: 0.8 },
    { light: 0.7 },
    { light: 0.8 },
    { light: 0.9 },
    { light: 1 },
    { light: 0.8 },
    { neutral: 0.7, light: 0.5 },
    { dark: 0.5, neutral: 0.5 },
    { dark: 0.6, neutral: 0.3 },
    { dark: 0.85 },
    { dark: 0.9 }
];

const trainingData = [];

for (let i = 0; i < colors.length; i++) {
    trainingData.push({
        input: colors[i],
        output: brightnesses[i]
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({
    red: 0.9
}));

// bonus

// input: { light, neutral, dark }
// output: { red, green, blue }

const invertedTrainingData = [];

for (let i = 0; i < colors.length; i++) {
    invertedTrainingData.push({
        input: brightnesses[i],
        output: colors[i]
    });
}

const invertedNet = new brain.NeuralNetwork({ hiddenLayers: [3] });

const invertedStats = invertedNet.train(invertedTrainingData);

console.log(invertedStats);

console.log(invertedNet.run({
	dark:0.8,
    neutral: 0.7, 
    light: 0.5
}));

// ======================= RESTAURANT
const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2 }

const trainingData1 = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData1.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
    });
}

const net1 = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats1 = net1.train(trainingData1);

console.log(stats1);

console.log(net1.run({ 'Monday': 1 }));

function restaurantForDay(dayOfWeek) {
    const result = net1.run({ [dayOfWeek]: 1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for (let restuarantName in result) {
        if (result[restuarantName] > highestValue) {
            highestValue = result[restuarantName];
            highestRestaurantName = restuarantName;
        }
    }
    
    return highestRestaurantName;
}

console.log(restaurantForDay('Monday'));
console.log(restaurantForDay('Tuesday'));
console.log(restaurantForDay('Wednesday'));
console.log(restaurantForDay('Thursday'));
console.log(restaurantForDay('Friday'));
console.log(restaurantForDay('Saturday'));
console.log(restaurantForDay('Sunday'));

// bonus 

// ============ COUNTING 
// Count to 5
// 1-5, 5-1

const trainingData2 = [
    [1,2,3,4,5],
    [5,4,3,2,1]
];

const net2 = new brain.recurrent.LSTMTimeStep();

net2.train(trainingData2);

console.log(net2.run([1,2,3,4]));
console.log(net2.run([5,4,3,2]));

// bonus 10-5, 5-10

// ====================== Normalization in neural network on stock market
const rawData = [{"date":"2018-11-02","open":141.0716,"high":141.1014,"low":138.7762,"close":139.7898,"volume":7673303,"unadjustedVolume":7673303,"change":-0.139114,"changePercent":-0.099,"vwap":139.5278,"label":"Nov 2","changeOverTime":0},{"date":"2018-11-05","open":140.1078,"high":141.8367,"low":138.1204,"close":141.3002,"volume":5601398,"unadjustedVolume":5601398,"change":1.5104,"changePercent":1.08,"vwap":141.2547,"label":"Nov 5","changeOverTime":0.010804794055073943},{"date":"2018-11-06","open":140.6344,"high":141.9262,"low":140.1674,"close":141.6678,"volume":5798915,"unadjustedVolume":5798915,"change":0.367659,"changePercent":0.26,"vwap":141.4935,"label":"Nov 6","changeOverTime":0.013434456591253337},{"date":"2018-11-07","open":142.1945,"high":143.9567,"low":142.0653,"close":143.834,"volume":7173590,"unadjustedVolume":7173590,"change":2.1662,"changePercent":1.529,"vwap":143.4709,"label":"Nov 7","changeOverTime":0.0289305800566278},{"date":"2018-11-08","open":143.3968,"high":144.8695,"low":143.0888,"close":144.3805,"volume":5497130,"unadjustedVolume":5497130,"change":0.54652,"changePercent":0.38,"vwap":144.2387,"label":"Nov 8","changeOverTime":0.03284002123187813},{"date":"2018-11-09","open":144.1222,"high":144.8178,"low":143.4664,"close":144.4203,"volume":5343206,"unadjustedVolume":5343206,"change":0.039746,"changePercent":0.028,"vwap":144.4139,"label":"Nov 9","changeOverTime":0.03312473442268308},{"date":"2018-11-12","open":144.0725,"high":145.3146,"low":143.8141,"close":144.6985,"volume":7013577,"unadjustedVolume":7013577,"change":0.278229,"changePercent":0.193,"vwap":144.6873,"label":"Nov 12","changeOverTime":0.03511486531921486},{"date":"2018-11-13","open":145.2649,"high":145.8214,"low":142.5124,"close":143.7645,"volume":7432438,"unadjustedVolume":7432438,"change":-0.934052,"changePercent":-0.646,"vwap":143.9306,"label":"Nov 13","changeOverTime":0.028433405012382763},{"date":"2018-11-14","open":144.1023,"high":144.3905,"low":142.6516,"close":143.3372,"volume":6433077,"unadjustedVolume":6433077,"change":-0.427279,"changePercent":-0.297,"vwap":143.4752,"label":"Nov 14","changeOverTime":0.025376672689995848},{"date":"2018-11-15","open":142.5025,"high":143.5955,"low":141.5784,"close":143.5856,"volume":6658019,"unadjustedVolume":6658019,"change":0.248418,"changePercent":0.173,"vwap":142.7533,"label":"Nov 15","changeOverTime":0.027153626373311823},{"date":"2018-11-16","open":143.7943,"high":145.8114,"low":143.6353,"close":145.0662,"volume":8494311,"unadjustedVolume":8494311,"change":1.4806,"changePercent":1.031,"vwap":144.8256,"label":"Nov 16","changeOverTime":0.03774524321517017},{"date":"2018-11-19","open":145.5034,"high":147.5007,"low":145.4438,"close":146.7952,"volume":8714603,"unadjustedVolume":8714603,"change":1.729,"changePercent":1.192,"vwap":146.6115,"label":"Nov 19","changeOverTime":0.050113813740344286},{"date":"2018-11-20","open":146.5666,"high":147.8087,"low":145.4239,"close":145.5233,"volume":8937990,"unadjustedVolume":8937990,"change":-1.2719,"changePercent":-0.866,"vwap":146.2531,"label":"Nov 20","changeOverTime":0.04101515275077289},{"date":"2018-11-21","open":145.3047,"high":145.3047,"low":139.8891,"close":141.0915,"volume":10275810,"unadjustedVolume":10275810,"change":-4.4318,"changePercent":-3.045,"vwap":141.4162,"label":"Nov 21","changeOverTime":0.009311838202787201},{"date":"2018-11-23","open":140.9524,"high":141.8268,"low":140.704,"close":141.33,"volume":3404882,"unadjustedVolume":3404882,"change":0.238482,"changePercent":0.169,"vwap":141.3418,"label":"Nov 23","changeOverTime":0.01101797126828995},{"date":"2018-11-26","open":142,"high":142.05,"low":140.715,"close":141.37,"volume":7590941,"unadjustedVolume":7590941,"change":0.040031,"changePercent":0.028,"vwap":141.16,"label":"Nov 26","changeOverTime":0.01130411517864673},{"date":"2018-11-27","open":140.57,"high":143.35,"low":139.66,"close":143.22,"volume":5962112,"unadjustedVolume":5962112,"change":1.85,"changePercent":1.309,"vwap":141.5703,"label":"Nov 27","changeOverTime":0.02453827103265034},{"date":"2018-11-28","open":143.83,"high":146.56,"low":143.36,"close":146.44,"volume":8411383,"unadjustedVolume":8411383,"change":3.22,"changePercent":2.248,"vwap":145.5168,"label":"Nov 28","changeOverTime":0.04757285581637561},{"date":"2018-11-29","open":145.62,"high":147.2,"low":144.84,"close":145.85,"volume":6900046,"unadjustedVolume":6900046,"change":-0.59,"changePercent":-0.403,"vwap":146.1078,"label":"Nov 29","changeOverTime":0.04335223313861226},{"date":"2018-11-30","open":145.34,"high":147,"low":145.1,"close":146.9,"volume":12517550,"unadjustedVolume":12517550,"change":1.05,"changePercent":0.72,"vwap":146.2548,"label":"Nov 30","changeOverTime":0.05086351078547928}];
// rawData = [{ open: number, high: number, low: number, close: number }]

function scaleDown(step) { // normalize
    return {
        open: step.open / 138,
        high: step.high / 138,
        low: step.low / 138,
        close: step.close / 138
    };
}

console.log(scaleDown(rawData[0]));

// de-normalizing
function scaleUp(step) { // denormalize
    return {
         open: step.open * 138,
        high: step.high * 138,
        low: step.low * 138,
        close: step.close * 138
    };
}

console.log(scaleUp(scaleDown(rawData[0])));

// bonus 
// open: (step.open - lowest) / (highest - lowest),
// open: (140 - 138) / (147 - 138)
// actually equals:
// 140 - 138 = 2
// 147 - 138 = 9
// 2 / 9 = 0.22222222

const scaledData = rawData.map(scaleDown);

const trainingData3 = [
    scaledData.slice(0, 5),
    scaledData.slice(5, 10),
    scaledData.slice(10, 15),
    scaledData.slice(15, 20),
];

const net3 = new brain.recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4
});

net3.train(trainingData3, {
    learningRate: 0.005,
    errorThresh: 0.02,
    // log: (stats) => console.log(stats)
});

// console.log("Data scaleup stock market :"+scaleUp(net3.run(trainingData3[0])));
console.log(net3.forecast([
		trainingData3[0][0],
		trainingData3[0][1]
	],3).map(scaleUp));


// ================= Recurrent that learns math

const trainingData4 = [
    '0+0=0',
    '0+1=1',
    '0+2=2',
    '0+3=3',
    '0+4=4',
    '0+5=5',

    '1+0=1',
    '1+1=2',
    '1+2=3',
    '1+3=4',
    '1+4=5',
    '1+5=6',

    '2+0=2',
    '2+1=3',
    '2+2=4',
    '2+3=5',
    '2+4=6',
    '2+5=7',

    '3+0=3',
    '3+1=4',
    '3+2=5',
    '3+3=6',
    '3+4=7',
    '3+5=8',

    '4+0=4',
    '4+1=5',
    '4+2=6',
    '4+3=7',
    '4+4=8',
    '4+5=9',

    '5+0=5',
    '5+1=6',
    '5+2=7',
    '5+3=8',
    '5+4=9',
    '5+5=10',
];

// const inputMap = ['0', '+', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// inputMap.length === inputSize
// [1,0,0,0,0,0,0,0,0,0,0,0];
// [0,1,0,0,0,0,0,0,0,0,0,0];
// [1,0,0,0,0,0,0,0,0,0,0,0];
// [0,0,1,0,0,0,0,0,0,0,0,0];
// [1,0,0,0,0,0,0,0,0,0,0,0];

const net4 = new brain.recurrent.LSTM({hiddenLayers:[20] });

net4.train(trainingData4,{
	errorThresh:0.025
	// log:stats => console.log(stats)
});

console.log(net4.run('0+1='));
console.log(net4.run('4+1='));
console.log(net4.run('2+1='));

// bonus light it up with some math problems!

// rawData = ' # ';

// rawData = ' # ';

function toArray(string) { // normalize 
    if (string.length !== 7 * 7) throw new Error('string in wrong size');
    return string.split('').map(toNumber);
}
function toNumber(character) {
    return character === '#' ? 1 : 0;
}

const zero = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#######'
);
const one = toArray(
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   '
);
const two = toArray(
    '#######' +
    '#     #' +
    '      #' +
    '     # ' +
    '   #   ' +
    ' #     ' +
    '#######'
);
  const three = toArray(
    '#######' +
    '      #' +
    '      #' +
    ' ######' +
    '      #' +
    '      #' +
    '#######'
);
const four = toArray(
    '#     #' +
    '#     #' +
    '#     #' +
    '#######' +
    '      #' +
    '      #' +
    '      #'
);
const five = toArray(
    '#######' +
    '#      ' +
    '#      ' +
    '#######' +
    '      #' +
    '      #' +
    '#######'
);
const six = toArray(
    '      #' +
    '    #  ' +
    '  #    ' +
    ' ######' +
    '#     #' +
    '#     #' +
    '#######'
);
const seven = toArray(
    '#######' +
    '     # ' +
    '    #  ' +
    '   #   ' +
    '  #    ' +
    ' #     ' +
    '#      '
);
const eight = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#######' +
    '#     #' +
    '#     #' +
    '#######'
);
const nine = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '###### ' +
    '    #  ' +
    '   #   ' +
    ' #     '
);

// console.log(nine);
const net5 = new brain.NeuralNetwork();
const trainingData5 = [
 	{ input: zero, output: { zero: 1 } },
    { input: one, output: { one: 1 } },
    { input: two, output: { two: 1 } },
    { input: three, output: { three: 1 } },
    { input: four, output: { four: 1 } },
    { input: five, output: { five: 1 } },
    { input: six, output: { six: 1 } },
    { input: seven, output: { seven: 1 } },
    { input: eight, output: { eight: 1 } },
    { input: nine, output: { nine: 1 } }
];

net5.train(trainingData5,{ 
	// log: (stats) => console.log(stats) 
});

// const result1 = net5.run(toArray(
//  	'#######' +
//     '#     #' +
//     '#     #' +
//     '#######' +
//     '#     #' +
//     '#     #' +
//     '#######' 
// ));

const result1 = brain.likely(toArray(
	'#######' +
    '#     #' +
    '#     #' +
    '#######' +
    '#     #' +
    '#     #' +
    '#######' 
	),net5);

console.log(result1);
// bonus three examples, not like training data


// ====================== children book
const trainingData6 = [
	'Jane saw Doug.',
	'Doug saw Jane.',
	'Spot saw Doug and Jane looking at each other.',
	'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
];

const net6 = new brain.recurrent.LSTM();
net6.train(trainingData6, {
    iterations:1500,
    errorThresh:0.011,
    // log: stats => console.log(stats)
});

console.log(net6.run('Jane'));
console.log(net6.run('It was'));

// bonus experiment with book writing!

// ======================= Sentiment Detection

const trainingData7 = [
    { input: 'I am super happy!', output: 'happy' },
    { input: 'What a pill!', output: 'sarcastic' },
    { input: 'I am super unhappy!', output: 'sad' },
    { input: 'Are we there yet?', output: 'excited' }
];

const net7 = new brain.recurrent.LSTM();
net7.train(trainingData7, {
    iterations: 100,
    erroThresh: 0.011,
    // log: (stats) => console.log(stats)
});

console.log(net7.run('I am unhappy!'));
console.log(net7.run('I am happy!'));
// bonus: add five new examples in the training data, and then log out five examples that aren't in the training data

// ======================== Recurrent NN (neural networks : inputs n outputs)

const trainingData8 = [
    { input: '1', output: '2' }
];

const net8 = new brain.recurrent.LSTM();

const inputMap = ['1', 'NEW IDEA', '2'];

// [1,0,0]
// [0,1,0]
// [0,0,1]

// bonus: training data look like, if we start with input of '2', and end with output of '1'

// { input: '2', output: '1' }
// [0,0,1]
// [0,1,0]
// [1,0,0]


// ================= Simple reinforcement learning
const trainingData9 = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    // { input: [1, 0], output: [1] },
    // { input: [1, 1], output: [0] }
];


const net9 = new brain.NeuralNetwork({ hiddenLayers: [3] });

net9.train(trainingData9);

console.log('before reinforcement');
console.log(Array.from(net9.run([0, 0])));
console.log(Array.from(net9.run([1, 0])));

trainingData9.push(
    { input: [1, 0], output: [1] }
);

net9.train(trainingData9);

console.log('after reinforcement');
console.log(Array.from(net9.run([0, 0])));
console.log(Array.from(net9.run([1, 0])));

// bonus add missing item from training data

// ====================== Recommendation Engine
// color preference
const trainingData10 = [
    { input: { blue: 1 }, output: [1] },
    { input: { red: 1 }, output: [1] },
    { input: { black: 1 }, output: [0] },
    { input: { green: 1 }, output: [0] },
    { input: { brown: 1 }, output: [0] },
];

const net10 = new brain.NeuralNetwork();

net10.train(trainingData10);
console.log('before preference change');
console.log(Array.from(net10.run({ blue: 1 })));
console.log(Array.from(net10.run({ brown: 1 })));

trainingData10.pop();
trainingData10.push(
    { input: { brown: 1 }, output: [1] }
);

net10.train(trainingData10);
console.log('after preference change');
console.log(Array.from(net10.run({ blue: 1 })));
console.log(Array.from(net10.run({ brown: 1 })));

// bonus build your own recommendation engine






















