import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post
} from '@nestjs/common'
import { Serialize } from 'src/interceptors/serialize.interceptor'
import { ArtistsService } from './artists.service'
import { ArtistDto } from './dtos/artist.dto'
import { CreateArtistDto } from './dtos/create-artist.dto'
import { UpdateArtistDto } from './dtos/update-artist.dto'

@Controller('artists')
@Serialize(ArtistDto)
export class ArtistsController {
    constructor(private artistsService: ArtistsService) {}

    @Post('/')
    create(@Body() body: CreateArtistDto) {
        return this.artistsService.create(body)
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.artistsService.remove(id)
    }

    @Get('/')
    getAll() {
        return this.artistsService.findAll()
    }

    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.artistsService.findOne(id)
    }

    @Patch('/:id')
    update(@Param('id') id: number, @Body() body: UpdateArtistDto) {
        return this.artistsService.update(id, body)
    }
}
