import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateIncidentDto } from './incident.dto';
import { IncidentService } from './incident.service';

@Controller('incidents')
export class IncidentController {
    constructor(private readonly incidentService: IncidentService) { }

    @Get()
    async list() {
        const incidents = await this.incidentService.list();
        return incidents;
    }

    @Post()
    async create(@Body() createIncidentDto: CreateIncidentDto) {
        const createdIncident = await this.incidentService.create(createIncidentDto);
        return createdIncident;
    }
}
