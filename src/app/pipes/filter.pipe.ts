import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString: string): any {
    
    if(value.length === 0 || searchString === ''){
       return value;
    }
    
    const resultArray = [];

    for(const item of value){
        if(item.name.toLowerCase().indexOf(searchString) + 1 ){
          resultArray.push(item);
        }

    }

    return resultArray;
  }

}
