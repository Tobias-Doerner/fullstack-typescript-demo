import { Expose } from 'class-transformer'

export class ArtistDto {
    @Expose()
    id: number

    @Expose()
    name: string
}
