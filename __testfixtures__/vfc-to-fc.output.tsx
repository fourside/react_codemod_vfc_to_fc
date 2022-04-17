import { useMemo, FC, useCallback } from "react";

type Props = {
  foo: string;
};

export const A: FC = (props) => {
  return null;
};

export const B: React.FC = (props) => {
  return null;
};

export const C: FC<Props> = (props) => {
  return null;
};

export const D: React.FC<Props> = (props) => {
  return null;
};
