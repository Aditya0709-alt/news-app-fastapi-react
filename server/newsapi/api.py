import os
import requests
from dotenv import load_dotenv

load_dotenv()

NEWS_API_URL = "https://newsapi.org/v2/everything"


def get_api_key():
    return os.environ.get("API_KEY")


def get_articles(q, from_date, sort_by="popularity"):
    res = requests.get(NEWS_API_URL, {
                       'q': q, 'date': from_date, 'sort_by': sort_by, 'apiKey': get_api_key()})
    return res.json()
