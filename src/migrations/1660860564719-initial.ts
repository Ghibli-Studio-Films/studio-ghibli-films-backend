import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1660860564719 implements MigrationInterface {
    name = 'initial1660860564719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_films" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "flm_title" character varying(255) NOT NULL, "flm_original_title" character varying(255) NOT NULL, "flm_image" character varying(255) NOT NULL, "flm_movie_banner" character varying(255) NOT NULL, "flm_description" text NOT NULL, "flm_director" character varying(255) NOT NULL, "flm_productor" character varying(255) NOT NULL, "flm_release_date" character varying(4) NOT NULL, "flm_running_time" character varying(3) NOT NULL, "flm_rt_score" character varying(3) NOT NULL, "flm_created_at" TIMESTAMP NOT NULL DEFAULT now(), "flm_updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1d5629a63c25c107bbe033aff4f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tbl_films"`);
    }

}
