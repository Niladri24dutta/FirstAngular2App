import {Pipe,PipeTransform} from  '@angular/core';
import {IProduct} from './product'

@Pipe(
    {
        name:'productFilter'
    }
)

export class ProductFilterPipe implements PipeTransform{

    transform(values:IProduct[],args:string):IProduct[]{
        let filter:string = args?args.toLocaleLowerCase():null;
        return filter?values.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filter)!= -1):values;
    }
}