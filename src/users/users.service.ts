import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) { }

    async create(user: CreateUserDto) {
        const newUser = new this.userModel({
            email: user.email,
            password: user.password
        });
        const result = await newUser.save();
        return result;
    }

    async list() {
        const users = await this.userModel.find().exec();
        return users;
    }

    async delete(id: string) {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find user.');
        }
    }

}
