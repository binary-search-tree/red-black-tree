import { grandparent } from './grandparent' ;

export function uncle(n){
 const g = grandparent(n);
 if (g === null)
  return null; // No grandparent means no uncle
 if (n.parent === g.left)
  return g.right.isleaf() ? null : g.right ;
 else
  return g.left.isleaf() ? null : g.left;
}
