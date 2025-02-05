const GOOGLE_API_KEY = "AIzaSyANTw7iojmBEwqJcKVwFMLffknt7nUoam0";

export const MOST_POPULAR_VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=RU&maxResults=50&key=${GOOGLE_API_KEY}`;
