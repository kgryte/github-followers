'use strict';

// MODULES //

var tape = require( 'tape' );
var followers = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof followers, 'function', 'main export is a function' );
	t.end();
});

tape( 'module exports a factory method', function test( t ) {
	t.equal( typeof followers.factory, 'function', 'export includes a factory method' );
	t.end();
});
