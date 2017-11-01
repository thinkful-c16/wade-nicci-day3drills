'use strict';

const jobObj1 = {
  name: 'Brian',
  'job title':'founder'

};

const jobObj2 = {
  name: 'Edward',
  'job title':'lawyer',
  boss: 'Brian'

};

const jobObj3 = {
  name: 'Eliza',
  'job title':'artist',
  boss: 'Brian'
};

const jobObj4 = {
  name: 'Drew',
  'job title':'musician',
  boss: 'Brian'
};

const jobArray = [jobObj1,jobObj2,jobObj3,jobObj4];

for (let i = 0; i < jobArray.length; i++) {
  if (jobArray[i].boss === undefined){
    console.log(`${jobArray[i]['job title']} ${jobArray[i].name} doesn't report to anybody.`);
  }else {
    console.log(`${jobArray[i]['job title']} ${jobArray[i].name} reports to ${jobArray[i].boss}.`);
  }
  
}

// console.log(jobArray);