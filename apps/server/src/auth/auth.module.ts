import { Module } from "@nestjs/common";

import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { RegisterService } from "./register.service";
import { RsaService } from "./rsa.service";

@Module({
  providers: [AuthResolver, AuthService, RegisterService, RsaService],
})
export class AuthModule {}
