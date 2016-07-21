export function sibling(n)
{
 if ((n === null) || (n.parent === null))
  return null; // no parent means no sibling
 if (n === n.parent.left)
  return n.parent.right;
 else
  return n.parent.left;
}
