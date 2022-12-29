const upload_Md = require('./git-push.js');
const createNew_Md = require('./newCreate.js')
const shell = require('shelljs')
const queryString = require('query-string');
const axios = require("axios").default;
const axiosRetry = require('axios-retry');

setTimeout(() => {
  console.log('force exit');
  process.exit(0)
}, 30 * 60 * 1000);

axiosRetry(axios, {
  retries: 100,
  retryDelay: (retryCount) => {
    // console.log(`retry attempt: ${retryCount}`);
    return 3000 || retryCount * 1000;
  },
  retryCondition: (error) => {
    return error.response.status === 502;
  },
});


const listProject = `https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/famous-pumped-metacarpal|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/lavish-clammy-dash|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/childlike-alpine-mercury|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/resolute-capable-territory|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/woolen-common-ginger|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/woolen-peaceful-ulna|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/garrulous-plain-fall|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/grand-meowing-tower|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/tarry-hollow-munchkin|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/harvest-tested-background|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/plucky-thankful-tiara|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/harsh-local-wisteria|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/pollen-heartbreaking-havarti|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/superb-relieved-couch`.trim().split('|');

const delay = t => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(true);
    }, t);
  });
};

(async () => {
  try {
    let accountNumber = 0;

    for (let i = 0; i < listProject.length; i++) {
      accountNumber = i + 1;
      try {
        const nameProject = listProject[i].split('/')[4]
        console.log('deploy', nameProject);
        createNew_Md.run(nameProject)
        await upload_Md.upload2Git(listProject[i].trim(), 'code4Delpoy');
        console.log(`account ${accountNumber} upload success ^_^`);

        axios
          .get(`https://eager-profuse-python.glitch.me/deploy?${queryString.stringify({
            email: listProject[i].trim() + ' true'
          })}`)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
            } else {
              console.log('Loi');
            }
          });

        if (i + 1 < listProject.length) await delay(1.8 * 60 * 1000);
      } catch (error) {
        console.log(`account ${accountNumber} upload fail ^_^`);
        axios
          .get(`https://eager-profuse-python.glitch.me/deploy?${queryString.stringify({
            email: listProject[i].trim() + ' false'
          })}`)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
            } else {
              console.log('Loi');
            }
          });
      }

      if (process.cwd().includes('code4Delpoy')) shell.cd('../', { silent: true });

    }

    await delay(20000)
    console.log('Done! exit')
    process.exit(0)

  } catch (err) {
    console.log(`error: ${err}`);
  }
})();