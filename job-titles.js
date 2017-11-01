'use strict';

const jobObj1 = {
  name: 'Brian',
  'job title':'graphic designer'
};

const jobObj2 = {
  name: 'Edward',
  'job title':'lawyer'
};

const jobObj3 = {
  name: 'Eliza',
  'job title':'artist'
};

const jobObj4 = {
  name: 'Drew',
  'job title':'musician'
};

const jobArray = [jobObj1,jobObj2,jobObj3,jobObj4];

for (let i = 0; i < jobArray.length; i++) {
  console.log(`${jobArray[i].name}: ${jobArray[i]['job title']}`);
}

// console.log(jobArray);