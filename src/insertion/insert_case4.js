
import { rotate_left , rotate_right , grandparent } from '..' ;
import { insert_case5 } from './insert_case5' ;

export function insert_case4(n)
{
 const g = grandparent(n);

 if ((n === n.parent.right) && (n.parent === g.left)) {
  rotate_left(n.parent);

 /*
 * rotate_left can be the below because of already having *g =  grandparent(n)
 *
 * saved_p=g.left, *saved_left_n=n.left;
 * g.left=n;
 * n.left=saved_p;
 * saved_p.right=saved_left_n;
 *
 * and modify the parent's nodes properly
 */

  n = n.left;

 } else if ((n === n.parent.left) && (n.parent === g.right)) {
  rotate_right(n.parent);

 /*
 * rotate_right can be the below to take advantage of already having *g =  grandparent(n)
 *
 * saved_p=g.right, *saved_right_n=n.right;
 * g.right=n;
 * n.right=saved_p;
 * saved_p.left=saved_right_n;
 *
 */

  n = n.right;
 }
 insert_case5(n);
}
