import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//FunctionComponent(FC):関数コンポーネントの型
//VFC: チルドレンを含まないFCの型
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
