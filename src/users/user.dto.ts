import { isEmail } from "class-validator";

import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    role: string = 'user';

    isEnabled?: boolean = true;
}
