import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "わかさま",
  hobbies: ["映画", "ゲーム"]
};

//jsonplaceholderから取ってくるデータの各値の型を定義(しなければユーザーがundefinedに。)
//以下、todo.tsに移したためコメントアウト。
// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

export default function App() {
  //stateに対して型を指定するとき→<>を使用
  //todos状態変数(初期値は空の配列)と、その更新を行うためのsetTodos関数を定義
  //todosは、TodoTypeの配列であることをしめす
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    //Axios →自分のサーバーやサードパーティのサーバーに対して、データをフェッチする
    //リクエストを行うことができる PromiseベースのHTTPライブラリ
    //.thenでデータ取得後の処理
    //取得データの型を定義
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        //resの中の.dataに値が入る
        //setTodos関数でres.dataをtodos状態変数にセット
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        //Todo.tsxの処理呼び出し
        //titleにはtodoの中のtitle,useridにはuseridをうけわたし
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
