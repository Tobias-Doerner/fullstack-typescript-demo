import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ArtistsModule } from './artists/artists.module'
import { Artist } from './artists/artist.entity'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    type: 'sqlite',
                    database: config.get<string>('DB_NAME'),
                    synchronize: true,
                    entities: [Artist]
                }
            }
        }),
        ArtistsModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
    constructor(private configService: ConfigService) {}
}
