import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [    ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
    // MongooseModule.forRoot(process.env.DB_URI),
    ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
