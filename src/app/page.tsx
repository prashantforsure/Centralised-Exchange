import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Users, Radio, Headphones } from "lucide-react";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Navbar from "@/components/Navbar";


export default async function Component() {
  const session = await getServerSession(authOptions);
  if (session?.user.id) redirect("/home");

  return (
    <div className="flex min-h-screen flex-col bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGMEYwRjAiPjwvcmVjdD4KPC9zdmc+')]">
      <Navbar />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl/none">
                Let the majority choose the <span className="text-3xl font-bold tracking-tighter text-blue-500 sm:text-4xl md:text-5xl lg:text-6xl/none"> Music</span>.
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Empower your audience to curate your music stream. Connect with fans like never before.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={{
                  pathname: "/auth",
                  query: { authType: "signUp" },
                }}>
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" className="text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter text-gray-900 sm:text-3xl">
            Key Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 text-center">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-gray-900">Fan Interaction</h3>
              <p className="text-gray-500">Let fans choose the music.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center">
              <Radio className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-gray-900">Live Streaming</h3>
              <p className="text-gray-500">Stream with real-time input.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center">
              <Headphones className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-gray-900">High-Quality Audio</h3>
              <p className="text-gray-500">Crystal clear sound quality.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                Ready to Transform Your Streams?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                Join MusicStreamChoice today and create unforgettable experiences.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <Link href={{
                pathname: "/auth",
                query: {
                  authType: "signUp",
                },
              }}>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-gray-200 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500">
          © 2023 MusicStreamChoice. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs text-gray-500 transition-colors hover:text-primary" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-500 transition-colors hover:text-primary" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
