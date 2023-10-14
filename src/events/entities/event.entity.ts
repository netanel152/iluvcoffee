import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

/* Event */
@Index(['type', 'name'])
@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    type: string;

    @Index()
    @Column()
    name: string;

    @Column('json')
    payload: Record<string, any>;
}
