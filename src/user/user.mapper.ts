import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';

/**
 * Updates userEntity's fields with userDto defined field values.
 * Ignores relations. Does not update some fields' values (id, email) on purpose.
 * @param userEntity Entity to update fields
 * @param userDto Model that contains new values
 */
export function updateUserEntityFields(
  userEntity: UserEntity,
  userDto: UserDto,
): UserEntity {
  const updatedUserEntity = new UserEntity();
  // id cannot change
  updatedUserEntity.id = userEntity.id;
  updatedUserEntity.email = userEntity.email;
  updatedUserEntity.firstName = (userDto.firstName !== undefined)
    ? userDto.firstName : userEntity.firstName;
  updatedUserEntity.lastName = (userDto.lastName !== undefined)
    ? userDto.lastName : userEntity.lastName;
  return updatedUserEntity;
}
