import jira_api_functions
from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS, cross_origin
import logging
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/getAvaialbleProjectKeys", methods=['GET'])
@cross_origin()
def getProjectKeys():
    return jsonify(jira_api_functions.getAvaialbleProjectKey())

@app.route("/getAvaialbleProjectName", methods=['GET'])
@cross_origin()
def getProjectName():
    return jsonify(jira_api_functions.getAvaialbleProjectName())


@app.route("/getAvaialbleProjectKeysNamesDictionary", methods=['GET'])
@cross_origin()
def getProjectKeysNamesDict():
    return jsonify(jira_api_functions.getAvailableProjectKeysAndNames())

@app.route('/getIssueSummary/<issuekey>/', methods=['GET'])
@cross_origin()
def getIssueSummary(issuekey):

    return  jsonify(jira_api_functions.getIssueSummaryForIssueKey(issuekey)), 200

@app.route('/getIssueKeys/<project_key>/', methods=['GET'])
@cross_origin()
def getAllProjectIssueKeys(project_key):
    try:
        project_call_results = jira_api_functions.getAllProjectIssueKeys(project_key)
        return jsonify((project_call_results)), 200
    except(e):
        app.logger.warning('This is a WARNING message', e)
        app.logger.error('This is an ERROR message')
        return  e, 404



@app.route('/updateTicket', methods=['POST'])
@cross_origin()
def updateTimeLog():
        issuekey = request.json['issuekey']
        time_minutes = request.json['minutes']
        minutesint = int(time_minutes)
        jira_api_functions.addTimeToTicket(str(issuekey), minutesint)

app.run(debug=True)