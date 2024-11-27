import React from 'react';
import { useGameConfig } from '../hooks/useGameConfig';
import { GameImageKey } from '../config/defaultImages';

interface GameImageProps {
    imageKey: GameImageKey;
    alt: string;
    className?: string;
}

export const GameImage: React.FC<GameImageProps> = ({ imageKey, alt, className = '' }) => {
    const { images } = useGameConfig();
    
    return (
        <img 
            src={images[imageKey]} 
            alt={alt} 
            className={className}
        />
    );
};