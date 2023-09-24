export class validation{
    isInputEmpty(input: any) : boolean{
        return [undefined, null, ''].includes(input);
      }
}
