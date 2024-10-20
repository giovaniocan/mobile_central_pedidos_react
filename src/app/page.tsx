'use client';

import MyDrawer from '@/components/myDrawer';
import { Button } from '@/components/ui/button'; // Ajuste o caminho conforme sua estrutura de pastas
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Home() {
    const [startedDelivery, setStartedDelivery] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isButtonReadyToBeClicked, setIsButtonReadyToBeClicked] = useState(false);
    const [isPointADelivery, setIsPointADelivery] = useState(false);
    const [constWithPointIsInDrawer, setConstWithPointIsInDrawer] = useState('A');

    function handleOpenDeliveryHistory() {
      setIsDeliveryHistoryOpen(false)
    }

    function handleStartTrip() {
        setStartedDelivery(true);
        setIsDrawerOpen(true);
    }

    function handleOpenDrawerByTransparentButtonA() {
        setIsDrawerOpen(true);
        setIsButtonReadyToBeClicked(false);
        setConstWithPointIsInDrawer('A');
    }

    function handleOpenDrawerByTransparentButtonB() {
        setIsDrawerOpen(true);
        setIsButtonReadyToBeClicked(false);
        setConstWithPointIsInDrawer('B');
    }

    function closeDrawer() {
        setIsDrawerOpen(false);
        setIsButtonReadyToBeClicked(true);
        setIsPointADelivery(true);
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDeliveryHistoryOpen, setIsDeliveryHistoryOpen] = useState(false);

    function handleOpenMenu() {
        setIsMenuOpen(!isMenuOpen);
    
    }

    return (
        <>
            <div className="h-screen w-screen flex flex-col items-center relative overflow-hidden">
                <div className={`flex justify-center gap-6 items-center absolute w-full text-black bg-orange-300 h-20 transition-transform duration-500 ease-in-out ${!startedDelivery ? 'flex' : 'hidden'}`}>
                    <Icon icon="iconoir:bell" className='text-2xl' />
                    <span className="font-roboto font-medium text-lg">Suas rotas foram atualizadas</span>
                </div>

                <div className={`flex z-30 justify-between px-12 gap-6 items-center rounded-b-[1.8rem] absolute w-full text-white bg-orange-500 h-20 transition-transform duration-500 ease-in-out ${startedDelivery ? 'flex' : 'hidden'}`}>
                    <div className='flex gap-2 items-center'>
                        <Icon 
                            icon="carbon:user-avatar-filled" 
                            className="text-4xl"
                        />
                        <div className='flex flex-col justify-start'>
                            <span className="font-roboto font-medium text-base">João da Silva</span>
                            <span className="font-roboto font-light text-xs">075.852.445-12</span>
                        </div>
                    </div>
                    <Icon 
                        onClick={handleOpenMenu}
                        icon="icon-park-outline:hamburger-button" 
                        className="text-3xl"
                    />
                </div>

                <iframe 
                    className={`w-full h-full ${isMenuOpen ? 'hidden' : 'flex'}`} 
                    src="https://www.google.com/maps/d/u/0/embed?mid=1oazaH0vr13Rl5mXoABplfKjCPItpjLo&ehbc=2E312F&output=embed&hl=pt-BR"
                >
                </iframe>  

                <Button 
                    onClick={handleStartTrip}
                    className={`absolute w-4/5 bottom-20 h-14 text-lg transition-transform duration-500 ease-in-out ${!startedDelivery ? 'flex' : 'hidden'}`}
                >
                    Começar viagem
                </Button>

                <MyDrawer 
                    isDrawerOpen={isDrawerOpen}
                    closeDrawer={closeDrawer}
                    isPointADelivery={isPointADelivery}
                    constWithPointIsInDrawer={constWithPointIsInDrawer}
                />

                {isMenuOpen && (
                    <div className='mt-36 h-full px-12 flex flex-col gap-10 w-full bg-white'>
                        <div className={`flex justify-between shadow-md -m-4 p-6 ${isDeliveryHistoryOpen && 'hidden'}`} onClick={handleOpenDeliveryHistory}>
                            <div className='flex items-center gap-6'>
                                <Icon 
                                    icon="formkit:time" 
                                    className="text-4xl"  
                                    color='#FF7F00'
                                />
                                <span className='font-light text-lg text-gray-800'>Histórico</span>
                            </div>
                            <Icon 
                                icon="mingcute:right-line" 
                                className="text-4xl"  
                                color='#FF7F00'
                            />
                        </div>

                        {/* Aqui você pode incluir mais divs do histórico de entrega */}
                        <div className={`flex items-center justify-between -m-4 p-2 ${isDeliveryHistoryOpen ? 'hidden' : ''}`}>
                            <div className='flex items-center gap-2'>
                                <Icon 
                                    icon="iconoir:bell" 
                                    className='text-2xl' 
                                    color='#FF7F00'  
                                />
                                <span className='font-light text-base text-gray-800'>Atualização de rotas</span>
                            </div>
                            <span className='font-light text-base text-gray-800'>Segunda 20:30</span>
                        </div>
                        <div className={`flex items-center justify-between -m-4 p-2 ${isDeliveryHistoryOpen ? 'hidden' : ''}`}>
                            <div className='flex items-center gap-2'>
                                <Icon 
                                    icon="ic:baseline-logout"
                                    className='text-2xl' 
                                    color='#FF7F00'  
                                />
                                <span className='font-light text-base text-gray-800'>Entrada - Pantanal</span>
                            </div>
                            <span className='font-light text-base text-gray-800'>Segunda 20:25</span>
                        </div>
                        <div className={`flex items-center justify-between -m-4 p-2 ${isDeliveryHistoryOpen ? 'hidden' : ''}`}>
                            <div className='flex items-center gap-2'>
                                <Icon 
                                    icon="akar-icons:cart"
                                    className='text-2xl' 
                                    color='#FF7F00'  
                                />
                                <span className='font-light text-base text-gray-800'>Entrega - N 67</span>
                            </div>
                            <span className='font-light text-base text-gray-800'>Segunda 20:15</span>
                        </div>
                        <div className={`flex items-center justify-between -m-4 p-2 ${isDeliveryHistoryOpen ? 'hidden' : ''}`}>
                            <div className='flex items-center gap-2'>
                                <Icon 
                                    icon="akar-icons:cart"
                                    className='text-2xl' 
                                    color='#FF7F00'  
                                />
                                <span className='font-light text-base text-gray-800'>Entrega - N 65</span>
                            </div>
                            <span className='font-light text-base text-gray-800'>Segunda 20:05</span>
                        </div>
                        <div className={`flex items-center justify-between -m-4 p-2 ${isDeliveryHistoryOpen ? 'hidden' : ''}`}>
                            <div className='flex items-center gap-2'>
                                <Icon 
                                    icon="circum:logout"
                                    className='text-2xl' 
                                    color='#FF7F00'  
                                />
                                <span className='font-light text-base text-gray-800'>Entrega - N 62</span>
                            </div>
                            <span className='font-light text-base text-gray-800'>Segunda 19:45</span>
                        </div>
                    </div>
                )}

                <button 
                    className={`absolute bottom-48 left-20 w-32 h-32 ${isButtonReadyToBeClicked ? 'flex' : 'hidden'}`}
                    onClick={handleOpenDrawerByTransparentButtonA}
                >
                </button>
        
                <button 
                    className={`absolute bottom-96 left-44 w-32 h-32`}
                    onClick={handleOpenDrawerByTransparentButtonB}
                >
                </button>
            </div>
        </>
    );
}
