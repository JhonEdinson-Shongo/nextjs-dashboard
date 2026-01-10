'use client'

import Link, { useLinkStatus } from "next/link";

export default function Loading() {
  const { pending } = useLinkStatus()
  return (
    <>
      <p>Loading... {pending ? 'pending' : 'not pending'}</p>
    </>
  )
}