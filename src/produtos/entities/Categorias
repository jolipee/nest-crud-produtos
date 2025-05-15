import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@ApiTags('Categorias')
@Controller('categorias')
export class CategoriasController {

  @Post()
  @ApiOperation({ summary: 'Criar uma nova categoria' })
  @ApiResponse({ status: 201, description: 'Categoria criada com sucesso.' })
  create(@Body() dto: CreateCategoriaDto) {
    return { message: 'Categoria criada', data: dto };
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as categorias' })
  @ApiResponse({ status: 200, description: 'Lista de categorias retornada com sucesso.' })
  findAll() {
    return [{ id: 1, nome: 'Eletrônicos' }];
  }
}
