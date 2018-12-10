#importing libraries
from flask import Flask, render_template, url_for, jsonify, request
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
import pickle
import os
from hourcounter import tweets_count, count_tweets
from streaming import StreamListener

#loading saved model
clf = pickle.load(open('sentiment_analysis.sav','rb'))
vect = pickle.load(open('vectorizer.sav','rb'))

#declaring flask app
app = Flask(__name__)

#set port
port = int(os.getenv('VCAP_APP_PORT'))

#starting tweets
tweet_json = {}

#post tweets to our api and run the classifications to serve interface
@app.route('/add_tweet', methods=['POST'])
def add_tweet():
    request_data = request.get_json()
    values_to_predict = vect.transform([request_data['tweet']])
    prediction = clf.predict(values_to_predict)
    tweet, sentiment = request_data['tweet'],prediction[0]
    tweet_json['tweet'],tweet_json['sentiment'] = tweet, sentiment
    count_tweets(sentiment)
    return 'Success'

#defining template route '/'
@app.route('/')
def index():
        return render_template('data.html')

#api endpoint
@app.route('/api', methods=['GET'])
def api():
    return jsonify(tweet_json)

#counter endpoint
@app.route('/count', methods=['GET'])
def count():
    return jsonify(tweets_count)

#running app
if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True, port=port)
