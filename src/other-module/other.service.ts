import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class OtherService {
    constructor(@InjectQueue('triggers') private readonly queue: Queue) { }

    async getHello(): Promise<void> {
        console.log('sdfsdfsdfsdfsdfsdfsdfsdf')
        await this.queue.add({ shit: 'poop' }, { delay: 2000 });
    }
}
