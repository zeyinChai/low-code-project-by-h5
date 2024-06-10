export interface Desc<T> {
  title: string;
  value: T;
  default?: T;
}

export interface CommonConfig {
  display: Desc<boolean>;
  width: Desc<string>;
  height: Desc<string>;
}
