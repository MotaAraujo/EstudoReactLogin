

import Button from "./components/Button/Button";
import Input from "./components/input/input";



export default function app() {

  
  return(
<div className="bg-slate-300 h-screen flex items-center justify-center">
    <div className="bg-white w-fit shadow-md p-10 rounded-md">
      <h1 className="text-center font-bold text-2xl mb-3 text-green-400">Login</h1>
      <form className="flex flex-col gap-5">
        <Input texto={"Email: "} tipo={"email"} placeholder={"Digite aqui o seu Email"}/>
        <Input texto={"Senha "} tipo={"password"} placeholder={"Digite aqui sua senha"}/>
        <Button texto={"Login"}/>
      </form>
    </div>
</div>
  );
}