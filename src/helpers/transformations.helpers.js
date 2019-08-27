import { find } from '../utils';

export const hasZeroSizeTransformation = (transformations) => find(transformations, t => t.width === 0 || t.height === 0);

