from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener
import requests
import pickle
import json
import time

#loading credentials
ckey = 'H4Hti0o8AlZbiICIxuO2M45mS'
csecret = '2NbOl6GQu2GjZyQNLFwVSgzFvYInZWTFm3YY9MzI2PQx1VY9CP'
atoken ='1068182081820348417-niQ4nYhDrf2JtI10ItiPl8GS6TiI6P'
asecret = 'F8vqXZoRYavgGVJLcG4bnjveYnHzUxP0eGi7hOF2lXdHM'
#streaming listener
class listener(StreamListener):
    #getting data
    def on_data(self, data):
        try:
            json_content = json.loads(data)
            json_text = json_content['text']

            requests.post('http://doug-sentiment-analyzer.mybluemix.net/add_tweet', json={'tweet':json_text})
        except:
            time.sleep(3)
        return True

#composing authentication
auth = OAuthHandler(ckey, csecret)
auth.set_access_token(atoken, asecret)

#setting up streaming functionality
twitterStream = Stream(auth, listener())
twitterStream = twitterStream.sample(languages=['pt'],is_async=True)