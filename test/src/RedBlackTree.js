import test from 'ava' ;

import { increasing , decreasing } from 'aureooms-js-compare' ;

import { list , range } from 'aureooms-js-itertools' ;

import { randint } from 'aureooms-js-random' ;

import { RedBlackTree } from '../../src' ;

test( 'RedBlackTree::find' , t => {

	const tree = new RedBlackTree( increasing ) ;

	t.truthy( tree.find( 0 ) === null ) ;

	const n = 10000 ;
	const reference = [ ] ;

	for ( let i of range( n ) ) {
		const x = randint( 0 , n ) ;
		tree.add( x ) ;
		reference.push( x ) ;
	}

	for ( let x of reference ) {
		const node = tree.find( x ) ;
		t.truthy( node !== null ) ;
		t.deepEqual( node.value , x ) ;
	}

	t.truthy( tree.find( -1 ) === null ) ;
	t.truthy( tree.find( n ) === null ) ;

});

test( 'RedBlackTree::Symbol.iterator' , t => {

	const tree = new RedBlackTree( increasing ) ;

	const a1 = list( tree ) ;

	t.deepEqual( a1.length , 0 , 'tree contains 0 elements' ) ;

	const n = 10000 ;
	const reference = [ ] ;

	for ( let i of range( n ) ) {
		const x = randint( 0 , n ) ;
		tree.add( x ) ;
		reference.push( x ) ;
	}

	reference.sort(increasing);

	const a2 = list( tree ) ;

	t.deepEqual( a2.length , n , `tree contains ${n} elements` ) ;
	t.deepEqual( a2 , reference , 'tree is sorted' ) ;

});
