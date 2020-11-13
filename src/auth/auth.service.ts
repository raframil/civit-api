import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    async login(cpf: string, password: string) {
        return { message: 'Login realizado', cpf };
    }
}
