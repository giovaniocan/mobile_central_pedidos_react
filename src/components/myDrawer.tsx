import {
    Drawer,
    DrawerContent,
} from "@/components/ui/drawer";

import { Button } from '@/components/ui/button';

interface MyDrawerProps {
    isDrawerOpen: boolean;
    closeDrawer: () => void;
    isPointADelivery: boolean;
    constWithPointIsInDrawer: string;
}

const MyDrawer: React.FC<MyDrawerProps> = ({
    isDrawerOpen,
    closeDrawer,
    isPointADelivery,
    constWithPointIsInDrawer,
}) => {
    return (
        <Drawer open={isDrawerOpen} onClose={closeDrawer} aria-labelledby="dialog-title">
            <DrawerContent>
                <div className='h-1/2 flex mb-12 flex-col justify-center px-10 bg-white'>
                    <div className="w-14 h-[3px] rounded-full ml-32 bg-gray-400" />
                    <div className='flex flex-col gap-6 pt-14'>
                        <h2 className='text-2xl font-medium'>Parada {constWithPointIsInDrawer}</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between'>
                                <span className='font-medium text-lg'>N° Pedido</span>
                                <span className='font-medium text-lg'>54</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-medium text-lg'>Cliente</span>
                                <span className='font-medium text-lg'>Cleber</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-medium text-lg'>Endereço</span>
                                <span className='font-medium text-lg'>Av. tal da Silva, 36</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-medium text-lg'>Pagamento</span>
                                <span className='font-medium text-lg'>Pix</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-medium text-lg'>Horário previsto</span>
                                <span className='font-medium text-lg'>20h15</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-medium text-lg'>Status</span>
                                <span className="font-medium text-lg">{isPointADelivery ? 'Entregue' : 'Em rota'}</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        className='w-full mt-10 h-14 text-lg transition-transform duration-500 ease-in-out'
                        onClick={closeDrawer}
                    >
                        Confirmar entrega
                    </Button>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default MyDrawer;
