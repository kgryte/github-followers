'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );
var merge = require( 'utils-merge2' )();
var get = require( '@kgryte/github-get' );
var validate = require( './validate.js' );
var defaults = require( './defaults.json' );


// FACTORY //

/**
* FUNCTION: factory( options, clbk )
*	Returns a function for fetching a user's followers.
*
* @param {Object} options - function options
* @param {String} [options.token] - Github access token
* @param {String} [options.username] - Github username
* @param {String} [options.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Function} function for getting a user's followers
*/
function factory( options, clbk ) {
	var opts;
	var err;
	opts = merge( {}, defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	if (
		opts.token === void 0 &&
		opts.username === void 0
	) {
		throw new Error( 'invalid input argument. Must provide a username or, to get an authenticated user\'s followers, an access token.' );
	}
	if ( opts.username ) {
		opts.pathname += 'users/' + opts.username + '/';
	} else {
		opts.pathname += 'user/';
	}
	opts.pathname += 'followers';
	/**
	* FUNCTION: followers()
	*	Gets a user's followers.
	*
	* @returns {Void}
	*/
	return function followers() {
		get( opts, done );
		/**
		* FUNCTION: done( error, data, info )
		*	Callback invoked after resolving resources.
		*
		* @private
		* @param {Error|Null} error - error object
		* @param {Object[]} data - query data
		* @param {Object} info - response info
		* @returns {Void}
		*/
		function done( error, data, info ) {
			error = error || null;
			data = data || null;
			info = info || null;
			clbk( error, data, info );
		} // end FUNCTION done()
	}; // end FUNCTION followers()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;