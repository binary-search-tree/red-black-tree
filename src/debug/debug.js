import chalk from 'chalk' ;

import { BLACK } from '..' ;

/**
 * Recursively constructs a prettyprint string for the red-black tree rooted at
 * <code>root</code>.
 *
 * @param {Node} root - The root of the tree.
 * @returns {String}
 */
export function debug ( root ) {

	if ( root.isleaf( ) ) return chalk.bgBlack('L') ;

	const repr = root.color === BLACK ? chalk.bgBlack(root.key) : chalk.bgRed( root.key ) ;

	return `(${debug(root.left)}, ${repr}, ${debug(root.right)})` ;

}
