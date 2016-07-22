
import { Node } from './Node' ;
import { RED , BLACK } from '..' ;
import { predecessor } from '..' ;
import { insert , insert_case2 } from '..' ;
import { delete_one_child } from '..' ;
import { search } from '..' ;
import { inordertraversal , rangetraversal } from '..' ;

export class RedBlackTree {

	constructor ( compare ) {

		this.compare = compare ;
		this.root = null ;

	}

	add ( value ) {
		if ( this.root === null ) {
			this.root = new Node( BLACK , value ) ;
		}
		else {
			const node = new Node( RED , value ) ;
			insert( this.compare , this.root , node ) ;
			insert_case2( node ) ;
		}
	}

	_search ( value ) {
		if ( this.root === null ) return null ;
		return search( this.compare , this.root , value ) ;
	}

	get ( value ) {
		const node = this._search( value ) ;
		return node === null ? null : node.value ;
	}

	has ( value ) {
		return this._search( value ) !== null ;
	}

	_delete ( node ) {

		if ( !node.left.isleaf() ) {
			// replace node's value with predecessor's value
			const pred = predecessor( node ) ;
			node.value = pred.value ;
			// delete predecessor node
			// note: this node can only have one non-leaf child
			//       because the tree is a red-black tree
			delete_one_child( pred ) ;
		}

		else if ( !node.right.isleaf() ) {
			// replace node's value with successor's value
			// If there is no left child, then there can only be one right
			// child.
			const succ = node.right ;
			node.value = succ.value ;
			// delete successor node
			// note: this node can only have one non-leaf child
			//       because the tree is a red-black tree
			delete_one_child( succ ) ;
		}

		else if ( node === this.root ) {
			this.root = null ;
		}

		else {
			delete_one_child( node ) ;
		}

	}

	remove ( value ) {

		const node = this._search( value ) ;
		if ( node === null ) return false ;

		this._delete( node ) ;
		return true ;

	}

	*range ( left , right ) {

		if ( this.root !== null ) yield* rangetraversal( this.compare , this.root , left , right ) ;

	}

	*values ( ) {

		if ( this.root !== null ) yield* inordertraversal( this.root ) ;

	}

	[Symbol.iterator] ( ) {

		return this.values() ;

	}

	static from ( compare , iterable ) {

		const tree = new RedBlackTree( compare ) ;

		for ( const element of iterable ) tree.add( element ) ;

		return tree ;

	}

}
