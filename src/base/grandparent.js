export function grandparent( n ){
 if ((n !== null) && (n.parent !== null))
  return n.parent.parent;
 else
  return null;
}
