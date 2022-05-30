import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Artist } from './artist.entity'
import { CreateArtistDto } from './dtos/create-artist.dto'

@Injectable()
export class ArtistsService {
    constructor(@InjectRepository(Artist) private repo: Repository<Artist>) {}

    create(artistDto: CreateArtistDto) {
        const artist = this.repo.create(artistDto)
        return this.repo.save(artist)
    }

    findAll() {
        return this.repo.find()
    }

    async findOne(id: number) {
        const artist = await this.repo.findOne(id)
        if (!artist) throw new NotFoundException('artist not found')
        return artist
    }

    async remove(id: number) {
        const artist = await this.repo.findOne(id)
        if (!artist) throw new NotFoundException('artist not found')
        return this.repo.remove(artist)
    }

    async update(id: number, attrs: Partial<Artist>) {
        const artist = await this.repo.findOne(id)
        if (!artist) throw new NotFoundException('artist not found')
        Object.assign(artist, attrs)
        return this.repo.save(artist)
    }
}
