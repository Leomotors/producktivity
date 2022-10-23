import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CaseOrderByWithRelationInput } from '../case/case-order-by-with-relation.input';

@InputType()
export class HabitOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => CaseOrderByWithRelationInput, {nullable:true})
    case?: CaseOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    caseId?: keyof typeof SortOrder;
}
