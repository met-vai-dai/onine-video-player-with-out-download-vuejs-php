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


const listProject = `https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/stripe-chief-trick|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/elastic-burly-bison|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/mirror-shore-judo|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/enchanted-odd-rooster|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/alive-fortunate-bottle|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/slime-nifty-tugboat|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/open-agate-collard|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/terrific-fluttering-hexagon|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/titanium-beautiful-sprint|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/extreme-boulder-offer|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/distinct-extreme-cod|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/juniper-omniscient-iris|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/organized-married-gosling|https://568d30a1-f7d1-48fb-9225-51840eabde0c@api.glitch.com/git/deadpan-invincible-watcher`.trim().split('|');

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