
const axios = require('axios');
const os = require('os');

const clientName = "journeyplanner-javascript-example-" + os.hostname + "-" + os.userInfo.name;
console.log("Note: Please make sure ET-Client-Name identifies you. Using client name: ", clientName);

const query = `
{
  stopPlace(id: "NSR:StopPlace:4441") {
    id
    name
    estimatedCalls(numberOfDepartures: 4) {
      aimedDepartureTime
      expectedDepartureTime
      destinationDisplay {
        frontText
      }
      serviceJourney {
        journeyPattern {
          line {
            id
            name
            publicCode
          }
        }
      }
    }
  }
}`

axios({
  url: 'https://api.entur.org/journeyplanner/2.0/index/graphql',
  method: 'post',
  headers: {
    'ET-Client-Name': clientName
  },
  data: {
    query: query
  }
}).then((result) => {
  console.log(JSON.stringify(result.data, null, 2));

});