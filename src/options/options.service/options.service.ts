import { Injectable } from '@nestjs/common';
import { Option } from '../entities/option.entity';
import { CreateOptionDto } from '../dto/create-option-dto';

@Injectable()
export class OptionsService{

    private options: Option[] = [];
    private idCounter = 1;
    create(createOptionDto: CreateOptionDto): Option {
        const newOption: Option = {
            id: this.idCounter++,
            ...createOptionDto,
        };
        this.options.push(newOption);
        return newOption;
    }

    findAll(): Option[] {
        return this.options;
    }
    findOne(id:number): Option {
        const option = this.options.find((u)=>u.id === id);
        if (!option) {
            throw new Error(`Option with ID ${id} not found`);
        }
        return option;
    }

    update(id: number, updateOptionDto: CreateOptionDto): Option {
        const index = this.options.findIndex((u) => u.id === id);
        if (index === -1) {
            throw new Error(`Option with ID ${id} not found`);
        }
        const updatedOption: Option = {
            id: id,
            ...updateOptionDto,
        } as Option;
        this.options[index] = updatedOption;
        return this.options[index];
}
}