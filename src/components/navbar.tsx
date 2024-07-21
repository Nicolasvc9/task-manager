import Link from "next/link";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex justify-between py-5">
      <Link href="/">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          GESTION DE TAREAS
        </h1>
      </Link>

      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
          Crear Nueva Tarea
        </Link>
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          Listar Tareas
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
