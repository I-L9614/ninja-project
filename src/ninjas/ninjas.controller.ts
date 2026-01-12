import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){}
    //GET /ninjas?weapon=fast --> []
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        
        return this.ninjasService.getNinjas(weapon)
    }
    //GET/ninjas/:id --> { ... }
    @Get(':id')
    getOneNinja(@Param('id') id: string) {
        return {
            id,
        }
    }
    //POST/ninjas
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto ) {
        return {
            name: createNinjaDto.name
        }
    }
    //PUT/ninjas/:id --> { ... }
    @Put(':id')
    updateinja(@Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
        return {
            id,
            name: UpdateNinjaDto
        }
    }
    //DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id') id: string) {
        return {
            id,
        }
    }
}