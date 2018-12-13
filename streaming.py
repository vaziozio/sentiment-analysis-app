from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener
import requests
import pickle
import json
import time

#loading credentials
ckey = 'Client key'
csecret = 'Client secret'
atoken ='Access token'
asecret = 'Access secret'
#streaming listener
class listener(StreamListener):
    #getting data
    def on_data(self, data):
    	time.sleep(0.09)
        try:
            json_content = json.loads(data)
            json_text = json_content['text']
            requests.post('http://doug-sentiment-analyzer.mybluemix.net/add_tweet', json={'tweet':json_text})
        except Exception as e: 
        	print(e)
        	requests.post('http://doug-sentiment-analyzer.mybluemix.net/add_tweet', json={'tweet':e})
        	time.sleep(15)
        return True

#composing authentication
auth = OAuthHandler(ckey, csecret)
auth.set_access_token(atoken, asecret)

#setting up streaming functionality
twitterStream = Stream(auth, listener())
twitterStream = twitterStream.sample(languages=['pt'],is_async=True)
