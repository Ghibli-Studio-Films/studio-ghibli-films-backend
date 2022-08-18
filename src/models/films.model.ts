import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("tbl_films")
export class Film {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "flm_title", type: "varchar", length: 255, unique: true })
  title: string;

  @Column({
    name: "flm_original_title",
    type: "varchar",
    length: 255,
    unique: true,
  })
  original_title: string;

  @Column({ name: "flm_image", type: "varchar", length: 255 })
  image: string;

  @Column({ name: "flm_movie_banner", type: "varchar", length: 255 })
  movie_banner: string;

  @Column({ name: "flm_description", type: "text" })
  description: string;

  @Column({ name: "flm_director", type: "varchar", length: 255 })
  director: string;

  @Column({ name: "flm_productor", type: "varchar", length: 255 })
  producer: string;

  @Column({ name: "flm_release_date", type: "varchar", length: 4 })
  release_date: string;

  @Column({ name: "flm_running_time", type: "varchar", length: 3 })
  running_time: string;

  @Column({ name: "flm_rt_score", type: "varchar", length: 3 })
  rt_score: string;

  @CreateDateColumn({ name: "flm_created_at", select: false })
  created_at: Date;

  @UpdateDateColumn({ name: "flm_updated_at", select: false })
  updated_at: Date;
}
