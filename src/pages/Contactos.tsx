import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Mail, Phone, MessageCircle, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Contactos = () => (
  <PageShell title="Contactos">
    <PageHero eyebrow="Fale Connosco" title={<>Vamos <span className="text-gradient">conversar.</span></>}
      subtitle="Estamos sempre disponíveis para si — ouvintes, parceiros, jornalistas e talentos." />

    <section className="container-x py-20 grid lg:grid-cols-2 gap-12">
      <div className="reveal space-y-6">
        {[
          { i: MapPin, t: "Rede Girassol HQ", d: "Av. 4 de Fevereiro, Luanda — Angola" },
          { i: Mail, t: "Email Geral", d: "geral@redegirassol.ao" },
          { i: Phone, t: "Telefone", d: "+244 222 000 000" },
          { i: MessageCircle, t: "WhatsApp", d: "+244 923 000 000" },
        ].map((c) => (
          <div key={c.t} className="flex gap-4 p-5 rounded-2xl border border-border bg-card card-lift">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center text-white shrink-0"><c.i size={20}/></div>
            <div>
              <div className="font-mono-accent text-[10px] uppercase tracking-wider text-muted-foreground">{c.t}</div>
              <div className="font-display font-bold mt-1">{c.d}</div>
            </div>
          </div>
        ))}
        <div className="flex gap-3 pt-4">
          {[Instagram, Facebook, Linkedin, Youtube].map((I, i) => (
            <a key={i} href="#" className="h-11 w-11 grid place-items-center rounded-full border border-border hover:bg-gradient-primary hover:text-white hover:border-transparent transition-all"><I size={16}/></a>
          ))}
        </div>
      </div>

      <form className="reveal rounded-2xl p-8 bg-surface-darker text-white space-y-4">
        <h2 className="font-display font-bold text-3xl mb-6">Envie-nos uma mensagem</h2>
        {["Nome", "Email"].map((p) => (
          <input key={p} placeholder={p} className="w-full rounded-pill bg-white/[0.04] border border-white/15 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-primary-glow"/>
        ))}
        <select className="w-full rounded-pill bg-white/[0.04] border border-white/15 px-5 py-3 text-sm focus:outline-none focus:border-primary-glow">
          <option>Assunto: Geral</option><option>Comercial</option><option>Imprensa</option><option>Carreiras</option>
        </select>
        <textarea rows={5} placeholder="Mensagem" className="w-full rounded-2xl bg-white/[0.04] border border-white/15 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-primary-glow"/>
        <button className="btn-primary w-full !py-4">Enviar</button>
      </form>
    </section>

    <section className="container-x pb-20">
      <div className="reveal aspect-[16/6] rounded-2xl bg-surface-darker overflow-hidden relative grain">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-highlight/20" />
        <div className="absolute inset-0 grid place-items-center text-white/70 font-mono-accent text-xs uppercase tracking-[0.3em]">Mapa · Luanda, Angola</div>
      </div>
    </section>
  </PageShell>
);
export default Contactos;
