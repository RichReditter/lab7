function findFunction(x) {
  const lastName = "Kozyrev";
  const amountOfLetters = lastName.length;
  const b = Math.random() * (10 - 2) + 2;
  let func =
    Math.cos(x) +
    (1 / b) * Math.cos(amountOfLetters * x + 1) +
    (1 / b ** 2) * Math.cos(amountOfLetters ** 2 * x + 2) +
    (1 / b ** 3) * Math.cos(amountOfLetters * x + 3) +
    (1 / b ** 4) * Math.cos(amountOfLetters * x + 4);
  return func;
}
function algorithm(step, aMin, startPoint, n) {
  let result = [];
  const cMax = 0.999;
  const cMin = 0.75;
  let y;
  let y1;
  while (step > aMin) {
    let x1 = step * Math.random() + startPoint;
    y = findFunction(startPoint);
    let c = Math.random() * (cMax - cMin) + cMin;
    x1 = step * Math.random() + startPoint;
    y1 = findFunction(x1);
    step = step * c;
    n++;
    if (y > y1) {
      startPoint = x1;
      let y2 = y1;
      y2 = findFunction(x1);
      result.push(y2);
    } else {
      y1 = findFunction(x1);
      result.push(y1);
    }
  }
  return result;
}
function average(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}
function randomInteger(min, max) {
  // получить случайное число от минимума до максимума
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const a1 =
  "5.885521935954444217e+01 9.698657265929234939e+01 9.462444303749379060e+01 5.217387606244450637e+00 5.882822591541558666e+01 4.024526345174085407e+01 6.777324366950794854e+01 1.034101407126389915e+01 6.334070798008614389e+01 7.648973756190790141e+01 2.756765976041392108e+01 1.816045468336686497e+01 9.206545984966632545e+01 4.721223215910067239e+01 8.257188353199897790e+01 7.654149979907587920e+01 6.495844835271414297e+01 4.959973128159735012e+01 6.644672444703435588e+01 7.533150991757663917e+01 8.806090777958711158e+01 1.356393380368126067e+00 7.591456688292295496e+01 9.064041081645015652e+01 5.161494468319444451e+01 8.231318688116309090e+01 5.188782631351984698e+00 6.200042807698449110e+01 2.055165480206000339e+01 3.974471126705451951e+01 1.368814123862389565e+01 3.518996794727362953e+01 1.722231158944944696e+01";
const a2 =
  "8.221465200837140230e+01 8.065000598292742495e+01 7.688562154681011229e+00 4.951519232991654462e+01 7.943744208557194497e+01 2.955205995288946497e+01 4.561367910589854091e+01 2.261415395757978430e+01 1.369679122569931096e+01 8.735873769553755608e+01 7.756632473009020146e+01 6.430266227151147973e+01 4.863185367487698585e+00 9.892420037362819585e+01 5.243216196802844564e+01 9.259774616788989476e+01 1.039165159827550866e+01 6.775086085775650702e+01 1.319019082420738087e+01 6.150813857141306329e+01 3.902965866164687014e+01 8.905152983738197747e+01 6.150841321561366470e+01 4.408131295583223164e+01 9.043560849955180458e+01 8.478767543820427477e+01 4.744926528903599205e+01 9.326365476358184026e+01 7.123744697633917156e+01 4.227558184287443055e+01 3.788627874590771683e+01 5.759978945224133184e+01 3.018046621745217450e+01";
const a3 =
  "2.677651406861221162e+01 5.550154921506352679e+01 6.558861114720959051e+01 7.867190406608160913e+01 8.611182638508871889e+01 3.543679767984283302e+01 1.174327525582478060e+01 6.755574967505381778e+01 3.181185584084653684e+01 4.389802531953617404e+01 4.677435985078432878e+01 5.979042052294656173e+01 3.777928028933232696e+01 7.416619448014229476e+01 6.164498743818191961e+00 2.818565506331427528e+01 4.559265461618105775e+01 9.793588053535951587e+01 3.195862658724944083e+01 5.391618064531314758e+01 6.178747151066681198e+01 5.195274758452562480e+01 1.247915646686659219e+00 1.332798464732314336e+01 2.888698773231480743e+01 1.111470099393481092e+01 9.193581886445379325e+01 5.556901397315989755e+01 6.256503169253133478e+01 4.946085442773281216e+01 5.232770315206737166e+01 6.896122863170865003e+01 8.440790310753699544e+01";
const b =
  "1.972152820049020931e+02 8.492557863032375565e+01 1.545734338952574944e+02 3.276253698598415554e+01 1.431802775613363394e+02 -2.529638577635975771e+00 1.684678899455790315e+02 5.442559184747926793e+01 8.301738888561838792e+01 7.809724254555169409e+01 1.476801062495628614e+01 3.994367354624952782e+01 3.522019127425442875e+00 5.993089862998355954e+01 1.138124956236688377e+02 9.835030669229772116e+01 2.971999095733244758e+02 2.114636230793011578e+02 2.776835187344115070e+02 2.679187843937909292e+02 5.155830045428213104e+00 2.101858400071456501e+01 9.989505791818464786e+01 1.684747958428641255e+02 4.775572659840364764e+01 1.039595413185998041e+01 4.809932686522456891e+01 1.989071094395394255e+02 2.192619572071766854e+01 1.152977940056373711e+02 1.009241856663531820e+02 1.863515817169561117e+01 6.401174079291691044e+01";
const x1 = [];
const x2 = [];
const x3 = [];
const y = [];
let mse;
let sumOfErrors = 0;
let sumOfCoordinates = 0;
const n = 33;
const startPoint = Math.round(Math.random() * 3);
const value = findFunction(startPoint);
a1.split(" ").forEach((element) => {
  x1.push(element);
});
a2.split(" ").forEach((element) => {
  x2.push(element);
});
a3.split(" ").forEach((element) => {
  x3.push(element);
});

b.split(" ").forEach((element) => {
  y.push(element);
});
let w = randomInteger(0, 10);
for (let i = 0; i < n; i++) {
  sumOfCoordinates += w * x1[i] + w * x2[i] + w * x3[i];
}
let mainY = w + sumOfCoordinates;
for (let i = 0; i < n; i++) {
  sumOfErrors += (y[i] - mainY) ** 2;
}
mse = (1 / n) * sumOfErrors;
let resultMSE = algorithm(100, 0.0009, mse, 0);
let resultMSEnew = resultMSE.map((element) =>
  element < 0 ? -element : element
);
resultMSE = [];
resultMSE = resultMSEnew;
let closestElement = resultMSE.shift();
let closestElements = [];
resultMSE.forEach((element) => {
  if (value - element < value - closestElement) {
    closestElement = element;
    closestElements.push(closestElement);
  }
});
console.log(resultMSE,value)
console.log(`\nМодель линейной регрессии: ${mainY}`);
closestElements.reverse()
for( let i = 1; i < closestElements.length; i++){
  console.log(`Квадратичная ошибка:${closestElements[i]}e+00${10-2}`);
}
console.log(`Параметр модели W: ${w}`)

// console.log(`Это улучшение функции, методом случайного поиска: ${result}\n`);
