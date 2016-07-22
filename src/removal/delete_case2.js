import { BLACK , RED , sibling , rotate_left , rotate_right } from '..' ;

import { delete_case3 } from './delete_case3' ;

export function delete_case2(n)
{
 const s = sibling(n);

 if (s.color === RED) {
  n.parent.color = RED;
  s.color = BLACK;
  if (n === n.parent.left)
   rotate_left(n.parent);
  else
   rotate_right(n.parent);
 }
 delete_case3(n);
}
