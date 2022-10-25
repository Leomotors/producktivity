import { MyPage } from "$core/@types";
import { LandingNavbar } from "$core/components";

const Login: MyPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-800">
      <LandingNavbar></LandingNavbar>
      <div className="mt-32 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white mb-8">Sign up</h1>
        {/* <FormInput name="Username" />
        <FormInput name="Password" /> */}
        <div className="ml-6 rounded-md py-2 px-6 text-xl text-white bg-red-300">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Login;
