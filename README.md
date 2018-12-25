# Tweets Sentiment Analysis App

sentiment-analysis-app

Sentiment analysis Flask App using tweepy streaming functionality

<img src="https://github.com/vaziozio/sentiment-analysis-app/blob/master/appinterfacev2.png">

Link to the app: <a href="http://doug-sentiment-analyzer.mybluemix.net/">Sentiment Analyzer</a>

### Prerequisites

#### Access to Twitter Streaming

Be sure to create your <a href="https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html">Twitter API</a> credentials and update streaming.py credential variables to make it run properly.

##### Libraries

- <a href="https://docs.python.org/2/library/pickle.html#module-pickle" target="_blank">Pickle</a>
- <a href="https://scikit-learn.org/stable/" target="_blank">scikit-learn</a>
- <a href="https://pandas.pydata.org/" target="_blank">Pandas</a>
- <a href="https://matplotlib.org/" target="_blank">Matplotlib</a>
- <a href="http://www.tweepy.org/">Tweepy</a>

##### Datasets

- <a href="https://www.kaggle.com/augustop/portuguese-tweets-for-sentiment-analysis">Portuguese Tweets for Sentiment Analysis</a>

## Improvements
- [ ] Review labels and re-train model
- [ ] Add more views to the dashboard interface
- [ ] Review labels given to the train data
- [ ] Add user input live analyzer
- [ ] Optimize tweets capture from streaming
- [ ] Implement Accurate Text Preprocessing tasks
- [ ] Deploy to Kubernetes
