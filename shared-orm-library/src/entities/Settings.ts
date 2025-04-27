import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  isNotificationEnabled!: boolean; 

  @Column()
  isNewDashboardEnabled!: boolean; 

  @Column()
  timezone!: string; 
}