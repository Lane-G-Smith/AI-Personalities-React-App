import { Dispatch, SetStateAction } from 'react';

export type ReactStateFunction<T> = Dispatch<SetStateAction<T>>;
