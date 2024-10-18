import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(name: string): string {
    const newUser: User = { id: this.users.length + 1, name };
    this.users.push(newUser);
    return newUser.id.toString(); // trả về dạng chuổi
  }

  getAllUsers(): User[] {
    return this.users;
  }
  getUserById(id: string): User | null {
    return this.users.find((user) => user.id.toString() === id) || null;
  }
}
