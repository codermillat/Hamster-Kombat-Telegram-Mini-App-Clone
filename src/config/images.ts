import { binanceLogo, dailyCipher, dailyCombo, dailyReward, dollarCoin, hamsterCoin, mainCharacter } from '../images';

export interface GameImages {
    binanceLogo: string;
    dailyCipher: string;
    dailyCombo: string;
    dailyReward: string;
    dollarCoin: string;
    hamsterCoin: string;
    mainCharacter: string;
}

export const defaultImages: GameImages = {
    binanceLogo,
    dailyCipher,
    dailyCombo,
    dailyReward,
    dollarCoin,
    hamsterCoin,
    mainCharacter,
};

// You can create custom image configurations by extending GameImages
export const createImageConfig = (customImages: Partial<GameImages>): GameImages => ({
    ...defaultImages,
    ...customImages,
});