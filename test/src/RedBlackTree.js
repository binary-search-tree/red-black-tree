import test from 'ava' ;

import { increasing , decreasing } from 'aureooms-js-compare' ;

import { issorted } from 'aureooms-js-sort' ;

import { list , range } from 'aureooms-js-itertools' ;

import { randint } from 'aureooms-js-random' ;

import { RedBlackTree } from '../../src' ;

test( 'RedBlackTree::Symbol.iterator' , t => {

	const tree = new RedBlackTree( increasing ) ;

	const a1 = list( tree ) ;

	t.deepEqual( a1.length , 0 , 'tree contains 0 elements' ) ;

	const n = 10000 ;

	for ( let i of range( n ) ) {
		tree.add( randint( 0 , n ) ) ;
	}

	const a2 = list( tree ) ;

	t.deepEqual( a2.length , n , `tree contains ${n} elements` ) ;
	t.deepEqual( issorted( increasing , a2 , 0 , n ) , n , 'tree is sorted' ) ;

});
