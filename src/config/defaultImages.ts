import binanceLogo from '/images/default/binance-logo.svg';
import dailyCipher from '/images/default/daily-cipher.svg';
import dailyCombo from '/images/default/daily-combo.svg';
import dailyReward from '/images/default/daily-reward.svg';
import dollarCoin from '/images/default/dollar-coin.svg';
import hamsterCoin from '/images/default/hamster-coin.svg';
import mainCharacter from '/images/default/main-character.svg';

export const defaultImages = {
    binanceLogo,
    dailyCipher,
    dailyCombo,
    dailyReward,
    dollarCoin,
    hamsterCoin,
    mainCharacter,
} as const;

export type GameImageKey = keyof typeof defaultImages;