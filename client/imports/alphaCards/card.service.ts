import { Injectable } from '@angular/core';
import { ALPHACARDS} from './mock-cards.ts';
import {AlphaCard} from './alpha-card.ts';
@Injectable()
export class CardService {
    getCards() {
        return Promise.resolve(ALPHACARDS);
    }
    addCard(card: AlphaCard) {
        ALPHACARDS.push(card);
    }
}