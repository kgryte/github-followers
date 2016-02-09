'use strict';

var followers = require( './../lib' );

var opts = {
	'useragent': 'beep-boop-bop',
	'token': '<your_token_goes_here>'
};

followers( opts, onFollowers );

function onFollowers( error, results, info ) {
	if ( info ) {
		console.error( info );
	}
	if ( error ) {
		throw error;
	}
	console.log( results );
}