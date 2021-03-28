import test from 'ava' ;

import { increasing , decreasing } from '@aureooms/js-compare' ;

import { list , range , sorted } from '@aureooms/js-itertools' ;

import { shuffle } from '@aureooms/js-random' ;

import { RedBlackTree } from "../../../src/index.js" ;

test( 'RedBlackTree::range' , t => {

	for ( const [ s , compare ] of [ [ 1 , increasing ] , [ -1 , decreasing ] ] ) {

		const n = 10000 ;
		const reference = range( n ) ;
		shuffle( reference , 0 , n ) ;

		const tree = RedBlackTree.from( compare , reference ) ;

		const x = ( a , b ) => t.deepEqual( list( tree.range( a , b ) ) , list( range( a , b , s ) ) ) ;

		x( 0 , n ) ;
		x( 10 , 20 ) ;
		x( 20 , 10 ) ;
		x( 7 , 13 ) ;
		x( 13 , 7 ) ;
		x( n - 1 , -1 ) ;
		x( 10 , 10 ) ;

	}

});
