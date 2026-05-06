import { Sparkles } from "lucide-react";
export const SoonBadge = ({ label = "Em Breve" }: { label?: string }) => (
  <span className="pill" style={{ background: "#6B2FA0", color: "#FFFFFF" }}>
    <Sparkles size={12} /> {label}
  </span>
);
