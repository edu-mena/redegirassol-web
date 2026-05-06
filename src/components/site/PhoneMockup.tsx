export const PhoneMockup = () => (
  <div
    className="relative mx-auto w-[260px] h-[540px] rounded-[44px] bg-[#0a0a0a] border-[10px] border-[#1a1a1a] overflow-hidden"
    style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)" }}
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
    <div className="absolute inset-0 bg-[#0a0a0a] p-5 pt-10 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="font-display text-white font-bold text-sm">Girassol</span>
        <span className="h-2 w-2 rounded-full bg-primary" />
      </div>
      <div className="rounded-2xl h-32 relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-[10px] font-semibold uppercase tracking-wider opacity-90">Ao Vivo</div>
          <div className="font-display font-bold text-sm">TV Girassol</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["TV", "FM", "News", "Play", "Place", "+"].map((t) => (
          <div key={t} className="aspect-square rounded-xl bg-white/5 border border-white/10 grid place-items-center text-white/80 text-xs font-semibold">
            {t}
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 mt-auto">
        <div className="text-[10px] uppercase font-semibold tracking-wider text-primary">Tendência</div>
        <div className="text-white text-xs mt-1">Notícias do dia · Angola</div>
      </div>
    </div>
  </div>
);
