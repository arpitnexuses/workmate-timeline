import Timeline from "@/components/timeline"

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Company Timeline</h1> */}
        <Timeline />
      </div>
    </main>
  )
}
