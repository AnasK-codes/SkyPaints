import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-center text-4xl text-primary mb-20">
          Voices from the Atelier
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Review Card 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-full border border-outline-variant/10 shadow-lg shadow-primary/5 flex items-center gap-6 max-w-md group hover:scale-105 transition-all">
            <Image
              alt="Portrait of a creative professional"
              width={64}
              height={64}
              className="rounded-full object-cover ring-2 ring-secondary-fixed/50"
              src="/images/review-1.png"
            />
            <div>
              <p className="text-primary italic leading-tight">
                &quot;The texture is unlike anything else. It feels organic,
                almost alive.&quot;
              </p>
              <p className="mt-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                Rahul S. — Interior Designer
              </p>
            </div>
          </div>
          {/* Review Card 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-full border border-outline-variant/10 shadow-lg shadow-primary/5 flex items-center gap-6 max-w-md group hover:scale-105 transition-all">
            <Image
              alt="Portrait of a young woman"
              width={64}
              height={64}
              className="rounded-full object-cover ring-2 ring-secondary-fixed/50"
              src="/images/review-2.png"
            />
            <div>
              <p className="text-primary italic leading-tight">
                &quot;Midnight Mist transformed my bedroom into a cocoon of
                peace.&quot;
              </p>
              <p className="mt-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                Priya M. — Homeowner
              </p>
            </div>
          </div>
          {/* Review Card 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-full border border-outline-variant/10 shadow-lg shadow-primary/5 flex items-center gap-6 max-w-md group hover:scale-105 transition-all">
            <Image
              alt="Portrait of an elegant woman"
              width={64}
              height={64}
              className="rounded-full object-cover ring-2 ring-secondary-fixed/50"
              src="/images/review-3.png"
            />
            <div>
              <p className="text-primary italic leading-tight">
                &quot;Coverage was perfect. Two coats and the room looks like a
                museum.&quot;
              </p>
              <p className="mt-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                Anjali P. — Artist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
