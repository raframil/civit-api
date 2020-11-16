import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateArticleDto } from './article.dto';
import { ArticleService } from './article.service';

@ApiTags('Notícias')
@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Get()
    async list() {
        const articles = await this.articleService.list();
        return articles;
    }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto) {
        const createdArticle = await this.articleService.create(createArticleDto);
        return createdArticle;
    }
}
