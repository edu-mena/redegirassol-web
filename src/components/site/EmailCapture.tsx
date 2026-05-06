import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export const EmailCapture = ({
  placeholder = "O seu email",
  cta = "Avisar-me",
  dark = false,
}: {
  placeholder?: string;
  cta?: string;
  dark?: boolean;
}) => {
  const [v, setV] = useState("");
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (v.includes("@")) setDone(true);
      }}
      className={`flex w-full max-w-md min-w-0 items-center gap-2 rounded-full p-1.5 ${
        dark ? "bg-white/5 border border-white/15" : "bg-white border border-border"
      }`}
    >
      <input
        value={v}
        onChange={(e) => setV(e.target.value)}
        type="email"
        required
        placeholder={placeholder}
        className={`min-w-0 flex-1 bg-transparent px-4 py-2 text-[15px] focus:outline-none ${
          dark ? "text-white placeholder:text-white/50" : "text-foreground placeholder:text-muted-foreground"
        }`}
      />
      <button type="submit" className="btn-primary !py-2.5 !px-5 !text-xs">
        {done ? (
          <>
            <Check size={14} /> Feito
          </>
        ) : (
          <>
            {cta} <ArrowRight size={14} />
          </>
        )}
      </button>
    </form>
  );
};
