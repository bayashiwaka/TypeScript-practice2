export type User = {
  name: string;
  //趣味がない可能性を考慮し必須項目としない。
  //逆に複数あることも考慮し配列の型に指定。
  hobbies?: Array<String>;
};
