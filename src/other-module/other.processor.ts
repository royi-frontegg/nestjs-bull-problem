import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('triggers')
export class OtherProcessor {
    @Process()
    async process(job: Job<unknown>): Promise<void> {
        console.log('here');
        console.log(job);
    }
}