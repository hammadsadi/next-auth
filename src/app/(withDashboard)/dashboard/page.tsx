import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Loggedin User Email {session?.user?.email}
          </h1>
          <Image
            src={session?.user?.image}
            alt="sadi"
            width={100}
            height={100}
            className="mx-auto"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
