"use client"

export default function BrideGroom({ data }: any) {
  return (
    <section>
      <h2>{data.mempelaiPria}</h2>
      <h2>{data.mempelaiWanita}</h2>
    </section>
  )
}
