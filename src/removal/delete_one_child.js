
import { BLACK , RED , replace_node } from '..' ;

import { delete_case1 } from './delete_case1' ;

export function delete_one_child(n)
{
 /*
  * Precondition: n has at most one non-leaf child.
  */
 const child = n.right.isleaf() ? n.left : n.right;

 replace_node(n, child);
 if (n.color === BLACK) {
  if (child.color === RED)
   child.color = BLACK;
  else
   delete_case1(child);
 }
}
