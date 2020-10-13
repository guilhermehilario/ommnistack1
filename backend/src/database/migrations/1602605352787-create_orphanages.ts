import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602605352787 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Realizar alterações
    // Criar tabela, criar um novo campo, deletar algum campo

    await queryRunner.createTable( new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'text',
          default: false,
        }
      ],
    }) )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Desfazer o que foi feito UP
    await queryRunner.dropTable('orphanages');
  }

}
