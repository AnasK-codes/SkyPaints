import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-center text-4xl text-primary mb-20">Voices from the Atelier</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Review Card 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-full border border-outline-variant/10 shadow-lg shadow-primary/5 flex items-center gap-6 max-w-md group hover:scale-105 transition-all">
            <Image alt="Portrait of a creative professional" width={64} height={64} className="rounded-full object-cover ring-2 ring-secondary-fixed/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRTIxYCeqGTgSVSZwbTqMPh2yEI-HTjpPnmLgAPVzkfKmP8xhdjVdhuzuD9nt_ervCW9QCNoR9pNSZZVMHCF0SPp8Uc_CKk7jNN2QdGxxotrArxpDNHbcDiITzbyVuL8RWYtvdMMpCfGr64gbzTzWpbv8Wiyy6qmAgw4Q29g-jmolaKfHOaAIVdCIiOwMkMZoPQJMrVuc41fSVu4SyAGY21oYkCxTKrZiZ2LvCR8EvPRkXjDZe-bsdNg8EzkNA4dZOUxpDtKGnLH4" />
            <div>
              <p className="text-primary italic leading-tight">&quot;The texture is unlike anything else. It feels organic, almost alive.&quot;</p>
              <p className="mt-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest">David K. — Interior Designer</p>
            </div>
          </div>
          {/* Review Card 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-full border border-outline-variant/10 shadow-lg shadow-primary/5 flex items-center gap-6 max-w-md group hover:scale-105 transition-all">
            <Image alt="Portrait of a young woman" width={64} height={64} className="rounded-full object-cover ring-2 ring-secondary-fixed/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6rAzXi9uFagY1B7yXRfyVmxPJ0-jgU6CySPhs-7626ffhjjS2ZIW2OR1Hf_OTgYSCYwBAJJ6IPLm0P6fatVC_RP4l2s9ev-oZcNEZ1PlrTEbJoWMYbkcLW_gvX1bRP4zXOtmSovNnn0KXxGvd5bVSqEVSNYo9Fjl-8p6SoBJP5aIFyQQScpIS3bHFL4uOZ-_aVcJGkGWthaMgIJV46lm1UMX7YD3LLZ2aDr58i040xV66JPc7RM-csd_32IcyEipDota0UG-KH7c" />
            <div>
              <p className="text-primary italic leading-tight">&quot;Midnight Mist transformed my bedroom into a cocoon of peace.&quot;</p>
              <p className="mt-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Sarah L. — Homeowner</p>
            </div>
          </div>
          {/* Review Card 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-full border border-outline-variant/10 shadow-lg shadow-primary/5 flex items-center gap-6 max-w-md group hover:scale-105 transition-all">
            <Image alt="Portrait of an elegant woman" width={64} height={64} className="rounded-full object-cover ring-2 ring-secondary-fixed/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiCAATshNaa1cG-YdYdTXYzs_VkMVyKJTK7k5eHd2P7Jvlh6BkcQg3Kk8tJSF7ssC6W9WwiXnl70fK_dd17s3JHx-zL70TD_KT0LFgld_iWOH1Oq1KRGkkmbFjQVrBqupQvwo42e_4UYaZXqFoHBVgSFEKpsbW43gMNM7bmrDyTmf-ymSbb3fobQUCchDsx4vDcHCXOjhTEeZ5ZRmJN7PkYpt5D4Ancx9sg93FFH28iFe9rcDrOarNvSoHC-AJKV35GaNcd3UZw5U" />
            <div>
              <p className="text-primary italic leading-tight">&quot;Coverage was perfect. Two coats and the room looks like a museum.&quot;</p>
              <p className="mt-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Elena R. — Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
