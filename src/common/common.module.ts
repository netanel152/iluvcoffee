import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';
import { ConfigModule } from '@nestjs/config';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';

@Module({
    imports: [ConfigModule],
    providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }]
})
export class CommonModule {
    configure(consumer: import("@nestjs/common").MiddlewareConsumer) {
        //only for post requests
        consumer.apply(LoggingMiddleware).forRoutes("*");
    }
}
