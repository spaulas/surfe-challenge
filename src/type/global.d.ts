// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExplicitAny = any;

export type ValueOf<T> = T[typeof T];

type RootReducer = typeof import("./redux/reducers").rootReducer;
export type RootReducerState = {
  [P in keyof RootReducer]: ReturnType<RootReducer[P]>;
};

export type InputElement = {
  target: {
    value: string;
  };
  nativeEvent: InputElement
};

export type Error = {
  response?: {
    data?: {
      error?: string;
      code?: number;
    };
    status?: number;
  };
};
