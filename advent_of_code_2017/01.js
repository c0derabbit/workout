function sum_digits(input) {
  digits = String(input).split('').map((d) => parseInt(d));
  return digits.map((d, idx) => {
    return d === (idx < digits.length - 1 ? digits[idx + 1] : digits[0]) && d;
  }).reduce((sum, digit) => sum + digit);
}

function sum_digits_part_2(input) {
  digits = String(input).split('').map((d) => parseInt(d));
  return digits.map((d, idx) => {
    const offset = digits.length / 2;
    const next = idx + offset < digits.length - 1
      ? digits[idx + offset]
      : digits[(idx + offset) % digits.length];
    return d === next && d;
  }).reduce((sum, digit) => sum + digit);
}

function run_tests(fn, test_suite) {
  console.log(`Testing ${fn.name}...`)
  const test_results = test_suite.map((test_case) => {
    const actual = fn(test_case.input);
    if (actual !== test_case.expected)
      console.log(`Error with input ${test_case.input}: expected ${test_case.expected}, got ${actual}`);
    return actual === test_case.expected;
  });
  console.log(`Done with ${test_results.filter((r) => !r).length} errors.\n`)
}

const test_suite_1 = [
  {input: 1122, expected: 3},
  {input: 1111, expected: 4},
  {input: 1234, expected: 0},
  {input: 91212129, expected: 9},
];

const test_suite_2 = [
  {input: 1212, expected: 6},
  {input: 1221, expected: 0},
  {input: 123425, expected: 4},
  {input: 123123, expected: 12},
  {input: 12131415, expected: 4},
]

run_tests(sum_digits, test_suite_1);
run_tests(sum_digits_part_2, test_suite_2);

const input = "21752342814933766938172121674976879111362417653261522357855816893656462449168377359285244818489723869987861247912289729579296691684761143544956991583942215236568961875851755854977946147178746464675227699149925227227137557479769948569788884399379821111382536722699575759474473273939756348992714667963596189765734743169489599125771443348193383566159843593541134749392569865481578359825844394454173219857919349341442148282229689541561169341622222354651397342928678496478671339383923769856425795211323673389723181967933933832711545885653952861879231537976292517866354812943192728263269524735698423336673735158993853556148833861327959262254756647827739145283577793481526768156921138428318939361859721778556264519643435871835744859243167227889562738712953651128317624673985213525897522378259178625416722152155728615936587369515254936828668564857283226439881266871945998796488472249182538883354186573925183152663862683995449671663285775397453876262722567452435914777363522817594741946638986571793655889466419895996924122915777224499481496837343194149123735355268151941712871245863553836953349887831949788869852929147849489265325843934669999391846286319268686789372513976522282587526866148166337215961493536262851512218794139272361292811529888161198799297966893366553115353639298256788819385272471187213579185523521341651117947676785341146235441411441813242514813227821843819424619974979886871646621918865274574538951761567855845681272364646138584716333599843835167373525248547542442942583122624534494442516259616973235858469131159773167334953658673271599748942956981954699444528689628848694446818825465485122869742839711471129862632128635779658365756362863627135983617613332849756371986376967117549251566281992964573929655589313871976556784849231916513831538254812347116253949818633527185174221565279775766742262687713114114344843534958833372634182176866315441583887177759222598853735114191874277711434653854816841589229914164681364497429324463193669337827467661773833517841763711156376147664749175267212562321567728575765844893232718971471289841171642868948852136818661741238178676857381583155547755219837116125995361896562498721571413742";

console.log(`Part 1: ${sum_digits(input)}`);
console.log(`Part 2: ${sum_digits_part_2(input)}`);