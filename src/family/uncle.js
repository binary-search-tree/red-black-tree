import { grandparent } from './grandparent' ;

export function uncle ( n ) {
	const g = grandparent( n );
	// assert( g !== null ) ;
	// this can never happen
	if ( n.parent === g.left )
	  return g.right.isleaf( ) ? null : g.right ;
	else
	  return g.left.isleaf( ) ? null : g.left ;
}
