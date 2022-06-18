// Ex:Custom Pipe  - Parameterless

import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'sentencecase'
})
export class SentenceCasePipe implements PipeTransform
{
    transform(value:any) {
        let firstChar = value.charAt(0);
        let restChars = value.substring(1);
        let sentence = firstChar.toUpperCase()+restChars.toLowerCase();
        return sentence;
    }
}