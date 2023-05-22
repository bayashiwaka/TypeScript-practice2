import { VFC } from "react";
import { TodoType } from "./types/todo";

//以下、todo.tsにうつしたためコメントアウト
// type TodoType = {
//   userId: number;
//   title: string;
//   //?を記述することで、このpropsの値は必須ではないことを明示的に書くことができる。
//   completed?: boolean;
// };

//propsで、親コンポーネントから値をうけつがれていないのにエラーにならない→バグに繋がる可能性
//しかるべき値がうけわたされていないとき、エラーとなるようにするためにpropsに型を指定
export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  //TodoTypeの中の、userId,title,completedの値を抜き出すよという記述。
  //Pickの他に、Omit(除く)という記述もある。その場合は、Omit<TodoType, "id"でidだけ省略する
  props //: Pick<TodoType, "userId" | "title" | "completed">
) => {
  //completedは、undifinedとして受け渡されることもあるので初期値をfalseと設定。
  const { title, userId, completed = false } = props;
  // completedがtrueなら完了、falseなら未完了と表示する
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
