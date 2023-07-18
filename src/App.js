import {useState} from "react";
import {Card} from "./components/Card";

export const App = () => {
  const [isAdmin,setIsAdmin] = useState(false);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者ではありません</span>}
      <button onClick = {onClickSwitch}>切り替え</button>
      <Card isAdmin = {isAdmin} />
    </div>
  );
};