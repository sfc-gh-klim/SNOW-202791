/**
 * Add two numbers
 * @customfunction
 * @param {number} first First number
 * @param {number} second Second number
 * @returns {number} The sum of the two numbers.
 */
function add(first, second) {
  return first + second;
}

/**
 * Displays the current time once a second
 * @customfunction
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
function clock(invocation) {
  const timer = setInterval(() => {
    const time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Returns the current time
 * @returns {string} String with the current time formatted for the current locale.
 */
function currentTime() {
  return new Date().toLocaleTimeString();
}

/**
 * Increments a value once a second.
 * @customfunction
 * @param {number} incrementBy Amount to increment
 * @param {CustomFunctions.StreamingInvocation<number>} invocation
 */
function increment(incrementBy, invocation) {
  let result = 0;
  const timer = setInterval(() => {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param {string} message String to write.
 * @returns String to write.
 */
function logMessage(message) {
  console.log(message);

  return message;
}
// Load the Snowflake Node.js driver.

/**
 * @customfunction
 * @returns {string} if the function runs
 */
function sfc() {
  console.log('1');
  var snowflake = require('snowflake-sdk');
  console.log('3');
  var response = 'Run '
  console.log('4');
  snowflake.configure({insecureConnect: true});
  //console.log(snowflake);
  //console.trace();
  console.log('5');
  snowflake.configure({logLevel: 'trace'});
  console.log('6');
  //console.trace();
  var sfconnection = snowflake.createConnection({
    account: '',
    username: '',
    password: ''
    });
  console.log(sfconnection);
  console.log('6');
  sfconnection.connect(
    function(err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message);
            response = response + 'failed';
        }
        else {
            console.log('Successfully connected to Snowflake.');
            // Optional: store the connection ID.
            connection_ID = conn.getId();
            console.log('Connection ID: ' + connection_ID);
            response = response + 'succeeded';
        }
    }
  );
  return response;
}
