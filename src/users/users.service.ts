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

    async list() {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getById(id: string) {
        const user = await this.findUser(id);
        return user;
    }

    async create(user: CreateUserDto) {
        const newUser = new this.userModel({
            name: user.name,
            email: user.email,
            phone: user.phone,
            cpf: user.cpf,
            password: user.password
        });
        const result = await newUser.save();
        return result;
    }

    async createAdmin(user: CreateUserDto) {
        const newUser = new this.userModel({
            name: user.name,
            email: user.email,
            phone: user.phone,
            cpf: user.cpf,
            password: user.password,
            role: 'admin'
        });
        const result = await newUser.save();
        return result;
    }

    async updateStatus(id: string, status: boolean) {
        const user = await this.findUser(id);
        console.log(status)
        const res = await user.updateOne({ isEnabled: status });
        return res;
    }

    async delete(id: string) {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find user.');
        }
    }

    private async findUser(id: string): Promise<User> {
        let user;
        try {
            user = await this.userModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find user.');
        }
        if (!user) {
            throw new NotFoundException('Could not find user.');
        }
        return user;
    }

}
