const redis = require('redis');

const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

client.on('connect', () => {
    console.log('Connected to Redis successfully!');
  });

async function run() {

  await client.connect();

  await client.set('mykey', 'Hello Redis');

  const value = await client.get('mykey');
  console.log(value);

  await client.quit();
}

run().catch(console.error);
