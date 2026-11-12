import Link from "next/link";
import { getFerrum } from "@/demos/ferrum/server";

export default async function FerrumNotFound() {

  const ferrum = await getFerrum();
  const ferrumPaths = ferrum.paths;
  return (
    <div className="mx-auto max-w-site px-5 py-28 sm:px-8 lg:px-10 lg:py-40">
      <p className="font-ferrum text-2xl font-bold text-ferrum-accent">404</p>
      <h1 className="mt-4 font-ferrum text-6xl leading-none font-bold uppercase">{ferrum.notFound.title}</h1>
      <p className="mt-6 max-w-md text-ferrum-muted">{ferrum.notFound.body}</p>
      <Link
        href={ferrumPaths.home}
        className="mt-10 inline-flex bg-ferrum-accent px-6 py-3 font-ferrum text-lg font-bold tracking-wide text-ferrum-ink uppercase"
      >
        {ferrum.notFound.back}
      </Link>
    </div>
  );
}
