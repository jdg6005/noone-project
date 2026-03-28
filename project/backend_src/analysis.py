from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def AnalyzeWords(word):

    sentiment = SentimentIntensityAnalyzer()

    token = word.lower().strip()

    # GET request to .api/answers
    # save to csv
    # python.request
    # 

    score = sentiment.polarity_scores(token)

    if score["compound"] > 0:
        return 1
    elif score["compound"] < 0:
        return -1
    else:
        return 0
