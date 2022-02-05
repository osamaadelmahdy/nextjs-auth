import React from "react";
import { getProviders, signIn as sign } from "next-auth/react";

function signin({ providers }) {
  return (
    <div className="felx flex-col  items-center w-full h-[100vh]">
      {Object.values(providers).map((provider) => (
        <div
          className="flex w-full h-[100vh] justify-center items-center"
          key={provider.name}
        >
          <button
            className="border-2 border-blue-500 font-semibold flex items-center bg-white text-blue-500 p-3 rounded-lg  "
            onClick={() => sign(provider.id, { callbackUrl: "/" })}
          >
            <img src="/google.svg" className="h-7 pr-2" />
            Sign In with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
export default signin;
