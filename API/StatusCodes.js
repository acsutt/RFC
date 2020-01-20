let HTTP = {
    "OK": 200, //The request completed successfully
    "CREATED": 201, //The entity was created successfully
    "NO_CONTENT": 204, //The request completed successfully but returned no content
    "NOT_MODIFIED": 304, //The entity was not modified (no action was taken)
    "BAD_REQUEST": 400, //The request was improperly formatted, or the server couldn't understand it
    "UNAUTHORIZED": 401, //The Authorization header was missing or invalid
    "FORBIDDEN": 403, //The Authorization token you passed did not have permission to the resource
    "NOT_FOUND": 404, //The resource at the location specified doesn't exist.
    "TIMEOUT": 408, //The client didn’t produce a request within the time that the server was prepared to wait
    "GONE": 410, //The file was removed from the server
    "METHOD_NOT_ALLOWED": 405, //The HTTP method used is not valid for the location specified
    "TOO_MANY_REQUESTS": 429, //You've made too many requests
    "SERVER_ERROR": 500, //The server had an error processing your request
    "GATEWAY_UNAVAILABLE": 502, //There was not a gateway available to process your request. Wait a bit and retry
  }
  let JSON = {
      "UNKNOWN_USER": { code: 10002, message: "User not found" }, //The user couldn't be found.
      "UNKNOWN_ENDPOINT": { code: 20001, message: "Oops, Looks like you hit a roadblock!" }, //Endpoint not found   
      "NO_USERS": { code: 30001, message: "Woah, No users found." }, //No users in the database
      "NO_QUESTIONS": { code: 30002, message: "No questions found." }, //No questions in the database
      "INVALID_USER_PARAM": { code: 40002, message: "Couldn't find the username in the URL. Please try again!" }, //No username in route.
      "INVALID_RESPONSES_BODY": { code: 40001, message: "The body provided didn't provide a response. :/" } //The body provided didn't have a response property
  }
  Object.freeze(HTTP);
  Object.freeze(JSON);
  
  module.exports = {
    "HTTP": HTTP,
    "JSON": JSON,
  };