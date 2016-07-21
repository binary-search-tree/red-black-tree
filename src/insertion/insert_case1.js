
import { BLACK } from '..' ;
import { insert_case2 } from './insert_case2' ;

export function insert_case1(n)
{
 if (n.parent === null)
  n.color = BLACK;
 else
  insert_case2(n);
}
