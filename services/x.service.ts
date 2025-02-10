const { TwitterApi } = require('twitter-api-v2');

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY || '1LYETzM4A6BKPBSadSdyGFkfT',
    appSecret: process.env.TWITTER_API_SECRET_KEY || 'Vvgps2KdbCJWGwIxcY7mqL8ujJsWZ2l1yjg6rWXJWnV4xLibwh',
    accessToken: process.env.TWITTER_ACCESS_TOKEN || '1882247523483668480-IWzmXhtfsWMtMDsvdXIg3RJL5Wtofd',
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'E82B9Kt8BzkqxtNegqkbiGXCOciM0LbtaA3ZhkRaP2xdu',
});

export const postTweet = async (tweet: string) => {
    try {
        const tweetResponse = await twitterClient.v2.tweet(tweet);
        return tweetResponse.data;
    } catch (error) {
        console.error('Error posting tweet:', error);
        return null;
    }
}