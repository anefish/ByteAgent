const { TwitterApi } = require('twitter-api-v2');

console.log('TK: ', process.env.TWITTER_API_KEY);


const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY || '',
    appSecret: process.env.TWITTER_API_SECRET_KEY || '',
    accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
});

export const tweet = async (tweet: string) => {
    try {
        const tweetResponse = await twitterClient.v2.tweet(tweet);
        return tweetResponse.data;
    } catch (error) {
        console.error('Error posting tweet:', error);
        return null;
    }
}