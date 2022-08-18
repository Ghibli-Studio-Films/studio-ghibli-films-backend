import { MigrationInterface, QueryRunner } from "typeorm";

export class addUniqueConstraints1660863213990 implements MigrationInterface {
    name = 'addUniqueConstraints1660863213990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_films" ADD CONSTRAINT "UQ_a8252fe63f5b97d67ddd4778f7d" UNIQUE ("flm_title")`);
        await queryRunner.query(`ALTER TABLE "tbl_films" ADD CONSTRAINT "UQ_d059a8d127f325c1ed71b3cfce8" UNIQUE ("flm_original_title")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_films" DROP CONSTRAINT "UQ_d059a8d127f325c1ed71b3cfce8"`);
        await queryRunner.query(`ALTER TABLE "tbl_films" DROP CONSTRAINT "UQ_a8252fe63f5b97d67ddd4778f7d"`);
    }

}
