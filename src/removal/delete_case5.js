
import { BLACK , RED , sibling , rotate_right , rotate_left } from '..' ;

import { delete_case6 } from './delete_case6' ;

export function delete_case5(n)
{
 const s = sibling(n);

 if  (s.color === BLACK) { /* this if statement is trivial,
due to case 2 (even though case 2 changed the sibling to a sibling's child,
the sibling's child can't be red, since no red parent can have a red child). */
/* the following statements just force the red to be on the left of the left of the parent,
   or right of the right, so case six will rotate correctly. */
  if ((n === n.parent.left) &&
      (s.right.color === BLACK) &&
      (s.left.color === RED)) { /* this last test is trivial too due to cases 2-4. */
   s.color = RED;
   s.left.color = BLACK;
   rotate_right(s);
  } else if ((n === n.parent.right) &&
             (s.left.color === BLACK) &&
             (s.right.color === RED)) {/* this last test is trivial too due to cases 2-4. */
   s.color = RED;
   s.right.color = BLACK;
   rotate_left(s);
  }
 }
 delete_case6(n);
}
