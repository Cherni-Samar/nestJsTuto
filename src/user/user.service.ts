import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

    filterUsers(firstName: string | undefined, age: number | undefined) {
        const user = this.users.find((u) => u.firstName === firstName && u.age === age);

        if (!user) {
            throw new Error(`User with FisrtName ${firstName} not found`);
        } else {
            //console.log(user);
            return user;

        }
    }

    //dans ce prosit on veux travailler statiquement sans base de donnee
    private users: User[] = [];
    private idCounter = 1;

    Create(createUserDto: CreateUserDto): User {

        const newUser: User = {
            id: this.idCounter++,
            ...createUserDto,
        };
        this.users.push(newUser);
        return newUser;
    }
    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User {
        const user = this.users.find((u) => u.id === id);

        console.log('📌 Requête GET /user/detail avec ID:', id, typeof id);
        console.log('👤 Utilisateur trouvé:', user);

        if (!user) {
            throw new Error(`User with ID ${id} not found`);
        } else {
            //console.log(user);
            return user;


        }
    }
    update(id: number, updateUserDto: UpdateUserDto): User {

        const userIndex = this.users.findIndex((u) => u.id === id);
        if (userIndex === -1) {
            throw new Error(`User with ID ${id} not found`);
        }
        const updatedUser = { ...this.users[userIndex], ...updateUserDto };
        this.users[userIndex] = updatedUser;
        return updatedUser;

    }

    remove(id: number): void {
        const index = this.users.findIndex((u) => u.id === id);
        if (index === -1) {
            throw new Error(`User with ID ${id} not found`);
        }
        this.users.splice(index, 1);
    }
}
