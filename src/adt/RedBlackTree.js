
import { RED , BLACK } from '..' ;
import { predecessor , successor } from '..' ;
import { insert , insert_case1 } from '..' ;
import { delete_one_child } from '..' ;
import { find } from '..' ;
import { Node } from '..' ;

export function RedBlackTree ( compare ) {

	this.compare = compare ;
	this.root = null ;

}

RedBlackTree.prototype.add = function ( value ) {
	if ( this.root === null ) {
		this.root = new Node( BLACK , value ) ;
	}
	else {
		const node = new Node( RED , value ) ;
		insert( this.compare , this.root , node ) ;
		insert_case1( node ) ; // should go case 2 directly
	}
} ;

RedBlackTree.prototype.find = function ( value ) {

	if ( this.root === null ) return null ;

	return find( this.compare , this.root , value ) ;

} ;

RedBlackTree.prototype.delete = function ( node ) {

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
		const succ = successor( node ) ;
		node.value = succ.value ;
		// delete successor node
		// note: this node can only have one non-leaf child
		//       because the tree is a red-black tree
		delete_one_child( pred ) ;
	}

	else {
		this.root = null ;
	}

} ;

RedBlackTree.prototype[Symbol.iterator] = function ( ) {

	if ( this.root !== null ) return inordertraversal( this.root ) ;

} ;
