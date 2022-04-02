import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoController {
  public async index(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        name: 'Victor',
      },
      {
        id: 2,
        name: 'Alam',
      },
    ]
  }
  public async store(ctx: HttpContextContract){
    return [
      {
        success: 'sucesso',
      },
    ]
  }
}
