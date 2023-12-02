import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-2">
      <Link href={"products/4"} className="btn btn-accent">
        Product 4
      </Link>
      <Link href={"products/7"} className="btn btn-accent">
        Product 7
      </Link>
      <Link href={"products/8"} className="btn btn-accent">
        Product 8
      </Link>
      <Link href={"products/11"} className="btn btn-accent">
        Product 11
      </Link>
    </div>
  );
};

export default page;
