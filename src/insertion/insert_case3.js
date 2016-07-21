import { BLACK , RED , uncle , grandparent } from '..' ;
import { insert_case1 } from './insert_case1' ;
import { insert_case4 } from './insert_case4' ;

export function insert_case3(n)
{
 const u = uncle(n);

 if ((u !== null) && (u.color === RED)) {
  n.parent.color = BLACK;
  u.color = BLACK;
  const g = grandparent(n);
  g.color = RED;
  insert_case1(g);
 } else {
  insert_case4(n);
 }
}
