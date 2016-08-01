import axios from 'axios';

export default function(){
  return axios.get('https://data.cityofnewyork.us/resource/xx67-kt59.json');
};


// the above is the same as: 

// const getThis = function() {
//   return axios.get('https://data.cityofnewyork.us/resource/xx67-kt59.json');	
// }

// export default getThis;