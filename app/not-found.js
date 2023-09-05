import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Deu erro ai chefe</p>
      <Link href='/'>
        <Button>Voltar para a home page</Button>
      </Link>
    </div>
  )
} 