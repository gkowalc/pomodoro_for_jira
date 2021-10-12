import datetime
import json
from jira_object_wrapper import j

def addTimeToTicket(issuekey, time_minutes):
    now = datetime.datetime.now().astimezone().strftime("%Y-%m-%dT%H:%M:%S.%f%z")
    start = 20
    stop = 22
    strObj = ''
    if len(now) > stop :
        strObj = now[0: start:] + now[stop + 1::]
    time_sec = time_minutes * 60
    j.issue_worklog(issuekey, str(strObj), time_sec)

def getAvaialbleProjectName():
    z = j.projects(included_archived=None)
    y = json.dumps(z)
    jsonDIct = json.loads(y)
    list_of_projects_names  = []
    for i in jsonDIct:
         list_of_projects_names.append(i["name"])
    return list_of_projects_names


getAvaialbleProjectName()
def getAllProjectIssueKeys(project_key):
    z = j.get_project_issuekey_all(project_key)
    y = json.dumps(z)
    jsonDIct = json.loads(y)
    print (jsonDIct)
    list_of_issuekeys  = []
    for i in jsonDIct:
            list_of_issuekeys.append(i)
    return list_of_issuekeys



def getAvaialbleProjectKey():
    z = j.projects(included_archived=None)
    y = json.dumps(z)
    jsonDIct = json.loads(y)
    print(jsonDIct)
    list_of_projects = []
    for i in jsonDIct:
         list_of_projects.append(i["key"])
    return list_of_projects


def getIssueSummaryForIssueKey(issuekey, summary="summary"):
    return (j.issue_field_value(issuekey, summary))

