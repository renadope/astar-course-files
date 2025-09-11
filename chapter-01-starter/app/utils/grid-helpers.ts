import type { Nullish } from '~/types/helpers';
import type { Pos } from '~/types/pathfinding';
import { isNullOrUndefined } from '~/utils/helpers';

export function isNodePassable(val: number): boolean {
  return Number.isFinite(val) && val > 0;
}

export function stringifyPos(...pos: number[]): string {
  return pos.join(',');
}

export function isSamePos(a?: Nullish<Pos>, b?: Nullish<Pos>): boolean {
  return isValidPos(a) && isValidPos(b) && a[0] === b[0] && a[1] === b[1];
}

export function isValidPos(pos?: Nullish<Pos>): pos is Pos {
  return (
    !isNullOrUndefined(pos) &&
    Array.isArray(pos) &&
    pos.length === 2 &&
    Number.isInteger(pos[0]) &&
    Number.isInteger(pos[1]) &&
    pos[0] >= 0 &&
    pos[1] >= 0
  );
}
