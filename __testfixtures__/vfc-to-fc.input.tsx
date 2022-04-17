import { useMemo, VFC, useCallback } from "react";

type Props = {
  foo: string;
};

export const A: VFC = (props) => {
  return null;
};

export const B: React.VFC = (props) => {
  return null;
};

export const C: VFC<Props> = (props) => {
  return null;
};

export const D: React.VFC<Props> = (props) => {
  return null;
};
