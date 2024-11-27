import { useContext } from 'react';
import { GameConfigContext } from '../context/GameConfigContext';

export const useGameConfig = () => {
    const context = useContext(GameConfigContext);
    if (!context) {
        throw new Error('useGameConfig must be used within a GameConfigProvider');
    }
    return context;
};