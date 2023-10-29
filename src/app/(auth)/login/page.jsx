import Link from "next/link";
import { Form } from "./form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-screen h-screen flex bg-white text-black font-montserrat">
      <div className="w-3/6">
        <div className="flex pt-7 pl-6">
          <Image src={"/images/logo.jpg"} alt="logo" width={45} height={25} />
          <h1 className="text-2xl font-bold text-[#112D48] ml-2">
            Sparrow<span className="text-[#19C20A]">AI</span>
          </h1>
        </div>
        <div>
          <div className="pl-6 mt-24 mb-24">
            <h2 className="text-5xl font-bold">Ввойдите в систему</h2>
          </div>
          <Image
            src={"/images/login.jpg"}
            alt="login"
            width={720}
            height={375}
          />
        </div>
      </div>
      <div className="sm:shadow-xl pl-20 sm:bg-[#ECE6E1] w-3/6 pt-52">
        <h1 className="font-semibold text-lg font-medium">
          Введите свои данные, для прохождения регистрации
        </h1>
        <Form />
        <p className="mt-5 mb-2">Создать учетную запись</p>
        <p>Забыл пароль</p>
      </div>
    </div>
  );
}
