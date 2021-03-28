import test from 'ava' ;

import { increasing , decreasing } from '@aureooms/js-compare' ;

import { range } from '@aureooms/js-itertools' ;

import { RedBlackTree } from "../../../src/index.js" ;

test( 'RedBlackTree::get' , t => {

	for ( const compare of [ increasing , decreasing ] ) {

		const tree = new RedBlackTree( compare ) ;

		t.deepEqual( tree.get( 0 ) , null ) ;

		const n = 10000 ;
		const reference = [ ] ;

		for ( let i of range( n ) ) {
			const x = Math.random() ;
			tree.add( x ) ;
			reference.push( x ) ;
		}

		for ( let x of reference ) {
			t.deepEqual( tree.get( x ) , x ) ;
		}

		t.deepEqual( tree.get( -1 ) , null ) ;
		t.deepEqual( tree.get( n ) , null ) ;

	}

});
