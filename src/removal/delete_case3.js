import { BLACK , RED , sibling } from '..' ;

import { delete_case1 } from './delete_case1' ;
import { delete_case4 } from './delete_case4' ;

export function delete_case3(n)
{
 const s = sibling(n);
 //console.log(n.color, n.parent.color, s.color , s.isleaf());

 if ((n.parent.color === BLACK) &&
     (s.color === BLACK) &&
     (s.left.color === BLACK) &&
     (s.right.color === BLACK)) {
  s.color = RED;
  delete_case1(n.parent);
 }

 else
  delete_case4(n);
}
