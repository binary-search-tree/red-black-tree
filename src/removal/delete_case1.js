
import { delete_case2 } from './delete_case2' ;

import assert from 'assert' ;

export function delete_case1(n)
{
 if (n.parent !== null)
  delete_case2(n);
}
