import React, { createContext, ReactNode } from 'react';
import { defaultImages, GameImageKey } from '../config/defaultImages';

interface GameConfig {
    images: Record<GameImageKey, string>;
}

interface GameConfigProviderProps {
    children: ReactNode;
    customImages?: Partial<Record<GameImageKey, string>>;
}

export const GameConfigContext = createContext<GameConfig | undefined>(undefined);

export const GameConfigProvider: React.FC<GameConfigProviderProps> = ({ 
    children, 
    customImages = {}
}) => {
    const images: Record<GameImageKey, string> = {
        ...defaultImages,
        ...customImages
    };

    return (
        <GameConfigContext.Provider value={{ images }}>
            {children}
        </GameConfigContext.Provider>
    );
};