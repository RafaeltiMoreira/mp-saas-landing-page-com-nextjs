"use client";

import Image from "next/image";
import logo from "./assets/logo.svg";
import woman from "./assets/woman.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, MenuIcon, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <section className="container mx-auto text-center pb-20 sm:px-2 px-4">
        <nav className="flex justify-between items-center py-4">
          <Image src={logo} alt="Logotipo LivroSaas" />
          <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
            <DropdownMenuTrigger asChild>
              <button className="md:hidden cursor-pointer">
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Funcionamento</DropdownMenuItem>
              <DropdownMenuItem>Preço</DropdownMenuItem>
              <DropdownMenuItem className="flex justify-center">
                <Button className="w-full" variant={"bg-white"}>Login</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="items-center gap-1 hidden md:flex">
            <Button variant={"link"}>Funcionamento</Button>
            <Button variant={"link"}>Preço</Button>
            <Button variant={"bg-white"}>Login</Button>
          </div>
        </nav>
        <h1 className="md:text-6xl text-2xl font-bold mt-8 md:mt-16">Simplifique seus estudos</h1>
        <p className="text-gray-500 mt-4 text-sm sm:text-xs md:text-xl max-w-3xl mx-auto">Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</p>
        <form className="md:mt-16 mt-10">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Input placeholder="Coloque seu e-mail aqui" type="text" className="w-full sm:w-auto max-w-sm border border-gray-300" />
            <Button className="w-full sm:w-auto max-w-sm">Assine agora</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
        </form>
      </section>
      <section className="bg-white md:py-16 py-8 px-4 sm:px-2">
        <div className="container mx-auto">
          <h2 className="md:text-4xl text-2xl font-bold text-center">Quem funciona?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8"> {/* mx-24 xl:mx-80 flex flex-col md:flex-row items-center justify-center */}
            <Image src={woman} alt="Uma moça carregando caixas" />
            <ul className="md:text-2xl text-sm text-muted-foreground md:space-y-6 space-y-4 flex-shrink-0">
              {/*justify-between*/} <li className="flex items-center gap-2">Acesso a 1 ebook por mês <Check size={24} className="text-green-600" /></li>
              <li className="flex items-center gap-2">Curadoria especial <Check size={24} className="text-green-600" /></li>
              <li className="flex items-center gap-2">Cancele quando quiser <Check size={24} className="text-green-600" /></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:py-16 py-8 text-center px-4 sm:px-2">
        <h2 className="md:text-6xl text-2xl font-bold">Preço simples e transparente</h2> {/* md:mt-16 */}
        <p className="text-gray-500 mt-4 text-sm sm:text-xs md:text-xl max-w-3xl mx-auto">Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia.</p>

        <Card className="w-full sm:w-[350px] mx-auto text-left mt-10"> {/*w-[350px] mx-auto text-left md:mt-20 mt-10*/}
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Plano Pro Premium VIP</CardTitle>
            <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl md:text-4xl font-bold mb-8 mt-4">R$ 29<span className="font-normal text-lg text-muted-foreground">/mês</span></p>
            <ul>
              <li className="flex gap-2 text-muted-foreground"> <Check className="w-4 text-green-600" />1 ebook por mês</li>
              <li className="flex gap-2 text-muted-foreground"> <Check className="w-4 text-green-600" />Curadoria especial</li>
              <li className="flex gap-2 text-muted-foreground"> <Check className="w-4 text-green-600" />Acesso ilimitado</li>
              <li className="flex gap-2 text-muted-foreground"> <Check className="w-4 text-green-600" />Cancele a qualquer momento</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Assine agora</Button>
          </CardFooter>
        </Card>
      </section>
      <section className="bg-white md:py-16 py-10 text-center px-4 sm:px-2">
        <h2 className="md:text-6xl text-2xl font-bold md:mt-16 mt-8">Pronto para mudar sua vida?</h2>
        <p className="text-gray-500 mt-4 text-sm sm:text-xs md:text-xl max-w-3xl mx-auto">Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos.</p>
        <Button className="mt-10 w-full sm:w-96">Assine agora</Button>
        <p className="text-xs text-muted-foreground mt-2">Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
        <footer className="mt-16 border-t border-gray-300 pt-10">
          <Image src={logo} alt="Logotipo LivroSaas" className="mx-auto" />
          <p className="text-muted-foreground text-xs sm:text-sm mt-4">© 2024 LivroSaaS. Todos os direitos reservados.</p>
        </footer>
      </section>
    </main>
  );
}
