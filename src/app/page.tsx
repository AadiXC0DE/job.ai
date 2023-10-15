import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn } from "lucide-react";
import ResumeUpload from "@/components/ui/ResumeUpload";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-7xl font-bold mr-3">Job.Ai</h1>
          <div className="flex items-center">
            <h1 className="mr-3 py-4 text-5xl font-semibold">
              Answering job questions made simpler!!
            </h1>
            <div className="pb-8 ">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Join hundreds of job professionals to instantly answer boring job
            application questions
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              <ResumeUpload />
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started! <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
