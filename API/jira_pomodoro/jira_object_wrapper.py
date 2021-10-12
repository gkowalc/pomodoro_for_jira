from atlassian import Jira
from dotenv import load_dotenv, find_dotenv
import os
load_dotenv(find_dotenv())
API_KEY = os.environ.get("API_KEY")
API_URL = os.environ.get("API_URL")
API_USER = os.environ.get("API_USER")
jira_connection_object = Jira(url=API_URL, username=API_USER, password=API_KEY)


new = {}
xa = jira_connection_object.projects(included_archived=None)

