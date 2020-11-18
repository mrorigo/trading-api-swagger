import { ApiProperty } from '@nestjs/swagger';

export class OpenCloseHours {
  @ApiProperty()
  time: string;
  @ApiProperty()
  fake: boolean;
  @ApiProperty()
  type: string;
}
