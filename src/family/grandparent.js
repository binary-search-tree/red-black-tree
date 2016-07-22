export function grandparent ( n ) {

	//assert((n !== null) && (n.parent !== null));
	//We only call this function when n HAS a grandparent
	return n.parent.parent;

}
