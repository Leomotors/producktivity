import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { AuthenticatorUncheckedUpdateManyWithoutUserNestedInput } from '../authenticator/authenticator-unchecked-update-many-without-user-nested.input';
import { ChallengeUncheckedUpdateOneWithoutUserNestedInput } from '../challenge/challenge-unchecked-update-one-without-user-nested.input';
import { TaskUncheckedUpdateManyWithoutUserNestedInput } from '../task/task-unchecked-update-many-without-user-nested.input';
import { EventUncheckedUpdateManyWithoutUserNestedInput } from '../event/event-unchecked-update-many-without-user-nested.input';
import { HabitUncheckedUpdateManyWithoutUserNestedInput } from '../habit/habit-unchecked-update-many-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUncheckedUpdateWithoutNotificationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    registered?: BoolFieldUpdateOperationsInput;

    @Field(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    authenticators?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ChallengeUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    challenge?: ChallengeUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => EventUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    events?: EventUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => HabitUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
