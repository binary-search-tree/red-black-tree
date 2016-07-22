import { Leaf } from './Leaf' ;

export function Node ( color , value ) {
	this.color = color ;
	this.left = new Leaf( this ) ;
	this.right = new Leaf( this ) ;
	this.parent = null ;
	this.value = value ;
}

Node.prototype.isleaf = function ( ) { return false ; } ;
