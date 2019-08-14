## Classes

<dl>
<dt><a href="#AsyncAPIDocument">AsyncAPIDocument</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd><p>Contains handy methods to deal with the root AsyncAPI document.</p>
</dd>
<dt><a href="#Base">Base</a></dt>
<dd></dd>
<dt><a href="#ChannelParameter">ChannelParameter</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Channel">Channel</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Contact">Contact</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#CorrelationId">CorrelationId</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#ExternalDocs">ExternalDocs</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Info">Info</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#License">License</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Message">Message</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Operation">Operation</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#PublishOperation">PublishOperation</a> ⇐ <code><a href="#Operation">Operation</a></code></dt>
<dd></dd>
<dt><a href="#Schema">Schema</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#ServerSecurityRequirement">ServerSecurityRequirement</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#ServerVariable">ServerVariable</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Server">Server</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#SubscribeOperation">SubscribeOperation</a> ⇐ <code><a href="#Operation">Operation</a></code></dt>
<dd></dd>
<dt><a href="#Tag">Tag</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
</dl>

<a name="AsyncAPIDocument"></a>

## AsyncAPIDocument ⇐ [<code>Base</code>](#Base)
Contains handy methods to deal with the root AsyncAPI document.

**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [AsyncAPIDocument](#AsyncAPIDocument) ⇐ [<code>Base</code>](#Base)
    * [.info()](#AsyncAPIDocument+info) ⇒ [<code>Info</code>](#Info)
    * [.id()](#AsyncAPIDocument+id) ⇒ <code>string</code>
    * [.servers()](#AsyncAPIDocument+servers) ⇒ [<code>Array.&lt;Server&gt;</code>](#Server)
    * [.server(name)](#AsyncAPIDocument+server) ⇒ [<code>Server</code>](#Server)
    * [.channels()](#AsyncAPIDocument+channels) ⇒ [<code>Array.&lt;Channel&gt;</code>](#Channel)
    * [.channel(name)](#AsyncAPIDocument+channel) ⇒ [<code>Channel</code>](#Channel)
    * [.defaultContentType()](#AsyncAPIDocument+defaultContentType) ⇒ <code>string</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="AsyncAPIDocument+info"></a>

### asyncAPIDocument.info() ⇒ [<code>Info</code>](#Info)
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+id"></a>

### asyncAPIDocument.id() ⇒ <code>string</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+servers"></a>

### asyncAPIDocument.servers() ⇒ [<code>Array.&lt;Server&gt;</code>](#Server)
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+server"></a>

### asyncAPIDocument.server(name) ⇒ [<code>Server</code>](#Server)
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the server. |

<a name="AsyncAPIDocument+channels"></a>

### asyncAPIDocument.channels() ⇒ [<code>Array.&lt;Channel&gt;</code>](#Channel)
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+channel"></a>

### asyncAPIDocument.channel(name) ⇒ [<code>Channel</code>](#Channel)
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the channel. |

<a name="AsyncAPIDocument+defaultContentType"></a>

### asyncAPIDocument.defaultContentType() ⇒ <code>string</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="Base+json"></a>

### asyncAPIDocument.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="Base"></a>

## Base
**Kind**: global class  
<a name="Base+json"></a>

### base.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Base</code>](#Base)  
<a name="ChannelParameter"></a>

## ChannelParameter ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [ChannelParameter](#ChannelParameter) ⇐ [<code>Base</code>](#Base)
    * [.description()](#ChannelParameter+description) ⇒ <code>string</code>
    * [.location()](#ChannelParameter+location) ⇒ <code>string</code>
    * [.schema()](#ChannelParameter+schema) ⇒ [<code>Schema</code>](#Schema)
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="ChannelParameter+description"></a>

### channelParameter.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="ChannelParameter+location"></a>

### channelParameter.location() ⇒ <code>string</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="ChannelParameter+schema"></a>

### channelParameter.schema() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="Base+json"></a>

### channelParameter.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="Channel"></a>

## Channel ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Channel](#Channel) ⇐ [<code>Base</code>](#Base)
    * [.description()](#Channel+description) ⇒ <code>string</code>
    * [.parameters()](#Channel+parameters) ⇒ <code>Object.&lt;string, ChannelParameter&gt;</code>
    * [.parameter(name)](#Channel+parameter) ⇒ [<code>ChannelParameter</code>](#ChannelParameter)
    * [.publish()](#Channel+publish) ⇒ [<code>PublishOperation</code>](#PublishOperation)
    * [.subscribe()](#Channel+subscribe) ⇒ [<code>SubscribeOperation</code>](#SubscribeOperation)
    * [.hasPublish()](#Channel+hasPublish) ⇒ <code>boolean</code>
    * [.hasSubscribe()](#Channel+hasSubscribe) ⇒ <code>boolean</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="Channel+description"></a>

### channel.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+parameters"></a>

### channel.parameters() ⇒ <code>Object.&lt;string, ChannelParameter&gt;</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+parameter"></a>

### channel.parameter(name) ⇒ [<code>ChannelParameter</code>](#ChannelParameter)
**Kind**: instance method of [<code>Channel</code>](#Channel)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the parameter. |

<a name="Channel+publish"></a>

### channel.publish() ⇒ [<code>PublishOperation</code>](#PublishOperation)
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+subscribe"></a>

### channel.subscribe() ⇒ [<code>SubscribeOperation</code>](#SubscribeOperation)
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+hasPublish"></a>

### channel.hasPublish() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+hasSubscribe"></a>

### channel.hasSubscribe() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Base+json"></a>

### channel.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Contact"></a>

## Contact ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Contact](#Contact) ⇐ [<code>Base</code>](#Base)
    * [.name()](#Contact+name) ⇒ <code>string</code>
    * [.url()](#Contact+url) ⇒ <code>string</code>
    * [.email()](#Contact+email) ⇒ <code>string</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="Contact+name"></a>

### contact.name() ⇒ <code>string</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Contact+url"></a>

### contact.url() ⇒ <code>string</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Contact+email"></a>

### contact.email() ⇒ <code>string</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Base+json"></a>

### contact.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="CorrelationId"></a>

## CorrelationId ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [CorrelationId](#CorrelationId) ⇐ [<code>Base</code>](#Base)
    * [.description()](#CorrelationId+description) ⇒ <code>string</code>
    * [.location()](#CorrelationId+location) ⇒ <code>string</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="CorrelationId+description"></a>

### correlationId.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
<a name="CorrelationId+location"></a>

### correlationId.location() ⇒ <code>string</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
<a name="Base+json"></a>

### correlationId.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
<a name="ExternalDocs"></a>

## ExternalDocs ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [ExternalDocs](#ExternalDocs) ⇐ [<code>Base</code>](#Base)
    * [.description()](#ExternalDocs+description) ⇒ <code>string</code>
    * [.url()](#ExternalDocs+url) ⇒ <code>string</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="ExternalDocs+description"></a>

### externalDocs.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
<a name="ExternalDocs+url"></a>

### externalDocs.url() ⇒ <code>string</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
<a name="Base+json"></a>

### externalDocs.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
<a name="Info"></a>

## Info ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Info](#Info) ⇐ [<code>Base</code>](#Base)
    * [.title()](#Info+title) ⇒ <code>string</code>
    * [.version()](#Info+version) ⇒ <code>string</code>
    * [.license()](#Info+license) ⇒ [<code>License</code>](#License)
    * [.contact()](#Info+contact) ⇒ [<code>Contact</code>](#Contact)
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="Info+title"></a>

### info.title() ⇒ <code>string</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+version"></a>

### info.version() ⇒ <code>string</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+license"></a>

### info.license() ⇒ [<code>License</code>](#License)
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+contact"></a>

### info.contact() ⇒ [<code>Contact</code>](#Contact)
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Base+json"></a>

### info.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="License"></a>

## License ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [License](#License) ⇐ [<code>Base</code>](#Base)
    * [.name()](#License+name) ⇒ <code>string</code>
    * [.url()](#License+url) ⇒ <code>string</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="License+name"></a>

### license.name() ⇒ <code>string</code>
**Kind**: instance method of [<code>License</code>](#License)  
<a name="License+url"></a>

### license.url() ⇒ <code>string</code>
**Kind**: instance method of [<code>License</code>](#License)  
<a name="Base+json"></a>

### license.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>License</code>](#License)  
<a name="Message"></a>

## Message ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Message](#Message) ⇐ [<code>Base</code>](#Base)
    * [.headers()](#Message+headers) ⇒ [<code>Schema</code>](#Schema)
    * [.header(name)](#Message+header) ⇒ [<code>Schema</code>](#Schema)
    * [.payload()](#Message+payload) ⇒ [<code>Schema</code>](#Schema)
    * [.originalPayload()](#Message+originalPayload) ⇒ <code>any</code>
    * [.correlationId()](#Message+correlationId) ⇒ [<code>CorrelationId</code>](#CorrelationId)
    * [.schemaFormat()](#Message+schemaFormat) ⇒ <code>string</code>
    * [.originalSchemaFormat()](#Message+originalSchemaFormat) ⇒ <code>string</code>
    * [.contentType()](#Message+contentType) ⇒ <code>string</code>
    * [.name()](#Message+name) ⇒ <code>string</code>
    * [.title()](#Message+title) ⇒ <code>string</code>
    * [.summary()](#Message+summary) ⇒ <code>string</code>
    * [.description()](#Message+description) ⇒ <code>string</code>
    * [.externalDocs()](#Message+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
    * [.tags()](#Message+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag)
    * [.bindings()](#Message+bindings) ⇒ <code>Object</code>
    * [.binding(name)](#Message+binding) ⇒ <code>Object</code>
    * [.examples()](#Message+examples) ⇒ <code>Array.&lt;any&gt;</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="Message+headers"></a>

### message.headers() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+header"></a>

### message.header(name) ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Message</code>](#Message)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the header. |

<a name="Message+payload"></a>

### message.payload() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+originalPayload"></a>

### message.originalPayload() ⇒ <code>any</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+correlationId"></a>

### message.correlationId() ⇒ [<code>CorrelationId</code>](#CorrelationId)
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+schemaFormat"></a>

### message.schemaFormat() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+originalSchemaFormat"></a>

### message.originalSchemaFormat() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+contentType"></a>

### message.contentType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+name"></a>

### message.name() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+title"></a>

### message.title() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+summary"></a>

### message.summary() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+description"></a>

### message.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+externalDocs"></a>

### message.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+tags"></a>

### message.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag)
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+bindings"></a>

### message.bindings() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+binding"></a>

### message.binding(name) ⇒ <code>Object</code>
**Kind**: instance method of [<code>Message</code>](#Message)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="Message+examples"></a>

### message.examples() ⇒ <code>Array.&lt;any&gt;</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Base+json"></a>

### message.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Operation"></a>

## Operation ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Operation](#Operation) ⇐ [<code>Base</code>](#Base)
    * [.summary()](#Operation+summary) ⇒ <code>string</code>
    * [.description()](#Operation+description) ⇒ <code>string</code>
    * [.id()](#Operation+id) ⇒ <code>string</code>
    * [.externalDocs()](#Operation+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
    * [.tags()](#Operation+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag)
    * [.bindings()](#Operation+bindings) ⇒ <code>Object</code>
    * [.binding(name)](#Operation+binding) ⇒ <code>Object</code>
    * [.messages()](#Operation+messages) ⇒ [<code>Array.&lt;Message&gt;</code>](#Message)
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="Operation+summary"></a>

### operation.summary() ⇒ <code>string</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+description"></a>

### operation.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+id"></a>

### operation.id() ⇒ <code>string</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+externalDocs"></a>

### operation.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+tags"></a>

### operation.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag)
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+bindings"></a>

### operation.bindings() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+binding"></a>

### operation.binding(name) ⇒ <code>Object</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="Operation+messages"></a>

### operation.messages() ⇒ [<code>Array.&lt;Message&gt;</code>](#Message)
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Base+json"></a>

### operation.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="PublishOperation"></a>

## PublishOperation ⇐ [<code>Operation</code>](#Operation)
**Kind**: global class  
**Extends**: [<code>Operation</code>](#Operation)  

* [PublishOperation](#PublishOperation) ⇐ [<code>Operation</code>](#Operation)
    * [.isPublish()](#PublishOperation+isPublish) ⇒ <code>boolean</code>
    * [.isSubscribe()](#PublishOperation+isSubscribe) ⇒ <code>boolean</code>
    * [.kind()](#PublishOperation+kind) ⇒ <code>string</code>
    * [.summary()](#Operation+summary) ⇒ <code>string</code>
    * [.description()](#Operation+description) ⇒ <code>string</code>
    * [.id()](#Operation+id) ⇒ <code>string</code>
    * [.externalDocs()](#Operation+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
    * [.tags()](#Operation+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag)
    * [.bindings()](#Operation+bindings) ⇒ <code>Object</code>
    * [.binding(name)](#Operation+binding) ⇒ <code>Object</code>
    * [.messages()](#Operation+messages) ⇒ [<code>Array.&lt;Message&gt;</code>](#Message)
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="PublishOperation+isPublish"></a>

### publishOperation.isPublish() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="PublishOperation+isSubscribe"></a>

### publishOperation.isSubscribe() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="PublishOperation+kind"></a>

### publishOperation.kind() ⇒ <code>string</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+summary"></a>

### publishOperation.summary() ⇒ <code>string</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+description"></a>

### publishOperation.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+id"></a>

### publishOperation.id() ⇒ <code>string</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+externalDocs"></a>

### publishOperation.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+tags"></a>

### publishOperation.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag)
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+bindings"></a>

### publishOperation.bindings() ⇒ <code>Object</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+binding"></a>

### publishOperation.binding(name) ⇒ <code>Object</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="Operation+messages"></a>

### publishOperation.messages() ⇒ [<code>Array.&lt;Message&gt;</code>](#Message)
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Base+json"></a>

### publishOperation.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Schema"></a>

## Schema ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Schema](#Schema) ⇐ [<code>Base</code>](#Base)
    * [.multipleOf()](#Schema+multipleOf) ⇒ <code>number</code>
    * [.maximum()](#Schema+maximum) ⇒ <code>number</code>
    * [.exclusiveMaximum()](#Schema+exclusiveMaximum) ⇒ <code>number</code>
    * [.minimum()](#Schema+minimum) ⇒ <code>number</code>
    * [.exclusiveMinimum()](#Schema+exclusiveMinimum) ⇒ <code>number</code>
    * [.maxLength()](#Schema+maxLength) ⇒ <code>number</code>
    * [.minLength()](#Schema+minLength) ⇒ <code>number</code>
    * [.pattern()](#Schema+pattern) ⇒ <code>string</code>
    * [.maxItems()](#Schema+maxItems) ⇒ <code>number</code>
    * [.minItems()](#Schema+minItems) ⇒ <code>number</code>
    * [.uniqueItems()](#Schema+uniqueItems) ⇒ <code>boolean</code>
    * [.maxProperties()](#Schema+maxProperties) ⇒ <code>number</code>
    * [.minProperties()](#Schema+minProperties) ⇒ <code>number</code>
    * [.required()](#Schema+required) ⇒ <code>Array.&lt;string&gt;</code>
    * [.enum()](#Schema+enum) ⇒ <code>Array.&lt;any&gt;</code>
    * [.type()](#Schema+type) ⇒ <code>string</code>
    * [.allOf()](#Schema+allOf) ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
    * [.oneOf()](#Schema+oneOf) ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
    * [.anyOf()](#Schema+anyOf) ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
    * [.not()](#Schema+not) ⇒ [<code>Schema</code>](#Schema)
    * [.items()](#Schema+items) ⇒ [<code>Schema</code>](#Schema) \| [<code>Array.&lt;Schema&gt;</code>](#Schema)
    * [.properties()](#Schema+properties) ⇒ <code>Object.&lt;string, Schema&gt;</code>
    * [.additionalProperties()](#Schema+additionalProperties) ⇒ <code>boolean</code> \| [<code>Schema</code>](#Schema)
    * [.patternProperties()](#Schema+patternProperties) ⇒ <code>Object.&lt;string, Schema&gt;</code>
    * [.const()](#Schema+const) ⇒ <code>any</code>
    * [.contains()](#Schema+contains) ⇒ [<code>Schema</code>](#Schema)
    * [.dependencies()](#Schema+dependencies) ⇒ <code>Object.&lt;string, (Schema\|Array.&lt;string&gt;)&gt;</code>
    * [.propertyNames()](#Schema+propertyNames) ⇒ [<code>Schema</code>](#Schema)
    * [.if()](#Schema+if) ⇒ [<code>Schema</code>](#Schema)
    * [.then()](#Schema+then) ⇒ [<code>Schema</code>](#Schema)
    * [.else()](#Schema+else) ⇒ [<code>Schema</code>](#Schema)
    * [.format()](#Schema+format) ⇒ <code>string</code>
    * [.contentEncoding()](#Schema+contentEncoding) ⇒ <code>string</code>
    * [.contentMediaType()](#Schema+contentMediaType) ⇒ <code>string</code>
    * [.definitions()](#Schema+definitions) ⇒ <code>Object.&lt;string, Schema&gt;</code>
    * [.description()](#Schema+description) ⇒ <code>string</code>
    * [.title()](#Schema+title) ⇒ <code>string</code>
    * [.default()](#Schema+default) ⇒ <code>any</code>
    * [.readOnly()](#Schema+readOnly) ⇒ <code>boolean</code>
    * [.writeOnly()](#Schema+writeOnly) ⇒ <code>boolean</code>
    * [.examples()](#Schema+examples) ⇒ <code>Array.&lt;any&gt;</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="Schema+multipleOf"></a>

### schema.multipleOf() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+maximum"></a>

### schema.maximum() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+exclusiveMaximum"></a>

### schema.exclusiveMaximum() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+minimum"></a>

### schema.minimum() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+exclusiveMinimum"></a>

### schema.exclusiveMinimum() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+maxLength"></a>

### schema.maxLength() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+minLength"></a>

### schema.minLength() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+pattern"></a>

### schema.pattern() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+maxItems"></a>

### schema.maxItems() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+minItems"></a>

### schema.minItems() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+uniqueItems"></a>

### schema.uniqueItems() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+maxProperties"></a>

### schema.maxProperties() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+minProperties"></a>

### schema.minProperties() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+required"></a>

### schema.required() ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+enum"></a>

### schema.enum() ⇒ <code>Array.&lt;any&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+type"></a>

### schema.type() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+allOf"></a>

### schema.allOf() ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+oneOf"></a>

### schema.oneOf() ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+anyOf"></a>

### schema.anyOf() ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+not"></a>

### schema.not() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+items"></a>

### schema.items() ⇒ [<code>Schema</code>](#Schema) \| [<code>Array.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+properties"></a>

### schema.properties() ⇒ <code>Object.&lt;string, Schema&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+additionalProperties"></a>

### schema.additionalProperties() ⇒ <code>boolean</code> \| [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+patternProperties"></a>

### schema.patternProperties() ⇒ <code>Object.&lt;string, Schema&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+const"></a>

### schema.const() ⇒ <code>any</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+contains"></a>

### schema.contains() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+dependencies"></a>

### schema.dependencies() ⇒ <code>Object.&lt;string, (Schema\|Array.&lt;string&gt;)&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+propertyNames"></a>

### schema.propertyNames() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+if"></a>

### schema.if() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+then"></a>

### schema.then() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+else"></a>

### schema.else() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+format"></a>

### schema.format() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+contentEncoding"></a>

### schema.contentEncoding() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+contentMediaType"></a>

### schema.contentMediaType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+definitions"></a>

### schema.definitions() ⇒ <code>Object.&lt;string, Schema&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+description"></a>

### schema.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+title"></a>

### schema.title() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+default"></a>

### schema.default() ⇒ <code>any</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+readOnly"></a>

### schema.readOnly() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+writeOnly"></a>

### schema.writeOnly() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+examples"></a>

### schema.examples() ⇒ <code>Array.&lt;any&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Base+json"></a>

### schema.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="ServerSecurityRequirement"></a>

## ServerSecurityRequirement ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
<a name="Base+json"></a>

### serverSecurityRequirement.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>ServerSecurityRequirement</code>](#ServerSecurityRequirement)  
<a name="ServerVariable"></a>

## ServerVariable ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [ServerVariable](#ServerVariable) ⇐ [<code>Base</code>](#Base)
    * [.allowedValues()](#ServerVariable+allowedValues) ⇒ <code>Array.&lt;any&gt;</code>
    * [.allows(name)](#ServerVariable+allows) ⇒ <code>boolean</code>
    * [.hasAllowedValues()](#ServerVariable+hasAllowedValues) ⇒ <code>boolean</code>
    * [.defaultValue()](#ServerVariable+defaultValue) ⇒ <code>string</code>
    * [.hasDefaultValue()](#ServerVariable+hasDefaultValue) ⇒ <code>boolean</code>
    * [.description()](#ServerVariable+description) ⇒ <code>string</code>
    * [.examples()](#ServerVariable+examples) ⇒ <code>Array.&lt;string&gt;</code>
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="ServerVariable+allowedValues"></a>

### serverVariable.allowedValues() ⇒ <code>Array.&lt;any&gt;</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+allows"></a>

### serverVariable.allows(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the variable. |

<a name="ServerVariable+hasAllowedValues"></a>

### serverVariable.hasAllowedValues() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+defaultValue"></a>

### serverVariable.defaultValue() ⇒ <code>string</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+hasDefaultValue"></a>

### serverVariable.hasDefaultValue() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+description"></a>

### serverVariable.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+examples"></a>

### serverVariable.examples() ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="Base+json"></a>

### serverVariable.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="Server"></a>

## Server ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Server](#Server) ⇐ [<code>Base</code>](#Base)
    * [.description()](#Server+description) ⇒ <code>string</code>
    * [.url()](#Server+url) ⇒ <code>string</code>
    * [.protocol()](#Server+protocol) ⇒ <code>string</code>
    * [.protocolVersion()](#Server+protocolVersion) ⇒ <code>string</code>
    * [.variables()](#Server+variables) ⇒ <code>Object.&lt;string, ServerVariable&gt;</code>
    * [.variable(name)](#Server+variable) ⇒ [<code>ServerVariable</code>](#ServerVariable)
    * [.security()](#Server+security) ⇒ [<code>Array.&lt;ServerSecurityRequirement&gt;</code>](#ServerSecurityRequirement)
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="Server+description"></a>

### server.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+url"></a>

### server.url() ⇒ <code>string</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+protocol"></a>

### server.protocol() ⇒ <code>string</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+protocolVersion"></a>

### server.protocolVersion() ⇒ <code>string</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+variables"></a>

### server.variables() ⇒ <code>Object.&lt;string, ServerVariable&gt;</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+variable"></a>

### server.variable(name) ⇒ [<code>ServerVariable</code>](#ServerVariable)
**Kind**: instance method of [<code>Server</code>](#Server)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the server variable. |

<a name="Server+security"></a>

### server.security() ⇒ [<code>Array.&lt;ServerSecurityRequirement&gt;</code>](#ServerSecurityRequirement)
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Base+json"></a>

### server.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="SubscribeOperation"></a>

## SubscribeOperation ⇐ [<code>Operation</code>](#Operation)
**Kind**: global class  
**Extends**: [<code>Operation</code>](#Operation)  

* [SubscribeOperation](#SubscribeOperation) ⇐ [<code>Operation</code>](#Operation)
    * [.isPublish()](#SubscribeOperation+isPublish) ⇒ <code>boolean</code>
    * [.isSubscribe()](#SubscribeOperation+isSubscribe) ⇒ <code>boolean</code>
    * [.kind()](#SubscribeOperation+kind) ⇒ <code>string</code>
    * [.summary()](#Operation+summary) ⇒ <code>string</code>
    * [.description()](#Operation+description) ⇒ <code>string</code>
    * [.id()](#Operation+id) ⇒ <code>string</code>
    * [.externalDocs()](#Operation+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
    * [.tags()](#Operation+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag)
    * [.bindings()](#Operation+bindings) ⇒ <code>Object</code>
    * [.binding(name)](#Operation+binding) ⇒ <code>Object</code>
    * [.messages()](#Operation+messages) ⇒ [<code>Array.&lt;Message&gt;</code>](#Message)
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="SubscribeOperation+isPublish"></a>

### subscribeOperation.isPublish() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="SubscribeOperation+isSubscribe"></a>

### subscribeOperation.isSubscribe() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="SubscribeOperation+kind"></a>

### subscribeOperation.kind() ⇒ <code>string</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+summary"></a>

### subscribeOperation.summary() ⇒ <code>string</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+description"></a>

### subscribeOperation.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+id"></a>

### subscribeOperation.id() ⇒ <code>string</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+externalDocs"></a>

### subscribeOperation.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+tags"></a>

### subscribeOperation.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag)
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+bindings"></a>

### subscribeOperation.bindings() ⇒ <code>Object</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+binding"></a>

### subscribeOperation.binding(name) ⇒ <code>Object</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="Operation+messages"></a>

### subscribeOperation.messages() ⇒ [<code>Array.&lt;Message&gt;</code>](#Message)
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Base+json"></a>

### subscribeOperation.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Tag"></a>

## Tag ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Tag](#Tag) ⇐ [<code>Base</code>](#Base)
    * [.name()](#Tag+name) ⇒ <code>string</code>
    * [.description()](#Tag+description) ⇒ <code>string</code>
    * [.externalDocs()](#Tag+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
    * [.json()](#Base+json) ⇒ <code>Object</code>

<a name="Tag+name"></a>

### tag.name() ⇒ <code>string</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
<a name="Tag+description"></a>

### tag.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
<a name="Tag+externalDocs"></a>

### tag.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
**Kind**: instance method of [<code>Tag</code>](#Tag)  
<a name="Base+json"></a>

### tag.json() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  