import { grandparent } from './grandparent' ;

/**
 * Computes the uncle of the input node when the grandparent is guaranteed to
 * exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
export function uncle ( node ) {
	const g = grandparent( node );
	// assert( g !== null ) ;
	// this can never happen
	if ( node.parent === g.left )
	  return g.right.isleaf( ) ? null : g.right ;
	else
	  return g.left.isleaf( ) ? null : g.left ;
}
