import { BergstenButton, bergstenContainer } from "@/components/demos/bergsten/BergstenUi";
import { bergsten, bergstenPaths } from "@/demos/bergsten/content";

export default function BergstenNotFound() {
  return (
    <div className={`${bergstenContainer} py-28 lg:py-40`}>
      <p className="font-bergsten text-xl text-bergsten-green">404</p>
      <h1 className="mt-4 font-bergsten text-5xl font-semibold tracking-[-0.03em]">{bergsten.notFound.title}</h1>
      <p className="mt-6 max-w-md text-bergsten-muted">{bergsten.notFound.body}</p>
      <BergstenButton href={bergstenPaths.home} className="mt-10">
        {bergsten.notFound.back}
      </BergstenButton>
    </div>
  );
}
