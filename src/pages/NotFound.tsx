import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen bg-surface-darker text-white grid place-items-center relative overflow-hidden">
    <div className="absolute inset-0 bg-radial-amber"/>
    <div className="absolute inset-0 grain opacity-25"/>
    <div className="relative text-center px-6">
      <div className="font-display font-bold text-[18vw] leading-none text-gradient">404</div>
      <p className="font-display text-2xl mt-4">Esta página saiu do ar.</p>
      <Link to="/" className="btn-primary mt-10">Voltar à Rede</Link>
    </div>
  </div>
);
export default NotFound;
