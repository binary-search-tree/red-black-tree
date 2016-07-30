import { BLACK , RED , sibling } from '..' ;

import { delete_case5 } from './delete_case5' ;

export function delete_case4(n)
{
 const s = sibling(n);
 //console.log( s ) ;

 if ((n.parent.color === RED) &&
     (s.color === BLACK) &&
     (s.left.color === BLACK) &&
     (s.right.color === BLACK)) {
  s.color = RED;
  n.parent.color = BLACK;
 } else
  delete_case5(n);
}
