import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * retrieve the current user with a decorator
 * example of a controller method:
 * @Post()
 * someMethod(@Usr() user: UserEntity) {
 * }
 */
export const Usr = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const requestBody = ctx.switchToHttp().getRequest().body;
    return requestBody.user;
  },
);
