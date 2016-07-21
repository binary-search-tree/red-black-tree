
import { RED , BLACK , rotate_left , rotate_right , grandparent } from '..' ;

export function insert_case5(n)
{
 const g = grandparent(n);

 n.parent.color = BLACK;
 g.color = RED;
 if (n === n.parent.left)
  rotate_right(g);
 else
  rotate_left(g);
}
