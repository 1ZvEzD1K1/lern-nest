import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:'user@ukr.net', description:'email'})
    @IsString({message: 'only string'})
    @IsEmail({}, {message: 'uncorect email'})
    readonly email: string;
    @ApiProperty({example:'1111', description:'password'})
    @IsString({message: 'only string'})
    @Length(4, 16, {message: '4-16'})
    readonly password: string;
}