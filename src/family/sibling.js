export function sibling ( n ) {

	//assert((n !== null) && (n.parent !== null));
	//We only use this function when n HAS a sibling so this case can never
	//happen.

	return  n === n.parent.left ? n.parent.right : n.parent.left ;

}
