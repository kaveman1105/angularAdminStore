import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myCard'
})

export class CardPipe implements PipeTransform {
    transform(value: string): string {
        return 'Card ending in ' + value;
    }
}
