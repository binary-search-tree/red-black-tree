
import { BLACK } from '..' ;
import { insert_case3 } from './insert_case3' ;

export function insert_case2(n)
{
 if (n.parent.color === BLACK)
  return; /* Tree is still valid */
 else
  insert_case3(n);
}
