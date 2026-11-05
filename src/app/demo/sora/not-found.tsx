import { SoraButton, soraContainer } from "@/components/demos/sora/SoraUi";
import { sora, soraPaths } from "@/demos/sora/content";

export default function SoraNotFound() {
  return (
    <div className={`${soraContainer} py-28 text-center lg:py-40`}>
      <p className="font-sora-serif text-3xl text-sora-clay italic">404</p>
      <h1 className="mt-4 font-sora-serif text-6xl">{sora.notFound.title}</h1>
      <p className="mx-auto mt-6 max-w-md text-sora-muted">{sora.notFound.body}</p>
      <SoraButton href={soraPaths.home} className="mt-10">
        {sora.notFound.back}
      </SoraButton>
    </div>
  );
}
