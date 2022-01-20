import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { OtherController } from './other.controller';
import { OtherProcessor } from './other.processor';
import { OtherService } from './other.service';

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'triggers'
        })
    ],
    controllers: [
        OtherController
    ],
    providers: [
        OtherService,
        OtherProcessor
    ]
})
export class OtherModule { }