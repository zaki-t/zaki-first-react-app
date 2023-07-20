import {useContext} from "react";
import {Card} from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {

  const {isAdmin,setIsAdmin} = useContext(AdminFlagContext);
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者ではありません</span>}
      <button onClick = {onClickSwitch}>切り替え</button>
      <Card isAdmin = {isAdmin} />
    </div>
  );
};