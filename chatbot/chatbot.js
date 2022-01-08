'use strict'
const { SessionsClient } = require('dialogflow');
// Instantiation of DialogFlow client
const dialogflow = require('dialogflow');
const structjson = require('structjson');
const config = require('../config/keys');

const projectID = config.googleProjectID;
const sessionID = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivatekey
};

const sessionClient = new dialogflow.SessionsClient({ projectID, credentials });
const sessionPath = sessionClient.sessionPath(projectID, sessionID);

module.exports = {
  textQuery: async function (text, parameters = {}) {
    let sessionPath = SessionsClient.sessionPath(projectID, sessionID + userID);
    let self = module.exports;
    const request = {
      // The text query request
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: text,
          // The language used by the client (es-419)
          languageCode: languageCode
        }
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };

    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  eventQuery: async function (event, parameters = {}) {
    let sessionPath = SessionsClient.sessionPath(projectID, sessionID + userID);
    let self = module.exports;
    const request = {
      // The text query request
      session: sessionPath,
      queryInput: {
        event: {
          // The query to send to the dialogflow agent
          name: event,
          parameters: structjson.jsonToStructProto(parameters),
          // The language used by the client (es)
          languageCode: languageCode
        }
      }
    };

    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  handleAction: function (responses) {
    return responses;
  }
}

// export GOOGLE_APPLICATION_CREDENTIALS="ruta"
