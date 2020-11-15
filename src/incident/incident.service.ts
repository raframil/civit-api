import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIncidentDto } from './incident.dto';
import { Incident } from './incident.model';
import * as crypto from "crypto";


@Injectable()
export class IncidentService {
    constructor(
        @InjectModel('Incident') private readonly incidentModel: Model<Incident>,
    ) { }

    async list() {
        const incidents = await this.incidentModel.find().exec();
        return incidents;
    }

    async create(incident: CreateIncidentDto) {
        const protocol = crypto.randomBytes(10).toString('hex');
        incident.protocol = protocol;
        const newIncident = new this.incidentModel(incident);
        const result = await newIncident.save();
        return result;
    }

    
}
