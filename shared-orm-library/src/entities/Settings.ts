import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id!: number; // <-- add !

  @Column()
  isNotificationEnabled!: boolean; // <-- add !

  @Column()
  isNewDashboardEnabled!: boolean; // <-- add !

  @Column()
  timezone!: string; // <-- add !
}