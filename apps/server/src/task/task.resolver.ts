import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { User } from "@generated/user/user.model";

import { UserContext } from "src/user/user.decorator";

import { createTaskArgs } from "./dto/task.dto";
import { TaskService } from "./task.service";

@Resolver()
export class TaskResolver {
  constructor(private readonly service: TaskService) {}

  @Mutation(() => Boolean)
  createTask(
    @Args() input: createTaskArgs,
    @UserContext() user: User
  ): Promise<boolean> {
    return this.service.createTask(input, user);
  }
}
