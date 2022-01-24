import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { OtherModule } from './other-module/other.module';

@Module({
    imports: [
        OtherModule,
        BullModule.forRoot({
            redis: {
                port: 6380,
                host: 'localhost',
                // commandTimeout: 1000
            }
        })
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
