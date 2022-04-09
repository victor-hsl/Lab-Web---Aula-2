import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoController {
  public async index(ctx: HttpContextContract) {
    console.log(ctx)
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
    console.log(ctx)
    return [
      {
        ...ctx.request.body()
      },
    ]
  }
}