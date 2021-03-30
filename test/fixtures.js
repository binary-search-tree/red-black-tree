import {increasing as _inc, decreasing as _dec} from '@aureooms/js-compare';

export const increasing = (a, b) => _inc(a, b);
increasing.step = 1;
export const decreasing = (a, b) => _dec(a, b);
decreasing.step = -1;
