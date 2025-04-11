import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <div className="relative -top-3">
            <Image src="/logo1.png" alt="logo" height={100} width={100} />
          </div>
          <h2 className="text-primary-100 ml-[-15px]">AIcruiter</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
