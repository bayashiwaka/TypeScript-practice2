import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join("/")}</dd>
    </dl>
  );
};
//仮にhobbiesがなかった場合、エラーが起きる。
//ないものにたいしてjoinをすることはできないので、趣味がない場合の事も考え、
//hobbies?とすることでundefinedの場合はjoinの前で処理がとまる。
