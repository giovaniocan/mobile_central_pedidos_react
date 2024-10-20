import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export default function Home() {

  return (
    <div className="h-screen w-screen flex flex-col items-center relative">
      <div className="flex justify-center gap-6 items-center absolute w-full text-black bg-orange-300 h-20 ">
          <Icon icon="iconoir:bell" className='text-2xl'/>
          <span className="font-roboto font-medium text-lg">Suas rotas foram atualizadas</span>
      </div>
      <iframe 
        className="w-full h-full" 
        src="https://www.google.com/maps/d/u/0/embed?mid=1oazaH0vr13Rl5mXoABplfKjCPItpjLo&ehbc=2E312F&output=embed&hl=pt-BR"
      >
      </iframe>
      <Button className='absolute w-4/5 bottom-20 h-14 text-lg'>
        Começar viagem
      </Button>
    </div>
  );
}
