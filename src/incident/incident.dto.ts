import { IsOptional, IsString, IsNotEmpty, IsNumber, IsEnum, IsArray, IsObject } from 'class-validator';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';

export enum IncidentStatus {
  AGUARDANDO = 'AGUARDANDO',
  PROCESSANDO = 'PROCESSANDO',
  FINALIZADO = 'FINALIZADO'
}

export class UpdateIncidentDto {
  @ApiProperty({ description: 'Status da ocorrência', enum: ['AGUARDANDO', 'PROCESSANDO', 'FINALIZADO'] })
  @IsNotEmpty()
  @IsString()
  @IsEnum(IncidentStatus)
  status: string;
}

export class CreateIncidentDto {
  @ApiProperty({ description: 'Titulo da ocorrência', example: "Estacionamento em local proibido" })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Data e hora da ocorrência (YYYY-MM-DD HH:mm:ss)', example: "2020-11-15 15:19:32" })
  @IsNotEmpty()
  date: String;

  @ApiProperty({ description: 'Latitude', type: Number, example: 18.109581 })
  @IsNotEmpty()
  @IsNumber()
  latitude: string;

  @ApiProperty({ description: 'Longitude', type: Number, example: -77.297508 })
  @IsNotEmpty()
  @IsNumber()
  longitude: string;

  @ApiProperty({ description: 'Categoria da ocorrência', example: "Infração de trânsito" })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({ description: 'Descrição da ocorrência', example: "Estacionou o carro na faixa amarela. Placa: XYZ-3245" })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'Array de imagens em Base64', type: Object, example: {  "photos": ['12938712783', '812123981293812'] }})
  @IsOptional()
  @IsObject()
  images: string;

  @ApiProperty({ description: 'id do usuário que enviou a solicitação', example: '5fadcfbf5a05ea1d38409626' })
  @IsOptional()
  @IsString()
  userId: string;

  status?: string = 'AGUARDANDO';
}

