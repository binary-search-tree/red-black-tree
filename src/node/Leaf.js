import { BLACK } from '..' ;

export function Leaf ( parent ) {
	this.color = BLACK ;
	this.parent = parent ;
}

Leaf.prototype.isleaf = function ( ) { return true ; } ;
