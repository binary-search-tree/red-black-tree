import chalk from 'chalk' ;

import { BLACK } from '..' ;

export function debug ( node ) {

	if ( node.isleaf( ) ) return chalk.bgBlack('L') ;

	const repr = node.color === BLACK ? chalk.bgBlack(node.value) : chalk.bgRed( node.value ) ;

	return `(${debug(node.left)}, ${repr}, ${debug(node.right)})` ;

}
