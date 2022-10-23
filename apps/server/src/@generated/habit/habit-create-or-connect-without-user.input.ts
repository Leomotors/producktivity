import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutUserInput } from './habit-create-without-user.input';

@InputType()
export class HabitCreateOrConnectWithoutUserInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateWithoutUserInput, {nullable:false})
    @Type(() => HabitCreateWithoutUserInput)
    create!: HabitCreateWithoutUserInput;
}
