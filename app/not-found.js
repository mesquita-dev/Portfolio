'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react";

export default function() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Image src='/404.svg' alt="Ilustração para o erro de 404" width={500} height={500}></Image>
      <h1 className="text-4xl font-bold mb-2">Parece que tropeçamos em um link quebrado.</h1>
      <p className="mb-6">Você está tentando entrar em uma página não existente, volte para a home page.</p>
      <Link href='/'>
        <Button className="flex items-center gap-2">
          <ArrowLeft color="#fff" size={16}/>
          Voltar para a home page
        </Button>
      </Link>
    </div>
  )
} 