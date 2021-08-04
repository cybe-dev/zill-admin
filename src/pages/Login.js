import { FiLock, FiUser } from "react-icons/fi";
import Alert from "../components/Alert";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export default function Login() {
  return (
    <div className="bg-background min-h-screen flex justify-center items-center">
      <div className="w-full lg:w-3/4 xl:w-3/5 flex rounded bg-white-100 h-96 m-8">
        <div className="hidden lg:block lg:w-1/2 xl:w-7/12"></div>
        <div className="flex-1 p-8 border-l border-white-200">
          <h1 className="montserrat-alternates text-black-100 font-bold text-2xl">
            Login
          </h1>
          <h2>Silahkan masuk ke akun anda</h2>
          <form className="mt-6">
            <Alert className="mb-3 text-center">Autentikasi gagal</Alert>
            <TextInput
              left={<FiUser size={16} />}
              placeholder="Username"
              type="text"
              containerClassName="mb-3"
            />
            <TextInput
              left={<FiLock size={16} />}
              placeholder="Password"
              type="password"
              containerClassName="mb-3"
            />
            <Button type="button" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
