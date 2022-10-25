import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticatorUncheckedCreateNestedManyWithoutUserInput } from '../authenticator/authenticator-unchecked-create-nested-many-without-user.input';
import { ChallengeUncheckedCreateNestedOneWithoutUserInput } from '../challenge/challenge-unchecked-create-nested-one-without-user.input';
import { TaskUncheckedCreateNestedManyWithoutUserInput } from '../task/task-unchecked-create-nested-many-without-user.input';
import { HabitUncheckedCreateNestedManyWithoutUserInput } from '../habit/habit-unchecked-create-nested-many-without-user.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutEventsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    registered?: boolean;

    @Field(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    authenticators?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ChallengeUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    challenge?: ChallengeUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => HabitUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}