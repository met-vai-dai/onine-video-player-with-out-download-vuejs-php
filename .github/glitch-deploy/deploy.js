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


const listProject = `https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/famous-crawling-riverbed|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/incongruous-boundless-reward|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/tangy-midnight-rayon|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/sordid-enchanting-mahogany|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/highfalutin-rigorous-cannon|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/outstanding-fantastic-centaur|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/fluffy-honored-sunscreen|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/different-shore-glade|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/ten-sixth-bergamot|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/shocking-rain-aura|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/flowery-spiffy-bamboo|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/thoughtful-working-fountain|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/terrific-elastic-textbook|https://f47d3f2c-49c8-45a3-b445-501af00bd34e@api.glitch.com/git/magenta-equal-currant`.trim().split('|');

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