const fs = require('fs');
const xlsx = require('xlsx');

const wb = xlsx.readFile('./sample.xlsx');

sheet = wb.Sheets['Sheet1'];

const data = xlsx.utils.sheet_to_json(sheet);
const stringified = JSON.stringify(data);

fs.writeFile('./jsonData.json', stringified, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Excel file converted into Json successfull');
  }
});
