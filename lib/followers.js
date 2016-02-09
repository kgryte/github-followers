'use strict';

// MODULES //

var factory = require( './factory.js' );


// FOLLOWERS //

/**
* FUNCTION: followers( opts, clbk )
*	Gets a user's followers.
*
* @param {Object} opts - function options
* @param {String} [opts.token] - Github access token
* @param {String} [opts.username] - Github username
* @param {String} [opts.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Void}
*/
function followers( opts, clbk ) {
	factory( opts, clbk )();
} // end FUNCTION followers()


// EXPORTS //

module.exports = followers;
