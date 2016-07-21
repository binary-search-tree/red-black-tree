
import { BLACK , RED , sibling , rotate_right , rotate_left } from '..' ;

export function delete_case6(n)
{
 const s = sibling(n);

 s.color = n.parent.color;
 n.parent.color = BLACK;

 if (n === n.parent.left) {
  s.right.color = BLACK;
  rotate_left(n.parent);
 } else {
  s.left.color = BLACK;
  rotate_right(n.parent);
 }
}
