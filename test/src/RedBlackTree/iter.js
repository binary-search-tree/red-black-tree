import test from 'ava' ;

import { increasing , decreasing } from 'aureooms-js-compare' ;

import { list , range } from 'aureooms-js-itertools' ;

import { RedBlackTree } from '../../../src' ;

test( 'RedBlackTree::Symbol.iterator' , t => {

	for ( const compare of [ increasing , decreasing ] ) {

		const tree = new RedBlackTree( compare ) ;

		const a1 = list( tree ) ;

		t.deepEqual( a1.length , 0 , 'tree contains 0 elements' ) ;

		const n = 10000 ;
		const reference = [ ] ;

		for ( let i of range( n ) ) {
			const x = Math.random() ;
			tree.add( x ) ;
			reference.push( x ) ;
		}

		reference.sort(compare);

		const a2 = list( tree ) ;

		t.deepEqual( a2.length , n , `tree contains ${n} elements` ) ;
		t.deepEqual( a2 , reference , 'tree is sorted' ) ;

	}

});
