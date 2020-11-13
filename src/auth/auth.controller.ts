import { Body, Controller, Post } from '@nestjs/common';
import { AuthUserDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    async create(@Body() auth: AuthUserDto) {
        const cpf = auth.cpf;
        const password = auth.password;
        const createdUser = await this.authService.login(cpf, password);
        return createdUser;
    }
}
