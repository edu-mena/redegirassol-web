import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-3 group">
    <img src="/favicon.png" alt="Rede Girassol" width={40} height={40} className="h-9 w-9" />
    <span className={`font-display tracking-tight text-lg leading-none ${light ? "text-white" : "text-foreground"}`}>
      Rede <span className="font-bold">Girassol</span>
    </span>
  </Link>
);
