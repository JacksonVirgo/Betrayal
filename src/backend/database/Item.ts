export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic' | 'Special' | 'Unique';

export interface Item {
    name: string;
    rarity: Rarity;
    cost?: number;
    description: string;
}