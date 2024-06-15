export interface Desc<T> {
  label: string;
  value: T | any;
  source?: any;
  type: string;
  default?: T;
  require?: boolean;
  validator?: string;
  errorMsg?: string;
  disabled?: boolean;
  onChange?: string;
  [key: string]: any;
}

export interface CommonConfig {
  display: Desc<boolean>;
  width: Desc<string>;
  height: Desc<string>;
}
