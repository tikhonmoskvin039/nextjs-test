import Link from "next/link";
import React, { FC } from "react";

interface AProps {
  href: string;
  text: string;
}

const A: FC<AProps> = ({ href, text }) => {
  return <Link href={href}>{text}</Link>;
};

export default A;
