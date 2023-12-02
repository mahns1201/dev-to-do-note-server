import { SwaggerResponseDto } from 'src/common/common.dto';
import { UserDto } from './user.dto';
declare const InputCreateUserDto_base: import("@nestjs/common").Type<Omit<UserDto, "createdAt" | "updatedAt" | "deletedAt" | "id">>;
export declare class InputCreateUserDto extends InputCreateUserDto_base {
}
export declare class OutputCreateUserDto extends SwaggerResponseDto<UserDto> {
}
export {};
