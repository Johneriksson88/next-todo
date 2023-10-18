import { prisma } from "@/db";
import Link from "next/link";
import { todo } from "node:test";

export default async function Home() {
  const todos = await prisma.todo.findMany();
  // await prisma.todo.create({ data: { title: "test", complete: false } });
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 bg-amber-600
        text-slate-300 px-2 py-1 rounded
        hover:bg-amber-700 focus-within:bh-amber-700
        outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
