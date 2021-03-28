import test from 'ava' ;

import { increasing , decreasing } from '@aureooms/js-compare' ;

import { list , range , sorted , head , iter , exhaust } from '@aureooms/js-itertools' ;

import { randint , shuffle } from '@aureooms/js-random' ;

import { RedBlackTree , _debug } from "../../../src/index.js" ;

import { bgRed, bgBlack } from 'chalk' ;

const red = bgRed;
const black = bgBlack;
const debug = _debug({red, black});

test( 'RedBlackTree::remove' , t => {

	const n = 10000 ;
	const reference = list( range( n ) ) ;
	shuffle( reference , 0 , n ) ;

	//const reference = [3,0,2,4,1];
	//const n = reference.length ;

	const tree = RedBlackTree.from( increasing , reference ) ;
	t.deepEqual( list( tree ) , sorted( increasing , reference ) , 'tree contains n items' ) ;

	//console.log(reference);

	const m = n / 2 | 0 ;

	for ( let i of range( m ) ) {
		const x = reference[i] ;
		t.truthy( tree.remove( x ) ) ;
		t.truthy( tree.get( x ) === null ) ;
	}

	const _rest = iter( reference ) ;
	exhaust( head( _rest , m ) ) ;
	const rest = sorted( increasing , _rest ) ;

	t.deepEqual( list( tree ) , rest , 'tree contains n - m last items' ) ;

	for ( let i of range( m , n ) ) {
		const x = reference[i] ;
		t.deepEqual( tree.get( x ) , x ) ;
	}

	t.deepEqual( list( tree ) , rest , 'tree contains n - m last items' ) ;

	for ( let i of range( m ) ) {
		const x = reference[i] ;
		t.truthy( tree.get( x ) === null ) ;
		tree.add( x ) ;
		t.truthy( tree.get( x ) === x ) ;
	}

	t.deepEqual( list( tree ) , sorted( increasing , reference ) , 'tree contains all n items' ) ;

	for ( let i of range( n ) ) {
		const x = reference[i] ;
		t.truthy( tree.remove( x ) ) ;
		t.truthy( tree.get( x ) === null ) ;
	}

	t.deepEqual( list( tree ) , [ ] , 'tree is empty' ) ;

});


test( 'delete root with right child' , t => {

	const tree = new RedBlackTree( increasing ) ;

	tree.add( 0 ) ;
	tree.add( 1 ) ;

	const repr1 = `(${black('L')}, ${black(0)}, (${black('L')}, ${red(1)}, ${black('L')}))` ;

	t.deepEqual( debug( tree.root ) , repr1 , 'debug string 1 is correct' ) ;

	tree.remove( 0 ) ;

	t.deepEqual( list( tree ) , [ 1 ] ) ;

	const repr2 = `(${black('L')}, ${black(1)}, ${black('L')})` ;

	t.deepEqual( debug( tree.root ) , repr2 , 'debug string 2 is correct' ) ;

});

test( 'delete root with left child' , t => {

	const tree = new RedBlackTree( increasing ) ;

	tree.add( 0 ) ;
	tree.add( -1 ) ;

	const repr1 = `((${black('L')}, ${red(-1)}, ${black('L')}), ${black(0)}, ${black('L')})` ;

	t.deepEqual( debug( tree.root ) , repr1 , 'debug string 1 is correct' ) ;

	tree.remove( 0 ) ;

	t.deepEqual( list( tree ) , [ -1 ] ) ;

	const repr2 = `(${black('L')}, ${black(-1)}, ${black('L')})` ;

	t.deepEqual( debug( tree.root ) , repr2 , 'debug string 2 is correct' ) ;

});

test( 'remove from empty tree' , t => {

	const tree = new RedBlackTree( increasing ) ;

	t.falsy( tree.remove( 0 ) ) ;

});

test( 'remove unexisting stuff' , t => {

	const tree = RedBlackTree.from( increasing , range( 100 ) ) ;

	t.falsy( tree.remove( Math.PI ) ) ;

});
