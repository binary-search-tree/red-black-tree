import test from 'ava' ;

import { increasing , decreasing } from 'aureooms-js-compare' ;

import { list , range , sorted , head , iter , exhaust } from 'aureooms-js-itertools' ;

import { randint , shuffle } from 'aureooms-js-random' ;

import { RedBlackTree , debug } from '../../src' ;

import chalk from 'chalk' ;

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
		const node = tree.find( x ) ;
		t.truthy( tree.remove( x ) ) ;
		t.truthy( tree.find( x ) === null ) ;
	}

	const _rest = iter( reference ) ;
	exhaust( head( _rest , m ) ) ;
	const rest = sorted( increasing , _rest ) ;

	t.deepEqual( list( tree ) , rest , 'tree contains n - m last items' ) ;

	for ( let i of range( m , n ) ) {
		const x = reference[i] ;
		const node = tree.find( x ) ;
		t.truthy( node !== null ) ;
		t.deepEqual( node.value , x ) ;
	}

	t.deepEqual( list( tree ) , rest , 'tree contains n - m last items' ) ;

	for ( let i of range( m ) ) {
		const x = reference[i] ;
		t.truthy( tree.find( x ) === null ) ;
		tree.add( x ) ;
		const node = tree.find( x ) ;
		t.truthy( node !== null ) ;
		t.truthy( node.value === x ) ;
	}

	t.deepEqual( list( tree ) , sorted( increasing , reference ) , 'tree contains all n items' ) ;

	for ( let i of range( n ) ) {
		const x = reference[i] ;
		const node = tree.find( x ) ;
		t.truthy( tree.remove( x ) ) ;
		t.truthy( tree.find( x ) === null ) ;
	}

	t.deepEqual( list( tree ) , [ ] , 'tree is empty' ) ;

});


test( 'delete root with right child' , t => {

	const tree = new RedBlackTree( increasing ) ;

	tree.add( 0 ) ;
	tree.add( 1 ) ;

	const repr1 = `(${chalk.bgBlack('L')}, ${chalk.bgBlack(0)}, (${chalk.bgBlack('L')}, ${chalk.bgRed(1)}, ${chalk.bgBlack('L')}))` ;

	t.deepEqual( debug( tree.root ) , repr1 , 'debug string 1 is correct' ) ;

	tree.remove( 0 ) ;

	t.deepEqual( list( tree ) , [ 1 ] ) ;

	const repr2 = `(${chalk.bgBlack('L')}, ${chalk.bgBlack(1)}, ${chalk.bgBlack('L')})` ;

	t.deepEqual( debug( tree.root ) , repr2 , 'debug string 2 is correct' ) ;

});

test( 'delete root with left child' , t => {

	const tree = new RedBlackTree( increasing ) ;

	tree.add( 0 ) ;
	tree.add( -1 ) ;

	const repr1 = `((${chalk.bgBlack('L')}, ${chalk.bgRed(-1)}, ${chalk.bgBlack('L')}), ${chalk.bgBlack(0)}, ${chalk.bgBlack('L')})` ;

	t.deepEqual( debug( tree.root ) , repr1 , 'debug string 1 is correct' ) ;

	tree.remove( 0 ) ;

	t.deepEqual( list( tree ) , [ -1 ] ) ;

	const repr2 = `(${chalk.bgBlack('L')}, ${chalk.bgBlack(-1)}, ${chalk.bgBlack('L')})` ;

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
