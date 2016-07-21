
import { Node } from '..' ;
import { RED , BLACK } from '..' ;
import { predecessor , successor } from '..' ;
import { insert , insert_case2 } from '..' ;
import { delete_one_child } from '..' ;
import { find } from '..' ;
import { inordertraversal } from '..' ;

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

	find ( value ) {

		if ( this.root === null ) return null ;

		return find( this.compare , this.root , value ) ;

	}

	delete ( node ) {

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

	}

	*[Symbol.iterator] ( ) {

		if ( this.root !== null ) yield* inordertraversal( this.root ) ;

	}

}
