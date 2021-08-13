import jira_api_functions
from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
import requests
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/")
@cross_origin()
def home():
    return "Hello World!"

@app.route("/getAvaialbleProjectKeys")
@cross_origin()
def getProjectKeys():
    z = jira_api_functions.getAvaialbleProjectKey()
    return jsonify(z)

@app.route("/getAvaialbleProjectName")
@cross_origin()
def getProjectName():
    zz = jira_api_functions.getAvaialbleProjectName()
    return jsonify(zz)

@app.route('/getIssueSummary/<issuekey>/', methods=['GET'])
@cross_origin()

def getIssueSummary(issuekey):
    return  jsonify(jira_api_functions.getIssueSummaryForIssueKey(issuekey))

@app.route('/getIssueKeys/<project_key>/', methods=['GET'])
@cross_origin()
def getAllProjectIssueKeys(project_key):
    z = jira_api_functions.getAllProjectIssueKeys(project_key)
    return jsonify(z)

@app.route('/updateTicket', methods=['POST'])
@cross_origin()
def updateTimeLog():
        issuekey = request.json['issuekey']
        time_minutes = request.json['minutes']
        minutesint = int(time_minutes)
        print (issuekey, time_minutes)
        print(type(issuekey), type(time_minutes))
        jira_api_functions.addTimeToTicket(str(issuekey), minutesint)



app.run(debug=True)