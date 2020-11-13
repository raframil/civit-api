import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    cpf: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
}
