import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { PrismaService } from "./prisma.service";

import { AppController } from "./app.controller";

import { AuthModule } from "./auth/auth.module";
import { EventModule } from "./event/event.module";
import { HabitModule } from "./habit/habit.module";
import { NotificationModule } from "./notification/notification.module";
import { TaskModule } from "./task/task.module";
import { UserModule } from "./user/user.module";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "../../.env",
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
      autoSchemaFile: "./src/@generated/schema.graphql",
    }),
    AuthModule,
    EventModule,
    HabitModule,
    NotificationModule,
    TaskModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
