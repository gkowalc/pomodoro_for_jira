import datetime
import json
from jira_object_wrapper import jira_connection_object

def addTimeToTicket(issuekey, time_minutes):
    now = datetime.datetime.now().astimezone().strftime("%Y-%m-%dT%H:%M:%S.%f%z")
    start = 20
    stop = 22
    strObj = ''
    if len(now) > stop :
        strObj = now[0: start:] + now[stop + 1::]
    time_sec = time_minutes * 60
    jira_connection_object.issue_worklog(issuekey, str(strObj), time_sec)

def getAvailableProjectKeysAndNames():
    keys_and_names = jira_connection_object.projects(included_archived=None)
    project_keys_names_dict = {}
    for i in keys_and_names:
        project_keys_names_dict[i["key"]] = i["name"]

    return project_keys_names_dict


def getAvaialbleProjectName():
    jsonDIct = json.loads(json.dumps(jira_connection_object.projects(included_archived=None)))
    list_of_projects_names  = []
    for i in jsonDIct:
         list_of_projects_names.append(i["name"])
    return list_of_projects_names

def getAllProjectIssueKeys(project_key):
    jsonDIct = json.loads(json.dumps(jira_connection_object.get_project_issuekey_all(project_key)))
    list_of_issuekeys  = []
    for i in jsonDIct:
            list_of_issuekeys.append(i)
    return list_of_issuekeys



def getAvaialbleProjectKey():
    jsonDIct = json.loads(json.dumps(jira_connection_object.projects(included_archived=None)))
    list_of_projects = []
    for i in jsonDIct:
         list_of_projects.append(i["key"])
    return list_of_projects


def getIssueSummaryForIssueKey(issuekey, summary="summary"):
    return (jira_connection_object.issue_field_value(issuekey, summary))

