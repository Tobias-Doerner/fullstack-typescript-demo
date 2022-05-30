import { IsString, IsOptional } from 'class-validator'

export class UpdateArtistDto {
    @IsString()
    @IsOptional()
    name: string
}
