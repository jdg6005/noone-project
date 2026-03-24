from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


def AnalyzeWords():
    sentiment = SentimentIntensityAnalyzer()

    word = input("enter word: ").lower().strip()

    score = sentiment.polarity_scores(word)

    if score["compound"] > 0:
        print("positive")
    elif score["compound"] < 0:
        print("negative")
    else:
        print("neither")
