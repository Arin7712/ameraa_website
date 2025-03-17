import React from 'react'
import Link from "next/link";

const YButton = ({text, padding}) => {
  return (
    <Link href="/fund-form" className={`bg-[#FFFB00] rounded-full py-4 ${padding}`}>{text}</Link>
  )
}

export default YButton
