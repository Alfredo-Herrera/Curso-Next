import Link from 'next/link'
import { useRouter } from 'next/router';
import { FC } from 'react'

interface PropsLink {
    text: string;
    href: string;
}

const styleActive = {
    color: "#0070f3",
    textDecoration: "underline"
}

const ActiveLink: FC <PropsLink> = ({href, text}) => {
    const { asPath } = useRouter();
    console.log("🚀 ~ file: ActiveLink.tsx ~ line 17 ~ router", asPath)
  return (
    <Link href={href} legacyBehavior>
        <a style={asPath === href ? styleActive : {}}>{text}</a>
    </Link>
  )
}

export default ActiveLink;
