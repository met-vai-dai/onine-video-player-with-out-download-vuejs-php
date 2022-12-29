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


const listProject = `https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/warp-wary-jackal|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/difficult-vagabond-globeflower|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/granite-tangy-syzygy|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/sandy-muddy-part|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/sprout-storm-jute|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/righteous-sponge-basil|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/giant-lace-dreadnought|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/flax-solid-ferryboat|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/diagnostic-large-equinox|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/paper-resisted-caribou|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/uttermost-sour-plywood|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/voltaic-booming-polo|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/temporal-lydian-xenoposeidon|https://eef7c163-9bd6-4d0f-afd5-028c75b4f6f5@api.glitch.com/git/petal-foregoing-judge`.trim().split('|');

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