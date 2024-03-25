
import { createClient } from 'redis';

function initiateConnection(){
    return createClient({
        url: 'redis://alice:foobared@awesome.redis.server:6380'
      });
}

const redisClient = initiateConnection();

(async () => {
  redisClient
  .on('error', err => console.log('Redis Client Error', err));

  await redisClient.connect();
})();

export default {
    getConnection: async () => {
        const conn = createClient({
            url: 'redis://alice:foobared@awesome.redis.server:6380'
          }).on('error', err => console.log('Redis Client Error', err));

        await conn.connect();

        return conn;
    },
    checkConnection: async () => {
        try {
            const conn = await initiateConnection();
            await conn.connect();

            await conn.ping();
        } catch (err) {
            console.log('error', err);
        }
    },
    redisClient
};