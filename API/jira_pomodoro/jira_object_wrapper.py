from atlassian import Jira
from dotenv import load_dotenv, find_dotenv
import os
load_dotenv(find_dotenv())
API_KEY = os.environ.get("API_KEY")
API_URL = os.environ.get("API_URL")
API_USER = os.environ.get("API_USER")
j = Jira( url=API_URL, username=API_USER, password=API_KEY)
