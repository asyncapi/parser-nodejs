
const IntentBase = require('./base');
// eslint-disable-next-line no-unused-vars
const IntentChannel = require('./channel');
// eslint-disable-next-line no-unused-vars
const IntentMessage = require('./message');
// eslint-disable-next-line no-unused-vars
const SecurityScheme = require('../models/security-scheme');
const IntentInfo = require('./info');
const IntentOperation = require('./operation');
const Schema = require('../models/schema');
const IntentServer = require('./server');

/**
 * 
 * @class
 * @alias module:@asyncapi/parser#IntentAsyncAPIDocument
 * @extends IntentBase
 */
class IntentAsyncAPIDocument extends IntentBase {
  constructor(...args) {
    super(...args);
  }

  /**
   * 
   * @returns {IntentInfo}
   */
  info() {
    return new IntentInfo();
  }
  /**
   * 
   * @returns {IntentChannel[]}
   */
  applicationPublishableChannels() { return [new IntentChannel()];}
  /**
   * 
   * @returns {IntentChannel[]}
   */
  applicationSubscribableChannels() { return [new IntentChannel()];}
  /**
   * 
   * @returns {IntentChannel[]}
   */
  clientPublishableChannels() { return [new IntentChannel()];}
  /**
   * 
   * @returns {IntentChannel[]}
   */
  clientSubscribableChannels() { return [new IntentChannel()];}
  /**
   * 
   * @returns {IntentChannel[]}
   */
  channels() { return [new IntentChannel()];}
  /**
   * 
   * @returns {IntentMessage[]}
   */
  applicationPublishableMessages() { return [new IntentMessage()];}
  /**
   * 
   * @returns {IntentMessage[]}
   */
  applicationSubscribableMessages() { return [new IntentMessage()];}
  /**
    * 
    * @returns {IntentMessage[]}
    */
  clientPublishableMessages() { return [new IntentMessage()];}
  /**
   * 
   * @returns {IntentMessage[]}
   */
  clientSubscribableMessages() { return [new IntentMessage()];}
  /**
   * 
   * @returns {IntentMessage[]}
   */
  messages() { return [new IntentMessage()];}
  /**
    * 
    * @returns {IntentOperation[]}
    */
  applicationPublishOperations() { return [new IntentOperation()];}
  /**
    * 
    * @returns {IntentOperation[]}
    */
  applicationSubscribeOperations() { return [new IntentOperation()];}
  /**
     * 
     * @returns {IntentOperation[]}
     */
  clientPublishOperations() { return [new IntentOperation()];}
  /**
    * 
    * @returns {IntentOperation[]}
    */
  clientSubscribeOperations() { return [new IntentOperation()];}
  /**
    * 
    * @returns {IntentOperation[]}
    */
  operations() { return [new IntentOperation()];}

  /**
   * @returns {Schema[]}
   */
  schemas() { return [new Schema({type: 'integer'})];}
  /**
    * 
    * @returns {IntentServer[]}
    */
  servers() { return [new IntentServer()];}
  /**
    * 
    * @returns {IntentServer}
    */
  server(...args) { return new IntentServer();}
  /**
    * 
    * @returns {SecurityScheme[]}
    */
  securitySchemes() { return [new SecurityScheme({})];}
}

module.exports = IntentAsyncAPIDocument;